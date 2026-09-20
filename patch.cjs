const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

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
                        Ver 10 razones para elegirnos
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-none bg-transparent shadow-none">
                      <DialogTitle className="sr-only">10 Razones por las que esto no es una agenda más</DialogTitle>
                      <DialogDescription className="sr-only">Razones detalladas de por qué elegir nuestro plan SaaS.</DialogDescription>
                      <SaaSFeatures />
                    </DialogContent>
                  </Dialog>

                  <p className="text-xs text-muted-foreground mt-4">Sin permanencia. Cancela cuando quieras.</p>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/routes/index.tsx', content);
