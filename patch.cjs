const fs = require('fs');
let content = fs.readFileSync('src/routes/index.tsx', 'utf8');

const target = "{/* Catálogo de Add-ons */}";
const replacement = "<SaaSFeatures />\n\n        {/* Catálogo de Add-ons */}";

content = content.replace(target, replacement);

fs.writeFileSync('src/routes/index.tsx', content);
