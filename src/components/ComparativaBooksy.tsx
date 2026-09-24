import { Check, X } from "lucide-react";

export function ComparativaBooksy() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-primary/20">La Diferencia</span>
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight">Por qué los profesionales se cambian</h3>
        <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
          Las apps tradicionales te meten en un directorio donde compites por precio con el local de enfrente. Nosotros te construimos un ecosistema digital 100% privado donde tú eres el único protagonista.
        </p>
      </div>

      <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
        <div className="min-w-[700px] w-full bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative">
          
          <div className="grid grid-cols-3 bg-muted/20 border-b border-border">
            <div className="p-6 flex items-center justify-start font-semibold text-muted-foreground">¿Qué ocurre con...?</div>
            <div className="p-6 flex flex-col items-center justify-center border-l border-border bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
              <span className="font-bold text-lg text-foreground">Potencia tu Negocio</span>
              <span className="text-xs font-medium text-primary mt-1 bg-primary/10 px-2 py-0.5 rounded-full">Plan Reservas PRO</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center border-l border-border bg-background/50 opacity-80">
              <span className="font-bold text-lg text-foreground">Booksy / Treatwell</span>
              <span className="text-xs font-medium text-muted-foreground mt-1">Marketplaces</span>
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b border-border hover:bg-muted/10 transition group">
            <div className="p-6 flex flex-col justify-center">
              <span className="font-semibold text-foreground">Tu página web</span>
              <span className="text-xs text-muted-foreground mt-1 leading-relaxed">¿Dónde aterrizan tus clientes cuando te buscan?</span>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center bg-primary/5 group-hover:bg-primary/10 transition">
              <div>
                <Check className="w-6 h-6 text-green-500 mx-auto mb-3" />
                <span className="text-sm font-bold text-foreground">Web corporativa propia</span><br/>
                <span className="text-xs text-muted-foreground">Ej: <span className="text-primary">tubarberia.es</span></span>
              </div>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center opacity-70 group-hover:opacity-100 transition">
              <div>
                <X className="w-6 h-6 text-red-500 mx-auto mb-3" />
                <span className="text-sm font-semibold text-foreground">Un perfil en su portal</span><br/>
                <span className="text-xs text-muted-foreground">Apilado junto a tu competencia</span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b border-border hover:bg-muted/10 transition group">
            <div className="p-6 flex flex-col justify-center">
              <span className="font-semibold text-foreground">Ficha de Google Maps</span>
              <span className="text-xs text-muted-foreground mt-1 leading-relaxed">¿Qué pasa cuando integras su sistema en Google?</span>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center bg-primary/5 group-hover:bg-primary/10 transition">
              <div>
                <Check className="w-6 h-6 text-green-500 mx-auto mb-3" />
                <span className="text-sm font-bold text-foreground">El tráfico es tuyo</span><br/>
                <span className="text-xs text-muted-foreground">El botón "Sitio Web" va a TU web</span>
              </div>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center opacity-70 group-hover:opacity-100 transition">
              <div>
                <X className="w-6 h-6 text-red-500 mx-auto mb-3" />
                <span className="text-sm font-semibold text-foreground">Secuestran tu tráfico</span><br/>
                <span className="text-xs text-muted-foreground">Sustituyen el botón por un enlace a su app</span>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 hover:bg-muted/10 transition group">
            <div className="p-6 flex flex-col justify-center">
              <span className="font-semibold text-foreground">Precio mensual</span>
              <span className="text-xs text-muted-foreground mt-1 leading-relaxed">Ejemplo: Un local con 4 barberos en plantilla.</span>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center bg-primary/[0.07] group-hover:bg-primary/[0.12] transition">
              <div>
                <span className="text-2xl font-black text-primary">19€ <span className="text-sm font-medium text-muted-foreground">/mes</span></span><br/>
                <span className="text-xs font-bold text-foreground mt-1 block">Tarifa Plana (IVA incl.)</span>
                <span className="text-[11px] text-muted-foreground">Empleados ilimitados. Sin sorpresas.</span>
              </div>
            </div>
            <div className="p-6 border-l border-border flex items-center justify-center text-center opacity-70 group-hover:opacity-100 transition">
              <div>
                <span className="text-2xl font-black text-foreground">~71€ <span className="text-sm font-medium text-muted-foreground">/mes</span></span><br/>
                <span className="text-xs font-semibold text-foreground mt-1 block">Suma de cuotas</span>
                <span className="text-[11px] text-muted-foreground">Base + (8€ x 3 empleados extra) + IVA</span>
              </div>
            </div>
          </div>
          
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-4 max-w-3xl mx-auto px-4 opacity-60">
          * Datos de competidores basados en tarifas públicas para España. La comparativa tiene fines informativos y asume la suma del plan base y complementos por empleado de la plataforma mencionada.
        </p>
      </div>
    </div>
  );
}
