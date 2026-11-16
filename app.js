const SENSITIVITY_FIELDS = [
  { key: 'general', label: 'General' },
  { key: 'redDot', label: 'Red Dot' },
  { key: 'scope2x', label: '2x Scope' },
  { key: 'scope4x', label: '4x Scope' },
  { key: 'sniper', label: 'Sniper Scope' },
  { key: 'freeLook', label: 'Free Look' },
];

// Single source of truth for base sensitivity values (0–200 Free Fire scale)
const BASE_SENSITIVITY = {
  general: 162,
  redDot: 168,
  scope2x: 152,
  scope4x: 138,
  sniper: 104,
  freeLook: 145,
};

const DEVICE_MODELS = [
  'Alcatel 1B (2020)',
  'Alcatel OneTouch Idol X',
  'Apple iPhone 6s',
  'Apple iPhone 6s Plus',
  'Apple iPhone 7',
  'Apple iPhone 7 Plus',
  'Apple iPhone 8',
  'Apple iPhone 8 Plus',
  'Apple iPhone SE (1st Gen)',
  'Apple iPhone SE (2nd Gen)',
  'Apple iPhone X',
  'Apple iPhone XR',
  'Apple iPhone XS',
  'Apple iPhone XS Max',
  'Apple iPhone 11',
  'Apple iPhone 11 Pro',
  'Apple iPhone 11 Pro Max',
  'Apple iPhone 12',
  'Apple iPhone 12 Mini',
  'Apple iPhone 12 Pro',
  'Apple iPhone 12 Pro Max',
  'Apple iPhone 13',
  'Apple iPhone 13 Mini',
  'Apple iPhone 13 Pro',
  'Apple iPhone 13 Pro Max',
  'Apple iPhone 14',
  'Apple iPhone 14 Plus',
  'Apple iPhone 14 Pro',
  'Apple iPhone 14 Pro Max',
  'Apple iPhone 15',
  'Apple iPhone 15 Plus',
  'Apple iPhone 15 Pro',
  'Apple iPhone 15 Pro Max',
  'Apple iPhone 16',
  'Apple iPhone 16 Plus',
  'Apple iPhone 16 Pro',
  'Apple iPhone 16 Pro Max',
  'Apple iPhone 16e',
  'Apple iPhone 17',
  'Apple iPhone 17 Air',
  'Apple iPhone 17 Pro',
  'Apple iPhone 17 Pro Max',
  'Apple iPhone 18',
  'Apple iPhone 18 Pro',
  'Apple iPhone 18 Pro Max',
  'Asus ROG Phone',
  'Asus ROG Phone II',
  'Asus ROG Phone 3',
  'Asus ROG Phone 5',
  'Asus ROG Phone 6',
  'Asus ROG Phone 7',
  'Asus ROG Phone 8 Pro',
  'Asus ROG Phone 9 Pro',
  'Asus ZenFone 2',
  'Asus ZenFone 2 Laser',
  'Asus ZenFone 3',
  'Asus ZenFone 5Z',
  'Asus ZenFone 6',
  'Asus ZenFone 8',
  'Asus ZenFone 9',
  'Asus ZenFone 10',
  'Asus ZenFone 11 Ultra',
  'BlackBerry KeyOne',
  'BlackBerry Key2',
  'BlackBerry Passport',
  'BlackBerry Priv',
  'BlackBerry Z10',
  'BlackBerry Z30',
  'Black Shark 1',
  'Black Shark 2',
  'Black Shark 3',
  'Black Shark 4 Pro',
  'Black Shark 5 Pro',
  'CMF Phone 1',
  'CMF Phone 2 Pro',
  'Coolpad Note 3',
  'Coolpad Note 5',
  'Essential Phone (PH-1)',
  'Fairphone 2',
  'Fairphone 3',
  'Fairphone 4',
  'Fairphone 5',
  'Google Nexus 4',
  'Google Nexus 5',
  'Google Nexus 5X',
  'Google Nexus 6',
  'Google Nexus 6P',
  'Google Pixel',
  'Google Pixel XL',
  'Google Pixel 2',
  'Google Pixel 2 XL',
  'Google Pixel 3',
  'Google Pixel 3 XL',
  'Google Pixel 3a',
  'Google Pixel 4',
  'Google Pixel 4 XL',
  'Google Pixel 4a',
  'Google Pixel 5',
  'Google Pixel 5a',
  'Google Pixel 6',
  'Google Pixel 6 Pro',
  'Google Pixel 6a',
  'Google Pixel 7',
  'Google Pixel 7 Pro',
  'Google Pixel 7a',
  'Google Pixel 8',
  'Google Pixel 8 Pro',
  'Google Pixel 8a',
  'Google Pixel 9',
  'Google Pixel 9 Pro',
  'Google Pixel 9 Pro XL',
  'Google Pixel 9 Pro Fold',
  'Google Pixel 9a',
  'Google Pixel 10',
  'Google Pixel 10 Pro',
  'Google Pixel 10 Pro XL',
  'Google Pixel 10 Pro Fold',
  'Google Pixel 11',
  'Google Pixel 11 Pro',
  'Google Pixel 11 Pro XL',
  'HMD Key',
  'HMD Pulse',
  'HMD Skyline',
  'Honor 6',
  'Honor 7',
  'Honor 8',
  'Honor 9',
  'Honor 10',
  'Honor 20 Pro',
  'Honor 50',
  'Honor 70',
  'Honor 90',
  'Honor 200 Pro',
  'Honor Magic V2',
  'Honor Magic V3',
  'Honor Magic5 Pro',
  'Honor Magic6 Pro',
  'Honor Magic7 Pro',
  'Honor Magic8 Pro',
  'HTC Butterfly',
  'HTC Desire 816',
  'HTC One (M7)',
  'HTC One (M8)',
  'HTC One (M9)',
  'HTC 10',
  'HTC U11',
  'HTC U12+',
  'Huawei Ascend P6',
  'Huawei Ascend P7',
  'Huawei Mate 7',
  'Huawei Mate 8',
  'Huawei Mate 9',
  'Huawei Mate 10 Pro',
  'Huawei Mate 20 Pro',
  'Huawei Mate 30 Pro',
  'Huawei Mate 40 Pro',
  'Huawei Mate 50 Pro',
  'Huawei Mate 60 Pro',
  'Huawei Mate 70 Pro',
  'Huawei Mate XT Ultimate',
  'Huawei P8',
  'Huawei P9',
  'Huawei P10',
  'Huawei P20 Pro',
  'Huawei P30 Pro',
  'Huawei P40 Pro',
  'Huawei P50 Pro',
  'Huawei P60 Pro',
  'Huawei Pura 70 Ultra',
  'Huawei Pura 80 Ultra',
  'Infinix Hot 8',
  'Infinix Hot 9 Play',
  'Infinix Hot 10 Lite',
  'Infinix Hot 20',
  'Infinix Hot 30',
  'Infinix Hot 40 Pro',
  'Infinix Hot 50 Pro+',
  'Infinix Note 7',
  'Infinix Note 10 Pro',
  'Infinix Note 12 VIP',
  'Infinix Note 30 Pro',
  'Infinix Note 40 Pro+',
  'Infinix Smart 5',
  'Infinix Smart 7 HD',
  'Infinix Smart 8',
  'Infinix Zero 8',
  'Infinix Zero Ultra',
  'Infinix Zero 30 5G',
  'Infinix Zero 40 5G',
  'iQOO 3',
  'iQOO 5 Pro',
  'iQOO 7',
  'iQOO 9 Pro',
  'iQOO 11',
  'iQOO 12',
  'iQOO 13',
  'iQOO 15',
  'Itel A16 Plus',
  'Itel A24 Pro',
  'Itel A50C',
  'Itel A70',
  'Itel A100C',
  'Itel Aura 05i',
  'Itel P40',
  'Itel P55 5G',
  'Itel S16 Pro',
  'Itel S23+',
  'Itel S24',
  'Lava Agni 2',
  'Lava Agni 3',
  'Lava X2',
  'Lenovo K3 Note',
  'Lenovo K4 Note',
  'Lenovo Legion Phone Duel',
  'Lenovo Legion Y90',
  'Lenovo P2',
  'Lenovo Vibe K5',
  'Lenovo ZUK Z1',
  'Lenovo ZUK Z2 Pro',
  'LeEco Le Max 2',
  'LG G2',
  'LG G3',
  'LG G4',
  'LG G5',
  'LG G6',
  'LG G7 ThinQ',
  'LG G8 ThinQ',
  'LG Optimus G',
  'LG Optimus LTE2',
  'LG V10',
  'LG V20',
  'LG V30',
  'LG V40 ThinQ',
  'LG V50 ThinQ',
  'LG V60 ThinQ',
  'LG Velvet',
  'LG Wing',
  'Meizu MX3',
  'Meizu MX4',
  'Meizu Pro 5',
  'Meizu 16th',
  'Meizu 18',
  'Meizu 20 Pro',
  'Meizu 21 Pro',
  'Microsoft Lumia 950',
  'Microsoft Lumia 950 XL',
  'Motorola Droid Turbo',
  'Motorola Edge+ (2020)',
  'Motorola Edge 30 Ultra',
  'Motorola Edge 40 Pro',
  'Motorola Edge 50 Ultra',
  'Motorola Edge 60 Pro',
  'Motorola Moto E (2nd Gen)',
  'Motorola Moto E15',
  'Motorola Moto G (3rd Gen)',
  'Motorola Moto G4 Plus',
  'Motorola Moto G5 Plus',
  'Motorola Moto G7 Power',
  'Motorola Moto G Play (2023)',
  'Motorola Moto G Power 5G (2024)',
  'Motorola Moto X (1st Gen)',
  'Motorola Moto X (2nd Gen)',
  'Motorola Moto X Pure Edition',
  'Motorola Moto Z',
  'Motorola Moto Z Play',
  'Motorola Razr (2019)',
  'Motorola Razr+ (2023)',
  'Motorola Razr+ (2024)',
  'Motorola Razr Ultra (2025)',
  'Nokia 2.2',
  'Nokia 2.3',
  'Nokia 2.4',
  'Nokia 3.1',
  'Nokia 5.3',
  'Nokia 6',
  'Nokia 7 Plus',
  'Nokia 8',
  'Nokia 8.3 5G',
  'Nokia 9 PureView',
  'Nokia C12 Pro',
  'Nokia C22',
  'Nokia G21',
  'Nokia G42 5G',
  'Nokia Lumia 930',
  'Nokia Lumia 1520',
  'Nokia X30 5G',
  'Nothing Phone (1)',
  'Nothing Phone (2)',
  'Nothing Phone (2a)',
  'Nothing Phone (2a) Plus',
  'Nothing Phone (3)',
  'Nubia RedMagic 3',
  'Nubia RedMagic 5G',
  'Nubia RedMagic 6 Pro',
  'Nubia RedMagic 7 Pro',
  'Nubia RedMagic 8 Pro',
  'Nubia RedMagic 9 Pro',
  'Nubia RedMagic 10 Pro',
  'Nubia Z50S Pro',
  'Nubia Z60 Ultra',
  'Nubia Z70 Ultra',
  'OnePlus One',
  'OnePlus 2',
  'OnePlus X',
  'OnePlus 3',
  'OnePlus 3T',
  'OnePlus 5',
  'OnePlus 5T',
  'OnePlus 6',
  'OnePlus 6T',
  'OnePlus 7',
  'OnePlus 7 Pro',
  'OnePlus 7T',
  'OnePlus 7T Pro',
  'OnePlus 8',
  'OnePlus 8 Pro',
  'OnePlus 8T',
  'OnePlus 9',
  'OnePlus 9 Pro',
  'OnePlus 9R',
  'OnePlus 10 Pro',
  'OnePlus 10T',
  'OnePlus 11',
  'OnePlus 11R',
  'OnePlus 12',
  'OnePlus 12R',
  'OnePlus 13',
  'OnePlus 13R',
  'OnePlus 15',
  'OnePlus Nord',
  'OnePlus Nord N100',
  'OnePlus Nord CE 2',
  'OnePlus Nord 3',
  'OnePlus Nord 4',
  'OnePlus Open',
  'Oppo A1k',
  'Oppo A3s',
  'Oppo A5 (2020)',
  'Oppo A15',
  'Oppo A57',
  'Oppo A78',
  'Oppo F1s',
  'Oppo F9 Pro',
  'Oppo F11 Pro',
  'Oppo Find 5',
  'Oppo Find 7',
  'Oppo Find X',
  'Oppo Find X2 Pro',
  'Oppo Find X3 Pro',
  'Oppo Find X5 Pro',
  'Oppo Find X6 Pro',
  'Oppo Find X7 Ultra',
  'Oppo Find X8 Pro',
  'Oppo Find X9 Pro',
  'Oppo Find N2 Flip',
  'Oppo Find N3',
  'Oppo Reno 10x Zoom',
  'Oppo Reno 6 Pro',
  'Oppo Reno 8 Pro',
  'Oppo Reno 10 Pro+',
  'Oppo Reno 11 Pro',
  'Oppo Reno 12 Pro',
  'Oppo Reno 13 Pro',
  'Poco F1',
  'Poco X2',
  'Poco F2 Pro',
  'Poco X3 NFC',
  'Poco X3 Pro',
  'Poco M3',
  'Poco F3',
  'Poco X4 Pro 5G',
  'Poco F4 GT',
  'Poco C5',
  'Poco C55',
  'Poco X5 Pro',
  'Poco F5 Pro',
  'Poco X6 Pro',
  'Poco F6 Pro',
  'Poco X7 Pro',
  'Poco F7 Ultra',
  'Poco F8 Pro',
  'Realme 1',
  'Realme 2 Pro',
  'Realme 3 Pro',
  'Realme 5 Pro',
  'Realme X2 Pro',
  'Realme 6 Pro',
  'Realme 7 Pro',
  'Realme C11',
  'Realme C21',
  'Realme 8 Pro',
  'Realme GT Neo 2',
  'Realme 9 Pro+',
  'Realme GT 2 Pro',
  'Realme 10 Pro+',
  'Realme GT 3',
  'Realme 11 Pro+',
  'Realme GT 5 Pro',
  'Realme 12 Pro+',
  'Realme GT 6',
  'Realme 13 Pro+',
  'Realme GT 7 Pro',
  'Realme 14 Pro+',
  'Redmi 1S (2GB edition)',
  'Redmi 2 Prime',
  'Redmi Note 3',
  'Redmi Note 4',
  'Redmi Note 5 Pro',
  'Redmi Note 7 Pro',
  'Redmi 8A',
  'Redmi Note 8 Pro',
  'Redmi 9A',
  'Redmi 9A Sport',
  'Redmi Note 9 Pro',
  'Redmi Note 10 Pro',
  'Redmi Note 11',
  'Redmi Note 12',
  'Redmi Note 12 Pro+',
  'Redmi A2',
  'Redmi A3',
  'Redmi Note 13 Pro+',
  'Redmi Note 14 Pro+',
  'Redmi Note 15 Pro+',
  'Samsung Galaxy A01',
  'Samsung Galaxy A02s',
  'Samsung Galaxy A03 Core',
  'Samsung Galaxy A04e',
  'Samsung Galaxy A05',
  'Samsung Galaxy A06',
  'Samsung Galaxy A10',
  'Samsung Galaxy A10s',
  'Samsung Galaxy A11',
  'Samsung Galaxy A12',
  'Samsung Galaxy A13',
  'Samsung Galaxy A14',
  'Samsung Galaxy A15',
  'Samsung Galaxy A16',
  'Samsung Galaxy A24',
  'Samsung Galaxy A25',
  'Samsung Galaxy A34',
  'Samsung Galaxy A35',
  'Samsung Galaxy A50',
  'Samsung Galaxy A51',
  'Samsung Galaxy A52s',
  'Samsung Galaxy A53',
  'Samsung Galaxy A54',
  'Samsung Galaxy A55',
  'Samsung Galaxy A56',
  'Samsung Galaxy J5 (2016)',
  'Samsung Galaxy J7 Prime',
  'Samsung Galaxy M11',
  'Samsung Galaxy M21',
  'Samsung Galaxy M31',
  'Samsung Galaxy M51',
  'Samsung Galaxy Note II',
  'Samsung Galaxy Note 3',
  'Samsung Galaxy Note 4',
  'Samsung Galaxy Note 5',
  'Samsung Galaxy Note 7',
  'Samsung Galaxy Note 8',
  'Samsung Galaxy Note 9',
  'Samsung Galaxy Note 10',
  'Samsung Galaxy Note 10+',
  'Samsung Galaxy Note 20',
  'Samsung Galaxy Note 20 Ultra',
  'Samsung Galaxy S III LTE (2GB)',
  'Samsung Galaxy S4',
  'Samsung Galaxy S5',
  'Samsung Galaxy S6',
  'Samsung Galaxy S6 Edge',
  'Samsung Galaxy S7',
  'Samsung Galaxy S7 Edge',
  'Samsung Galaxy S8',
  'Samsung Galaxy S8+',
  'Samsung Galaxy S9',
  'Samsung Galaxy S9+',
  'Samsung Galaxy S10e',
  'Samsung Galaxy S10',
  'Samsung Galaxy S10+',
  'Samsung Galaxy S20',
  'Samsung Galaxy S20+',
  'Samsung Galaxy S20 Ultra',
  'Samsung Galaxy S20 FE',
  'Samsung Galaxy S21',
  'Samsung Galaxy S21+',
  'Samsung Galaxy S21 Ultra',
  'Samsung Galaxy S21 FE',
  'Samsung Galaxy S22',
  'Samsung Galaxy S22+',
  'Samsung Galaxy S22 Ultra',
  'Samsung Galaxy S23',
  'Samsung Galaxy S23+',
  'Samsung Galaxy S23 Ultra',
  'Samsung Galaxy S23 FE',
  'Samsung Galaxy S24',
  'Samsung Galaxy S24+',
  'Samsung Galaxy S24 Ultra',
  'Samsung Galaxy S24 FE',
  'Samsung Galaxy S25',
  'Samsung Galaxy S25+',
  'Samsung Galaxy S25 Ultra',
  'Samsung Galaxy S25 Edge',
  'Samsung Galaxy S26',
  'Samsung Galaxy S26+',
  'Samsung Galaxy S26 Ultra',
  'Samsung Galaxy Z Flip',
  'Samsung Galaxy Z Flip 3',
  'Samsung Galaxy Z Flip 4',
  'Samsung Galaxy Z Flip 5',
  'Samsung Galaxy Z Flip 6',
  'Samsung Galaxy Z Flip 7',
  'Samsung Galaxy Z Fold',
  'Samsung Galaxy Z Fold 2',
  'Samsung Galaxy Z Fold 3',
  'Samsung Galaxy Z Fold 4',
  'Samsung Galaxy Z Fold 5',
  'Samsung Galaxy Z Fold 6',
  'Samsung Galaxy Z Fold 7',
  'Sony Xperia Z',
  'Sony Xperia Z1',
  'Sony Xperia Z2',
  'Sony Xperia Z3',
  'Sony Xperia Z5 Premium',
  'Sony Xperia XZ',
  'Sony Xperia XZ Premium',
  'Sony Xperia XZ2',
  'Sony Xperia 1',
  'Sony Xperia 1 II',
  'Sony Xperia 1 III',
  'Sony Xperia 1 IV',
  'Sony Xperia 1 V',
  'Sony Xperia 1 VI',
  'Sony Xperia 1 VII',
  'Sony Xperia 5 V',
  'Sony Xperia 10 VI',
  'Tecno Camon 12',
  'Tecno Camon 15',
  'Tecno Camon 16 Premier',
  'Tecno Camon 17 Pro',
  'Tecno Camon 18 Premier',
  'Tecno Camon 19 Pro',
  'Tecno Camon 20 Premier',
  'Tecno Camon 30 Premier',
  'Tecno Camon 40 Premier',
  'Tecno Phantom 9',
  'Tecno Phantom X',
  'Tecno Phantom X2 Pro',
  'Tecno Phantom V Fold',
  'Tecno Phantom V Fold 2',
  'Tecno Phantom V Flip 2',
  'Tecno Pop 4',
  'Tecno Pop 5',
  'Tecno Pop 7',
  'Tecno Pop 8',
  'Tecno Pop 9',
  'Tecno Pova 2',
  'Tecno Pova 4 Pro',
  'Tecno Pova 5 Pro',
  'Tecno Pova 6 Pro',
  'Tecno Spark 4',
  'Tecno Spark 5',
  'Tecno Spark Go 2021',
  'Tecno Spark 8C',
  'Tecno Spark 10 Pro',
  'Tecno Spark 20 Pro+',
  'Tecno Spark 30 Pro',
  'Vivo V5',
  'Vivo V9',
  'Vivo V15 Pro',
  'Vivo V17 Pro',
  'Vivo V20 Pro',
  'Vivo V23 Pro',
  'Vivo V27 Pro',
  'Vivo V29 Pro',
  'Vivo V30 Pro',
  'Vivo V40 Pro',
  'Vivo V50 Pro',
  'Vivo Xplay 3S',
  'Vivo X50 Pro',
  'Vivo X60 Pro+',
  'Vivo X70 Pro+',
  'Vivo X80 Pro',
  'Vivo X90 Pro+',
  'Vivo X100 Pro',
  'Vivo X100 Ultra',
  'Vivo X200 Pro',
  'Vivo X300 Pro',
  'Vivo X Fold 3 Pro',
  'Vivo Y11',
  'Vivo Y12',
  'Vivo Y15',
  'Vivo Y20',
  'Vivo Y28',
  'Xiaomi Mi 2',
  'Xiaomi Mi 3',
  'Xiaomi Mi 4',
  'Xiaomi Mi 5',
  'Xiaomi Mi 6',
  'Xiaomi Mi 8',
  'Xiaomi Mi 9',
  'Xiaomi Mi 10 Ultra',
  'Xiaomi Mi 11 Ultra',
  'Xiaomi Mi Mix',
  'Xiaomi Mi Mix 2S',
  'Xiaomi Mi Mix 3',
  'Xiaomi Mix Fold 3',
  'Xiaomi Mix Fold 4',
  'Xiaomi Mix Flip',
  'Xiaomi 12 Pro',
  'Xiaomi 12S Ultra',
  'Xiaomi 13 Pro',
  'Xiaomi 13 Ultra',
  'Xiaomi 14',
  'Xiaomi 14 Pro',
  'Xiaomi 14 Ultra',
  'Xiaomi 15',
  'Xiaomi 15 Pro',
  'Xiaomi 15 Ultra',
  'Xiaomi 17',
  'Xiaomi 17 Pro',
  'Xiaomi 17 Pro Max',
  'ZTE Axon 7',
  'ZTE Axon 20 5G',
  'ZTE Axon 30 Ultra',
  'ZTE Axon 40 Ultra',
  'ZTE Axon 50 Ultra',
  'ZTE Axon 60 Ultra',
  'ZTE Blade A31',
  'ZTE Blade A51',
  'ZTE Nubia Z5',
];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

// Single formula function driven by BASE_SENSITIVITY, shoot button size, DPI, and user modifiers
function calculateFormulaSensitivity({ playStyle, grip, shootButton, dpi, offset }) {
  const styleDelta = {
    rusher: { general: 12, redDot: 10, scope2x: 4, scope4x: 0, sniper: -8, freeLook: 8 },
    balanced: { general: 0, redDot: 0, scope2x: 0, scope4x: 0, sniper: 0, freeLook: 0 },
    sniper: { general: -8, redDot: -4, scope2x: 4, scope4x: 10, sniper: 16, freeLook: -4 },
  }[playStyle] || { general: 0, redDot: 0, scope2x: 0, scope4x: 0, sniper: 0, freeLook: 0 };

  const gripDelta = grip === '3+_fingers' ? 4 : 0;

  // Smaller shoot button (<48%) increases drag travel; larger (>48%) reduces it
  const btnSize = clamp(Number(shootButton) || 48, 10, 100);
  const shootDelta = Math.round((48 - btnSize) * 0.25);

  // Higher DPI increases pointer speed, so sensitivity scales slightly down to compensate
  const dpiVal = clamp(Number(dpi) || 411, 240, 1440);
  const dpiDelta = Math.round((411 - dpiVal) / 35);

  const fineTune = clamp(Number(offset) || 0, -10, 10) * 2;

  const output = {};
  for (const { key } of SENSITIVITY_FIELDS) {
    const raw =
      BASE_SENSITIVITY[key] +
      (styleDelta[key] || 0) +
      gripDelta +
      shootDelta +
      dpiDelta +
      fineTune;
    output[key] = clamp(raw, 0, 200);
  }
  return output;
}

const els = {
  playStyle: document.getElementById('play-style'),
  grip: document.getElementById('grip'),
  shootButton: document.getElementById('shoot-button'),
  dpi: document.getElementById('dpi'),
  offsetSlider: document.getElementById('offset-slider'),
  offsetValue: document.getElementById('offset-value'),
  deviceModel: document.getElementById('device-model'),
  deviceSuggestions: document.getElementById('device-suggestions'),
  screenSize: document.getElementById('screen-size'),
  ram: document.getElementById('ram'),
  fps: document.getElementById('fps'),
  problem: document.getElementById('problem'),
  copyBtn: document.getElementById('copy-btn'),
  aiBtn: document.getElementById('ai-btn'),
  statusMessage: document.getElementById('status-message'),
  heroGeneral: document.getElementById('hero-general-value'),
  formulaBars: document.getElementById('formula-bars'),
  aiPlaceholder: document.getElementById('ai-placeholder'),
  aiBars: document.getElementById('ai-bars'),
  aiTip: document.getElementById('ai-tip'),
};

let latestFormula = null;
let latestAi = null;

function setStatus(message, type = 'info') {
  els.statusMessage.textContent = message;
  els.statusMessage.className = `status-message ${type}`;
}

function renderBars(container, values, variantClass) {
  container.innerHTML = SENSITIVITY_FIELDS.map(({ key, label }) => {
    const val = clamp(Number(values[key]) || 0, 0, 200);
    const pct = (val / 200) * 100;
    return `
      <div class="bar-row">
        <div class="bar-meta">
          <span>${label}</span>
          <span class="bar-num">${val}</span>
        </div>
        <div class="bar-track" role="progressbar" aria-label="${label}" aria-valuenow="${val}" aria-valuemin="0" aria-valuemax="200">
          <div class="bar-fill ${variantClass}" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

function updateFormulaUI() {
  const offset = Number(els.offsetSlider.value) || 0;
  els.offsetValue.textContent = offset > 0 ? `+${offset}` : `${offset}`;

  latestFormula = calculateFormulaSensitivity({
    playStyle: els.playStyle.value,
    grip: els.grip.value,
    shootButton: els.shootButton.value,
    dpi: els.dpi.value,
    offset,
  });

  els.heroGeneral.textContent = String(latestFormula.general);
  renderBars(els.formulaBars, latestFormula, 'bar-fill-formula');
}

function renderAiResult(data) {
  latestAi = data;
  els.aiPlaceholder.hidden = true;
  els.aiBars.hidden = false;
  els.aiTip.hidden = false;
  renderBars(els.aiBars, data, 'bar-fill-ai');
  els.aiTip.textContent = data.tip;
}

// Device model searchable dropdown
function renderDeviceSuggestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    els.deviceSuggestions.hidden = true;
    els.deviceSuggestions.innerHTML = '';
    return;
  }

  const matches = DEVICE_MODELS.filter((model) => model.toLowerCase().includes(q)).slice(0, 8);
  if (matches.length === 0) {
    els.deviceSuggestions.hidden = true;
    els.deviceSuggestions.innerHTML = '';
    return;
  }

  els.deviceSuggestions.innerHTML = matches
    .map(
      (model) =>
        `<li><button type="button" class="suggestion-item" role="option" data-model="${model.replace(/"/g, '&quot;')}">${model}</button></li>`
    )
    .join('');
  els.deviceSuggestions.hidden = false;
}

els.deviceModel.addEventListener('input', (e) => {
  renderDeviceSuggestions(e.target.value);
});

els.deviceModel.addEventListener('focus', (e) => {
  renderDeviceSuggestions(e.target.value);
});

els.deviceSuggestions.addEventListener('click', (e) => {
  const item = e.target.closest('.suggestion-item');
  if (!item) return;
  els.deviceModel.value = item.dataset.model || '';
  els.deviceSuggestions.hidden = true;
  els.deviceModel.focus();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-field')) {
    els.deviceSuggestions.hidden = true;
  }
});

// Core input listeners
[els.playStyle, els.grip, els.shootButton, els.dpi, els.offsetSlider].forEach((input) => {
  input.addEventListener('input', updateFormulaUI);
  input.addEventListener('change', updateFormulaUI);
});

// Copy settings to clipboard
els.copyBtn.addEventListener('click', async () => {
  const source = latestAi || latestFormula;
  const label = latestAi ? 'AI Coach' : 'Formula';
  const lines = [
    `FF SENSLAB Starting Sensitivity (${label} • 0–200 Scale • Not Official):`,
    `- Shoot Button: ${els.shootButton.value || 48}% | DPI: ${els.dpi.value || 411}`,
    ...SENSITIVITY_FIELDS.map(({ key, label: name }) => `- ${name}: ${source[key]}`),
  ];
  const text = lines.join('\n');

  try {
    await navigator.clipboard.writeText(text);
    setStatus(`Copied ${label.toLowerCase()} sensitivity settings to clipboard.`, 'success');
  } catch {
    setStatus('Clipboard access blocked. Copy manually from the bars below.', 'error');
  }
});

// Calculate with AI
els.aiBtn.addEventListener('click', async () => {
  const originalText = els.aiBtn.textContent;
  els.aiBtn.disabled = true;
  els.aiBtn.textContent = 'Calculating...';
  setStatus('Requesting tailored 0–200 starting values from AI coach...', 'info');

  const payload = {
    playStyle: els.playStyle.value,
    grip: els.grip.value,
    shootButton: Number(els.shootButton.value) || 48,
    dpi: Number(els.dpi.value) || 411,
    offset: Number(els.offsetSlider.value) || 0,
    deviceModel: els.deviceModel.value.trim(),
    screenSize: els.screenSize.value.trim(),
    ram: els.ram.value.trim(),
    fps: els.fps.value.trim(),
    problem: els.problem.value,
  };

  try {
    const response = await fetch('/api/calc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);
    if (!response.ok || !data) {
      throw new Error((data && data.error) || 'AI calculation failed.');
    }

    const sanitized = {};
    for (const { key } of SENSITIVITY_FIELDS) {
      if (typeof data[key] !== 'number' || !Number.isFinite(data[key])) {
        throw new Error('Malformed sensitivity value received.');
      }
      sanitized[key] = clamp(data[key], 0, 200);
    }
    if (typeof data.tip !== 'string' || !data.tip.trim()) {
      throw new Error('Malformed tip received.');
    }
    sanitized.tip = data.tip.trim();

    renderAiResult(sanitized);
    setStatus('AI starting sensitivity updated alongside your formula values.', 'success');
  } catch (err) {
    setStatus(
      `${err.message || 'AI call failed.'} Your formula values remain active.`,
      'error'
    );
  } finally {
    els.aiBtn.disabled = false;
    els.aiBtn.textContent = originalText;
  }
});

// Initial render
updateFormulaUI();