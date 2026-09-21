const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// 1. Remove the standalone <SaaSFeatures />
content = content.replace(/<SaaSFeatures \/>\s*/, '');

// 2. Put the Dialog back under "Solicitar Demo"
const target = `                  <a href="#contacto" className="w-full block text-center py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-lg hover:shadow-primary/25">
                    Solicitar Demo
                  </a>
                  <p className="text-xs text-muted-foreground mt-4">Sin permanencia. Cancela cuando quieras.</p>`;

const replacement = `                  <a href="#contacto" className="w-full block text-center py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-lg hover:shadow-primary/25">
                    Solicitar Demo
                  </a>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="mt-4 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition inline-flex items-center justify-center gap-1.5">
                        <Star className="w-3.5 h-3.5" />
                        Ver detalles del Software
                      </button>
                    </DialogTrigger>
                    {/* Dark modal style matching NFC addons */}
                    <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border border-border bg-card shadow-2xl rounded-3xl">
                      <DialogTitle className="sr-only">Detalles del Software de Reservas</DialogTitle>
                      <DialogDescription className="sr-only">Por qué somos distintos y qué incluye nuestra plataforma</DialogDescription>
                      <SaaSFeatures />
                    </DialogContent>
                  </Dialog>

                  <p className="text-xs text-muted-foreground mt-4">Sin permanencia. Cancela cuando quieras.</p>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/routes/index.tsx', content);
