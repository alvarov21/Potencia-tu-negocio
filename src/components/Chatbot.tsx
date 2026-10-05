import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, CheckCircle2 } from 'lucide-react';
import { sendChatMessage } from '../lib/chat';
import { useServerFn } from '@tanstack/react-start';
import { trackEvent } from '../lib/analytics';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

// El bot añade esta marca cuando el cliente quiere su prediseño: el chat la quita y muestra el formulario
const FORM_TOKEN = /\[\s*FORMULARIO\s*\]/gi;
// Mismo destino que el formulario de contacto de la web
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@potenciatunegocio.eu';
const WHATSAPP_URL = 'https://wa.me/34644905837';

type LeadStatus = 'idle' | 'sending' | 'sent' | 'error';

function cleanBotText(text: string) {
  // El chat muestra texto plano: quitamos la marca del formulario y los asteriscos de negrita
  return text.replace(FORM_TOKEN, '').replace(/\*\*/g, '').trim();
}

function buildTranscript(messages: Message[]) {
  return messages
    .slice(1)
    .map(m => `${m.role === 'user' ? 'Cliente' : 'Asistente'}: ${m.content}`)
    .join('\n\n')
    .slice(-6000);
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte a potenciar tu negocio hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formAt, setFormAt] = useState<number | null>(null);
  const [leadStatus, setLeadStatus] = useState<LeadStatus>('idle');
  
  const sendMessageFn = useServerFn(sendChatMessage);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, formAt, leadStatus]);

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (leadStatus === 'sending') return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._honey) return; // relleno por un bot de spam

    setLeadStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `Nuevo cliente desde el chatbot: ${data.negocio}`,
          _template: 'table',
          origen: 'Chatbot de la web',
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email,
          negocio: data.negocio,
          mensaje: buildTranscript(messages),
        }),
      });
      const json = await res.json().catch(() => ({}));
      // FormSubmit responde success "true" solo si el correo ha salido de verdad
      if (!res.ok || String(json.success) !== 'true') {
        throw new Error(json.message || `HTTP ${res.status}`);
      }
      setLeadStatus('sent');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `¡Recibido, ${data.nombre}! Álvaro te escribe en menos de 24 horas para enseñarte tu prediseño.`,
      }]);
      trackEvent('generate_lead', { form_name: 'chatbot' });
    } catch (error) {
      console.error('[Chatbot] Error al enviar el formulario:', error);
      setLeadStatus('error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Call secure server function with 25s timeout
      const response = await Promise.race([
        sendMessageFn({ data: { messages: newMessages } }),
        new Promise<any>((_, reject) => 
          setTimeout(() => reject(new Error('Timeout de conexión')), 25000)
        )
      ]);
      
      if (response.error) {
        // En desarrollo mostramos el error real en la UI; en producción mostramos el mensaje amable para no alarmar al visitante
        console.error('[Chatbot] Error del servidor:', response.error);
        setMessages(prev => [...prev, { role: "assistant", content: import.meta.env.DEV ? `Ups, error técnico: ${response.error}` : "Ups, parece que mis servidores están saturados ahora mismo. ¿Puedes escribirme por WhatsApp mejor?" }]);
      } else if (response.text) {
        const wantsForm = /\[\s*FORMULARIO\s*\]/i.test(response.text);
        const content = cleanBotText(response.text) || '¡Genial! Déjame tus datos aquí abajo y Álvaro te prepara tu prediseño.';
        // El mensaje del bot ocupa la posición newMessages.length (el input está bloqueado mientras carga)
        if (wantsForm && leadStatus !== 'sent') setFormAt(newMessages.length);
        setMessages(prev => [...prev, { role: 'assistant', content }]);
      }
    } catch (error: any) {
      console.error('[Chatbot] Error de red o de ejecución:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Parece que estoy sin cobertura ahora mismo. Escríbenos por WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-glow z-50 transition-transform hover:scale-105 active:scale-95 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border shadow-xl rounded-2xl flex flex-col overflow-hidden z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white leading-tight">Asistente</h3>
              <p className="text-[10px] text-white/80 font-medium">Potencia tu negocio</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition bg-white/10 hover:bg-white/20 rounded-full p-1.5"
            aria-label="Cerrar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/10">
          {messages.map((msg, idx) => (
            <div key={idx} className="space-y-3">
              <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-br-sm' 
                    : 'bg-muted border border-border text-foreground rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>

              {/* Formulario de prediseño dentro del chat */}
              {idx === formAt && leadStatus !== 'sent' && (
                <form onSubmit={handleLeadSubmit} className="bg-card border border-border rounded-2xl p-3 space-y-2 text-sm">
                  <p className="font-semibold text-foreground">Pide tu prediseño gratis</p>
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <input name="nombre" required placeholder="Tu nombre" aria-label="Tu nombre" autoComplete="name" className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
                  <input name="telefono" required type="tel" placeholder="Teléfono o WhatsApp" aria-label="Teléfono o WhatsApp" autoComplete="tel" className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
                  <input name="email" type="email" placeholder="Email (opcional)" aria-label="Email" autoComplete="email" className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
                  <input name="negocio" required placeholder="Nombre del negocio y ciudad" aria-label="Nombre del negocio y ciudad" className="w-full px-3 py-2 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
                  <button type="submit" disabled={leadStatus === 'sending'} className="w-full py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition disabled:opacity-60 inline-flex items-center justify-center gap-2">
                    {leadStatus === 'sending' ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : 'Quiero mi prediseño'}
                  </button>
                  {leadStatus === 'error' && (
                    <p className="text-xs text-destructive">
                      No se ha podido enviar. Vuelve a intentarlo o{' '}
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline font-medium" onClick={() => trackEvent('click_whatsapp', { cta_location: 'chatbot_form_error' })}>escríbenos por WhatsApp</a>.
                    </p>
                  )}
                  <p className="text-[11px] text-muted-foreground">Te contestamos en menos de 24 h. Sin compromiso.</p>
                </form>
              )}
              {idx === formAt && leadStatus === 'sent' && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Datos enviados
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-3 bg-card border-t border-border">
          <form onSubmit={handleSubmit} className="flex gap-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="flex-1 bg-muted border border-border rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-1 top-1 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full disabled:opacity-50 disabled:bg-muted disabled:text-muted-foreground transition"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
