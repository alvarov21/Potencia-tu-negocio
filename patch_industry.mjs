import fs from 'fs';

let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Add icons to import
content = content.replace(
  'Paintbrush, Rocket, X, Info, Zap, ShieldCheck, Layers',
  'Paintbrush, Rocket, X, Info, Zap, ShieldCheck, Layers, Stethoscope, Wrench'
);

// 2. Add IndustryProblems component before function Footer
const newComponent = `
function IndustryProblems() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: "hosteleria",
      title: "Hostelería",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      pain: "Menús en PDF que los clientes no pueden leer bien en el móvil, que Google no indexa y pagar un 20% de comisión a plataformas externas como JustEat o TheFork por cada reserva.",
      solution: "Carta digital nativa y responsiva (Google indexa cada uno de tus platos) y un botón de reservas automático conectado a tu WhatsApp. El 100% de los ingresos se quedan en tu bolsillo.",
    },
    {
      id: "clinicas",
      title: "Clínicas y Salud",
      icon: <Stethoscope className="w-5 h-5" />,
      pain: "Los pacientes buscan en Google Maps 'dentista cerca de mí' o 'fisioterapeuta' y eligen a la competencia porque tienen una ficha más optimizada y con más reseñas que tú.",
      solution: "Te posicionamos en el 'Top 3' del mapa mediante SEO Local. Incluimos placas NFC de diseño en tu recepción para que los pacientes te dejen reseñas de 5 estrellas con solo acercar el móvil.",
    },
    {
      id: "servicios",
      title: "Servicios y Reformas",
      icon: <Wrench className="w-5 h-5" />,
      pain: "Pasar horas haciendo presupuestos para clientes que solo buscan 'lo más barato' porque tu presencia digital actual no transmite autoridad ni justifica tus precios.",
      solution: "Una web corporativa Premium que transmite máxima autoridad desde el segundo 1. Añadimos formularios inteligentes para cualificar a los curiosos antes de que te hagan perder el tiempo al teléfono.",
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            No hacemos webs genéricas. <br/><span className="text-primary">Resolvemos los problemas de tu sector.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige tu industria y descubre por qué nuestro método deja obsoleta a tu competencia local.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Tabs Selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={\`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 \${
                  activeTab === idx 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" 
                    : "bg-background border border-border hover:border-primary/50 text-foreground hover:bg-muted/50"
                }\`}
              >
                <div className={\`p-3 rounded-full \${activeTab === idx ? "bg-white/20" : "bg-muted"}\`}>
                  {tab.icon}
                </div>
                <span className="font-semibold text-lg">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <div className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-sm relative overflow-hidden transition-all duration-500 min-h-[380px] flex flex-col justify-center">
              
              {/* Background gradient hint based on active tab */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-10">
                {/* Problema */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <X className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">El problema de tu sector</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed pl-11">
                    {tabs[activeTab].pain}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Solución */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Nuestra solución</h3>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed pl-11 font-medium">
                    {tabs[activeTab].solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

`;

content = content.replace('function Footer() {', newComponent + '\nfunction Footer() {');

// 3. Mount it inside Home()
content = content.replace(
  '<AntiWordPressSection />',
  '<AntiWordPressSection />\n        <IndustryProblems />'
);

fs.writeFileSync('src/routes/index.tsx', content, 'utf8');
console.log('Patched index.tsx successfully');
