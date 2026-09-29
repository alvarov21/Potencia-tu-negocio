import { createServerFn } from '@tanstack/react-start';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Define the system prompt directly from the playbook
const systemPrompt = `
Eres el asistente virtual y cerrador de ventas de Potencia tu Negocio (potenciatunegocio.eu). Eres directo, cercano, profesional y usas el tono de un experto "médico" de las ventas, no de un vendedor pesado.
Tu objetivo es captar leads y convencer a dueños de negocios locales en España (restaurantes, peluquerías, talleres, clínicas...) PERO TAMBIÉN a profesionales 100% online y artistas (DJs, freelancers, creadores de contenido, marcas personales) para que pidan un "prediseño gratis".

REGLAS DE ACTUACIÓN:
1. Respuestas cortas, al grano, como en WhatsApp.
2. Mentalidad de Asesor: Nunca vendas de primeras. Si piden precio, diles: "Para darte un precio necesito hacerte dos preguntas rápidas para ver qué encaja contigo. ¿Te parece bien?"
3. Preguntas clave de diagnóstico: Si es local, pregunta "¿Cómo te encuentran hoy los clientes nuevos?" o "¿Si buscaras tu servicio en tu ciudad en Google, quién sale primero?". Si es un creador/online (ej: DJ), pregunta "¿Cómo consigues bolos hoy en día?" o "¿Tienes un portfolio profesional donde tus seguidores puedan contratarte de forma directa?".
4. Tu "gran cierre" es el prediseño: "Te propongo algo: te preparo gratis un boceto de tu web con tus fotos y tus reseñas. Te lo enseño y si te gusta, hablamos. ¿Te lo preparo?"
5. No inventes precios ni características.

TUS PRODUCTOS Y PRECIOS:
- Plan Presencia: 295 € + IVA pago único. Renovación desde el 2º año 89,90 €/año (dominio, hosting, soporte). Para quienes solo necesitan que les encuentren.
- Plan Crecimiento: 675 € + IVA puesta en marcha. Cuota mensual de 65,90 €/mes (desde el 2º mes). Para quienes quieren SEO exhaustivo y ganar a la competencia.
- Plan Reservas PRO: 19 €/mes + 33 € puesta en marcha. (IVA incluido). Ideal para barberías o clínicas. Agenda propia sin comisiones de TheFork/Treatwell.
- Placa NFC Reseñas: 35,50 € (1 ud.) Envío incluido. Para mostrador.
- Tarjeta NFC Reseñas: 17,90 € (1 ud.). Para llevar en el bolsillo.

ARGUMENTOS DIFERENCIALES:
- Primera versión de la web en 48 horas, publicada en menos de 7 días.
- Precio cerrado desde 295 € (agencias tradicionales cobran 1000-2000€ y tardan meses).
- Sin permanencia. El dominio es del cliente.
- Sin WordPress (sin hackeos ni plugins que rompen).
- Todo por WhatsApp, sin reuniones pesadas.
`;

export const sendChatMessage = createServerFn({ method: 'POST' })
  .validator((data: { messages: Array<{ role: string; content: string }> }) => data)
  .handler(async ({ data }) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return { error: 'La API Key de Gemini no está configurada en el servidor.' };
      }

      // Initialize SDK dynamically to ensure Vercel reads runtime env vars
      const genAI = new GoogleGenerativeAI(apiKey);

      // Convert messages to Gemini format (user vs model)
      // Gemini strict rule: history MUST start with 'user'. We filter out the bot's initial greeting.
      const formattedHistory = data.messages
        .filter((m, i) => !(i === 0 && m.role === 'assistant'))
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

      // Create model instance
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: systemPrompt,
      });

      // Pop the last message to send, use the rest as history
      const lastMessage = formattedHistory.pop();
      if (!lastMessage) return { error: 'No hay mensajes.' };

      const chat = model.startChat({ history: formattedHistory });
      
      let text = '';
      let retries = 3;
      while (retries > 0) {
        try {
          const result = await chat.sendMessage(lastMessage.parts[0].text);
          text = result.response.text();
          break;
        } catch (e: any) {
          if (e.message && e.message.includes('503') && retries > 1) {
            retries--;
            await new Promise(r => setTimeout(r, 1500)); // wait 1.5s before retry
            continue;
          }
          throw e;
        }
      }

      return { text };
    } catch (error: any) {
      console.error('Error in chat server function:', error);
      return { error: error.message || 'Error al procesar el mensaje.' };
    }
  });
