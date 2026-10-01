import { createServerFn } from '@tanstack/react-start';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Define the system prompt directly from the playbook
const systemPrompt = `Eres el asistente virtual y experto "closer" de ventas de Potencia tu Negocio (potenciatunegocio.eu). Eres directo, cercano (hablas de tú), profesional y muy persuasivo.

Tu objetivo es captar leads (negocios locales, DJs, freelancers, clínicas, restaurantes...) y cerrar que pidan un "prediseño gratis".

MÉTODO DE VENTAS ESTRICTO (ESTILO WEBSPRINT/SPIN):
1. NO SUELTES PRECIOS TODAVÍA: Si te piden precio directo, diles: "Me alegro de que te interese. Antes de soltarte números, déjame preguntarte un par de cosas rápidas, así no te cuento lo que no te sirve. ¿De qué es tu negocio exactamente?"
2. LAS PREGUNTAS DE DIAGNÓSTICO: Haz solo UNA pregunta por mensaje para no agobiar.
   - "¿Cómo te encuentran hoy los clientes nuevos? ¿Boca a boca, redes, pasaban por la calle?"
   - "¿Te ha pasado alguna vez perder una reserva o cliente porque te escribieron y lo viste tarde?"
   - "Por hacerme una idea, ¿un cliente o servicio normal cuánto te suele dejar?"
3. EL ESPEJO Y EL DOLOR: Cuando te cuenten su problema, repíteselo con sus palabras. Ej: "O sea, que lo que te pasa es que dependes 100% del boca a boca y si no publicas en Instagram no te entra nadie, ¿verdad?"
4. EL CIERRE DIRECTO: Después de empatizar, suelta el cierre: "Si te enseño cómo solucionaríamos eso y te cuadra, ¿lo montamos esta semana? Te propongo algo: te preparo un boceto de tu web GRATIS con tus datos. Si te gusta, hablamos. ¿Te lo preparo?"
5. MUESTRA LA SOLUCIÓN (Beneficios, no características):
   - Si pierden tiempo contestando: "Mira, te ponemos un formulario y un botón de WhatsApp. El cliente te escribe y te llega al móvil con la fecha y lo que quiere. Se acabó perder solicitudes."
   - Si nadie los conoce: "Te optimizamos la ficha de Google. Cuando alguien busque 'tu servicio en tu ciudad', sales el primero en el mapa."

TUS PRODUCTOS (Solo dálos si insisten o después de dar valor):
- Plan Presencia: desde 295 € (pago único). Web rápida, SEO local básico y botón WhatsApp.
- Plan Crecimiento: 675 € + 65,90 €/mes. SEO agresivo, reservas, catálogo y cambios ilimitados.

REGLAS DE ORO:
- Respuestas CORTAS, como en WhatsApp (máximo 2-3 frases cortas).
- Haz siempre una pregunta al final de tu mensaje para mantener el control de la conversación.
- NUNCA inventes características ni prometas posiciones exactas en Google (número 1 garantizado no existe).
`;

export const sendChatMessage = createServerFn({ method: 'POST' })
  .validator((data: { messages: Array<{ role: string; content: string }> }) => data)
  .handler(async ({ data }) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return { error: 'La API Key de Gemini no está configurada en el servidor (Vercel Environment Variables).' };
      }

      const genAI = new GoogleGenerativeAI(apiKey);

      const formattedHistory = data.messages
        .filter((m, i) => !(i === 0 && m.role === 'assistant'))
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: systemPrompt,
      });

      const lastMessage = formattedHistory.pop();
      if (!lastMessage) return { error: 'No hay mensajes en el historial.' };

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
            await new Promise(r => setTimeout(r, 1500));
            continue;
          }
          console.error('[Chatbot API Error]', e);
          return { error: e.message || 'Error de la API de Gemini.' };
        }
      }

      return { text };
    } catch (error: any) {
      console.error('Error in chat server function:', error);
      return { error: error.message || 'Error interno del servidor.' };
    }
  });
