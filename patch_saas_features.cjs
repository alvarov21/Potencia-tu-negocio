const fs = require('fs');
let content = fs.readFileSync('src/components/SaaSFeatures.tsx', 'utf8');

// Use DialogClose for the button
content = content.replace(/import { ArrowRight } from "lucide-react";/, `import { ArrowRight } from "lucide-react";\nimport { DialogClose } from "@/components/ui/dialog";`);

const targetBtn = `<a href="#contacto" onClick={onClose} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
          Solicitar Demo Ahora <ArrowRight className="w-4 h-4" />
        </a>`;

const replacementBtn = `<DialogClose asChild>
          <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
            Solicitar Demo Ahora <ArrowRight className="w-4 h-4" />
          </a>
        </DialogClose>`;

content = content.replace(targetBtn, replacementBtn);

fs.writeFileSync('src/components/SaaSFeatures.tsx', content);
