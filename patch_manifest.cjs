const fs = require('fs');
let content = fs.readFileSync('src/routes/__root.tsx', 'utf8');

const target = `{ rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },`;
const replacement = `{ rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/manifest.json" },`;

content = content.replace(target, replacement);

fs.writeFileSync('src/routes/__root.tsx', content);
