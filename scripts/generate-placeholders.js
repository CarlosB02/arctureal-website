const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const illustrations = [
  {
    filename: 'casa-das-pedras.svg',
    title: 'CASA DAS PEDRAS',
    coord: '38°47\'54" N  9°23\'11" W',
    type: 'HABITAÇÃO UNIFAMILIAR',
    accent: '#C08440',
    draw: `
      <!-- Ground Horizon -->
      <line x1="0" y1="480" x2="1200" y2="480" stroke="#302D2A" stroke-width="1.5" stroke-opacity="0.2"/>
      <!-- Main cantilevered volume -->
      <rect x="240" y="240" width="620" height="190" fill="#E6E0D6" stroke="#302D2A" stroke-width="2"/>
      <rect x="290" y="280" width="220" height="150" fill="#302D2A" fill-opacity="0.85"/>
      <rect x="550" y="280" width="260" height="150" fill="#FFFFFF" fill-opacity="0.9"/>
      <!-- Cantilever overhang shadow -->
      <polygon points="240,430 860,430 840,460 260,460" fill="#302D2A" fill-opacity="0.08"/>
      <!-- Stone base retaining wall -->
      <rect x="180" y="430" width="780" height="90" fill="#DFD8CC" stroke="#302D2A" stroke-width="1.5"/>
      <line x1="380" y1="430" x2="380" y2="520" stroke="#302D2A" stroke-width="1" stroke-opacity="0.3"/>
      <line x1="580" y1="430" x2="580" y2="520" stroke="#302D2A" stroke-width="1" stroke-opacity="0.3"/>
      <line x1="780" y1="430" x2="780" y2="520" stroke="#302D2A" stroke-width="1" stroke-opacity="0.3"/>
      <!-- Architectural golden accent rod -->
      <line x1="290" y1="200" x2="290" y2="430" stroke="#C08440" stroke-width="2"/>
      <circle cx="290" cy="200" r="4" fill="#C08440"/>
    `
  },
  {
    filename: 'casa-das-pedras-interior.svg',
    title: 'CASA DAS PEDRAS — INTERIOR',
    coord: 'SINTRA — ATELIER ARCTUREAL',
    type: 'ENQUADRAMENTO ATLÂNTICO',
    accent: '#C08440',
    draw: `
      <rect x="160" y="160" width="880" height="480" fill="#EFECE5" stroke="#302D2A" stroke-width="1.5"/>
      <!-- Floor lines perspective -->
      <line x1="160" y1="640" x2="420" y2="440" stroke="#302D2A" stroke-width="1" stroke-opacity="0.25"/>
      <line x1="1040" y1="640" x2="780" y2="440" stroke="#302D2A" stroke-width="1" stroke-opacity="0.25"/>
      <!-- Minimalist opening to sea -->
      <rect x="420" y="240" width="360" height="200" fill="#FAF8F5" stroke="#302D2A" stroke-width="2"/>
      <line x1="420" y1="360" x2="780" y2="360" stroke="#C08440" stroke-width="1.5"/>
      <circle cx="680" cy="300" r="28" fill="#C08440" fill-opacity="0.25"/>
    `
  },
  {
    filename: 'casa-das-pedras-patio.svg',
    title: 'CASA DAS PEDRAS — PÁTIO',
    coord: 'OROGRAFIA E SOMBRA',
    type: 'PÁTIO BIOCLIMÁTICO',
    accent: '#C08440',
    draw: `
      <polygon points="300,560 900,560 800,260 400,260" fill="#E8E2D8" stroke="#302D2A" stroke-width="1.5"/>
      <rect x="480" y="320" width="240" height="200" fill="#FFFFFF" stroke="#302D2A" stroke-width="2"/>
      <line x1="600" y1="260" x2="600" y2="520" stroke="#C08440" stroke-width="2"/>
    `
  },
  {
    filename: 'marques-horizon.svg',
    title: 'MARQUÊS HORIZON',
    coord: '38°43\'16" N  9°08\'55" W',
    type: 'SEDE CORPORATIVA',
    accent: '#C08440',
    draw: `
      <!-- Tower vertical rhythm -->
      <rect x="360" y="140" width="480" height="460" fill="#ECE7DE" stroke="#302D2A" stroke-width="2"/>
      <!-- Vertical louvers -->
      ${Array.from({ length: 9 }).map((_, i) => `
        <line x1="${400 + i * 50}" y1="160" x2="${400 + i * 50}" y2="580" stroke="${i % 2 === 0 ? '#C08440' : '#302D2A'}" stroke-width="${i % 2 === 0 ? 3 : 1.5}" stroke-opacity="${i % 2 === 0 ? 0.9 : 0.4}"/>
      `).join('')}
      <!-- Ground plinth -->
      <rect x="300" y="600" width="600" height="30" fill="#302D2A"/>
    `
  },
  {
    filename: 'marques-horizon-facade.svg',
    title: 'MARQUÊS HORIZON — FACHADA',
    coord: 'AVENIDA DA LIBERDADE',
    type: 'ESTRUTURA CINÉTICA',
    accent: '#C08440',
    draw: `
      <rect x="200" y="180" width="800" height="420" fill="#E6DFD3" stroke="#302D2A" stroke-width="1.5"/>
      ${Array.from({ length: 14 }).map((_, i) => `
        <line x1="${240 + i * 55}" y1="180" x2="${240 + i * 55}" y2="600" stroke="#C08440" stroke-width="2.5" stroke-opacity="0.8"/>
      `).join('')}
    `
  },
  {
    filename: 'quinta-do-monte.svg',
    title: 'QUINTA DO MONTE',
    coord: '38°34\'12" N  7°54\'33" W',
    type: 'HOTELARIA E ENOTURISMO',
    accent: '#C08440',
    draw: `
      <!-- Rolling hill profile -->
      <path d="M100,520 Q400,450 700,510 T1100,480" fill="none" stroke="#302D2A" stroke-width="1.5"/>
      <!-- Rammed earth low pavilions -->
      <rect x="280" y="440" width="220" height="70" fill="#DFD2C0" stroke="#302D2A" stroke-width="2"/>
      <rect x="560" y="450" width="260" height="70" fill="#D6C6B2" stroke="#302D2A" stroke-width="2"/>
      <!-- Cork roof line -->
      <line x1="260" y1="440" x2="520" y2="440" stroke="#C08440" stroke-width="3"/>
      <line x1="540" y1="450" x2="840" y2="450" stroke="#C08440" stroke-width="3"/>
      <!-- Olive tree abstraction -->
      <circle cx="890" cy="460" r="22" fill="#302D2A" fill-opacity="0.12"/>
      <line x1="890" y1="482" x2="890" y2="520" stroke="#302D2A" stroke-width="2"/>
    `
  },
  {
    filename: 'quinta-do-monte-pavilhao.svg',
    title: 'QUINTA DO MONTE — PAVILHÃO',
    coord: 'ALENTEJO CENTRAL',
    type: 'TAIPA E CORTIÇA',
    accent: '#C08440',
    draw: `
      <rect x="240" y="280" width="720" height="220" fill="#DCCFB9" stroke="#302D2A" stroke-width="2"/>
      <rect x="340" y="320" width="200" height="180" fill="#FFFFFF" fill-opacity="0.9"/>
      <line x1="220" y1="280" x2="980" y2="280" stroke="#C08440" stroke-width="3.5"/>
    `
  },
  {
    filename: 'docas-alcantara.svg',
    title: 'DOCAS ALCÂNTARA HUB',
    coord: '38°42\'09" N  9°10\'48" W',
    type: 'REGENERAÇÃO URBANA',
    accent: '#C08440',
    draw: `
      <!-- Industrial sawtooth rooflines -->
      <polygon points="260,480 380,320 380,480" fill="#D9D2C7" stroke="#302D2A" stroke-width="2"/>
      <polygon points="380,480 500,320 500,480" fill="#ECE7DE" stroke="#302D2A" stroke-width="2"/>
      <polygon points="500,480 620,320 620,480" fill="#D9D2C7" stroke="#302D2A" stroke-width="2"/>
      <polygon points="620,480 740,320 740,480" fill="#ECE7DE" stroke="#302D2A" stroke-width="2"/>
      <polygon points="740,480 860,320 860,480" fill="#D9D2C7" stroke="#302D2A" stroke-width="2"/>
      <!-- River front ground line -->
      <line x1="120" y1="530" x2="1080" y2="530" stroke="#C08440" stroke-width="2"/>
      <line x1="120" y1="545" x2="1080" y2="545" stroke="#302D2A" stroke-width="1" stroke-opacity="0.3"/>
    `
  },
  {
    filename: 'monte-estoril.svg',
    title: 'RESIDÊNCIA MONTE ESTORIL',
    coord: '38°42\'21" N  9°23\'48" W',
    type: 'HABITAÇÃO E INTERIORES',
    accent: '#C08440',
    draw: `
      <rect x="280" y="220" width="640" height="320" fill="#F0ECE4" stroke="#302D2A" stroke-width="2"/>
      <rect x="360" y="270" width="220" height="220" fill="#FFFFFF"/>
      <rect x="620" y="270" width="220" height="220" fill="#E2DAD0"/>
      <line x1="280" y1="380" x2="920" y2="380" stroke="#C08440" stroke-width="1.5"/>
    `
  },
  {
    filename: 'pavilhao-da-luz.svg',
    title: 'PAVILHÃO DA LUZ',
    coord: '41°09\'01" N  8°37\'14" W',
    type: 'ESPAÇO EXPOSITIVO',
    accent: '#C08440',
    draw: `
      <polygon points="320,540 880,540 820,240 380,240" fill="#EDE9E1" stroke="#302D2A" stroke-width="2"/>
      <!-- Continuous skylight bar -->
      <polygon points="400,240 800,240 760,200 440,200" fill="#FFFFFF" stroke="#C08440" stroke-width="2"/>
      <line x1="600" y1="200" x2="600" y2="540" stroke="#C08440" stroke-width="1" stroke-dasharray="6 4"/>
    `
  },
  {
    filename: 'hero-architecture.svg',
    title: 'ARCTUREAL ARCHITECTURE',
    coord: 'GRUPO ARCTUREAL — LISBOA',
    type: 'ECOSSISTEMA DE ARQUITETURA',
    accent: '#C08440',
    draw: `
      <!-- Pure architectural geometry: intersecting planes -->
      <rect x="220" y="160" width="560" height="380" fill="#EAE5DC" stroke="#302D2A" stroke-width="2"/>
      <rect x="440" y="240" width="520" height="340" fill="#F5F2EB" stroke="#302D2A" stroke-width="2"/>
      <!-- Intersecting void -->
      <rect x="520" y="320" width="280" height="200" fill="#302D2A"/>
      <!-- Ochre hairline accents -->
      <line x1="160" y1="460" x2="1040" y2="460" stroke="#C08440" stroke-width="1.5"/>
      <line x1="440" y1="120" x2="440" y2="620" stroke="#C08440" stroke-width="1.5"/>
      <circle cx="440" cy="460" r="5" fill="#C08440"/>
    `
  }
];

illustrations.forEach(item => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF9F5"/>
      <stop offset="100%" stop-color="#F0ECE3"/>
    </linearGradient>
    <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#302D2A" stroke-width="0.35" stroke-opacity="0.12"/>
    </pattern>
  </defs>

  <!-- Background Canvas -->
  <rect width="1200" height="750" fill="url(#bgGrad)"/>
  <rect width="1200" height="750" fill="url(#archGrid)"/>

  <!-- Minimal Outer Frame -->
  <rect x="40" y="40" width="1120" height="670" fill="none" stroke="#302D2A" stroke-width="1" stroke-opacity="0.18"/>

  <!-- Corner registration ticks -->
  <line x1="30" y1="40" x2="50" y2="40" stroke="#C08440" stroke-width="1.5"/>
  <line x1="40" y1="30" x2="40" y2="50" stroke="#C08440" stroke-width="1.5"/>
  <line x1="1150" y1="40" x2="1170" y2="40" stroke="#C08440" stroke-width="1.5"/>
  <line x1="1160" y1="30" x2="1160" y2="50" stroke="#C08440" stroke-width="1.5"/>
  <line x1="30" y1="710" x2="50" y2="710" stroke="#C08440" stroke-width="1.5"/>
  <line x1="40" y1="700" x2="40" y2="720" stroke="#C08440" stroke-width="1.5"/>
  <line x1="1150" y1="710" x2="1170" y2="710" stroke="#C08440" stroke-width="1.5"/>
  <line x1="1160" y1="700" x2="1160" y2="720" stroke="#C08440" stroke-width="1.5"/>

  <!-- Architectural Composition -->
  ${item.draw}

  <!-- Header Annotations -->
  <text x="70" y="75" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" letter-spacing="3" fill="#302D2A">ARCTUREAL ARCHIVE / ${item.type}</text>
  <text x="1130" y="75" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" letter-spacing="2" fill="#6E6962">${item.coord}</text>

  <!-- Title Bottom Annotation -->
  <text x="70" y="680" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="4" fill="#302D2A">${item.title}</text>
  <text x="1130" y="680" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" letter-spacing="1.5" fill="#C08440">ESTUDO GEOMÉTRICO AUTORAL</text>
</svg>
`;

  fs.writeFileSync(path.join(targetDir, item.filename), content.trim());
});

console.log('Successfully generated ' + illustrations.length + ' architectural SVG placeholders.');
