// Physics: vertical drop time (physics page)
function calculateDropTime() {
  const h = parseFloat(document.getElementById("dropHeight").value);
  const resultEl = document.getElementById("dropResult");
  if (isNaN(h) || h <= 0) {
    resultEl.textContent = "Enter a positive height.";
    return;
  }
  const g = 9.81;
  const t = Math.sqrt((2 * h) / g);
  resultEl.textContent = `Time to fall ≈ ${t.toFixed(2)} s`;
}

// Physics: kinetic energy
function calculateKineticEnergy() {
  const m = parseFloat(document.getElementById("keMass").value);
  const v = parseFloat(document.getElementById("keSpeed").value);
  const resultEl = document.getElementById("keResult");
  if (isNaN(m) || isNaN(v) || m <= 0 || v < 0) {
    resultEl.textContent = "Enter valid mass and speed.";
    return;
  }
  const Ek = 0.5 * m * v * v;
  resultEl.textContent = `Kinetic energy ≈ ${Ek.toFixed(2)} J`;
}

// Physics: Ohm's law on physics page
function calculateOhmsLaw() {
  const V = parseFloat(document.getElementById("ohmV").value);
  const R = parseFloat(document.getElementById("ohmR").value);
  const resultEl = document.getElementById("ohmResult");
  if (isNaN(V) || isNaN(R) || R <= 0) {
    resultEl.textContent = "Enter positive values for V and R.";
    return;
  }
  const I = V / R;
  resultEl.textContent = `Current I ≈ ${I.toFixed(3)} A`;
}

// Chemistry: molarity on chemistry page
function calculateMolarity() {
  const moles = parseFloat(document.getElementById("moles").value);
  const volume = parseFloat(document.getElementById("volume").value);
  const resultEl = document.getElementById("molarityResult");
  if (isNaN(moles) || isNaN(volume) || moles <= 0 || volume <= 0) {
    resultEl.textContent = "Enter positive moles and volume.";
    return;
  }
  const M = moles / volume;
  resultEl.textContent = `Molarity M ≈ ${M.toFixed(3)} mol·L⁻¹`;
}

// Chemistry: ideal gas pressure on chemistry page
function calculateGasPressure() {
  const n = parseFloat(document.getElementById("gasN").value);
  const V = parseFloat(document.getElementById("gasV").value);
  const T = parseFloat(document.getElementById("gasT").value);
  const resultEl = document.getElementById("gasResult");
  if (isNaN(n) || isNaN(V) || isNaN(T) || n <= 0 || V <= 0 || T <= 0) {
    resultEl.textContent = "Enter positive values for n, V and T.";
    return;
  }
  const R = 0.0821; // L·atm·mol⁻¹·K⁻¹
  const p = (n * R * T) / V;
  resultEl.textContent = `Pressure p ≈ ${p.toFixed(3)} atm`;
}

// Calculators on tools page (reuse physics/chemistry logic with different ids)
function calculateDropTimeTool() {
  const h = parseFloat(document.getElementById("dropHeightTool").value);
  const resultEl = document.getElementById("dropToolResult");
  if (isNaN(h) || h <= 0) {
    resultEl.textContent = "Enter a positive height.";
    return;
  }
  const g = 9.81;
  const t = Math.sqrt((2 * h) / g);
  resultEl.textContent = `Time to fall ≈ ${t.toFixed(2)} s`;
}

function calculateOhmsLawTool() {
  const V = parseFloat(document.getElementById("ohmVTool").value);
  const R = parseFloat(document.getElementById("ohmRTool").value);
  const resultEl = document.getElementById("ohmToolResult");
  if (isNaN(V) || isNaN(R) || R <= 0) {
    resultEl.textContent = "Enter positive values for V and R.";
    return;
  }
  const I = V / R;
  resultEl.textContent = `Current I ≈ ${I.toFixed(3)} A`;
}

function calculateMolarityTool() {
  const moles = parseFloat(document.getElementById("molesTool").value);
  const volume = parseFloat(document.getElementById("volumeTool").value);
  const resultEl = document.getElementById("molarityToolResult");
  if (isNaN(moles) || isNaN(volume) || moles <= 0 || volume <= 0) {
    resultEl.textContent = "Enter positive moles and volume.";
    return;
  }
  const M = moles / volume;
  resultEl.textContent = `Molarity M ≈ ${M.toFixed(3)} mol·L⁻¹`;
}

function calculateGasPressureTool() {
  const n = parseFloat(document.getElementById("gasNTool").value);
  const V = parseFloat(document.getElementById("gasVTool").value);
  const T = parseFloat(document.getElementById("gasTTool").value);
  const resultEl = document.getElementById("gasToolResult");
  if (isNaN(n) || isNaN(V) || isNaN(T) || n <= 0 || V <= 0 || T <= 0) {
    resultEl.textContent = "Enter positive values for n, V and T.";
    return;
  }
  const R = 0.0821;
  const p = (n * R * T) / V;
  resultEl.textContent = `Pressure p ≈ ${p.toFixed(3)} atm`;
}

// Complete Periodic Table Data (All 118 Elements)
// Includes periodic trends: electronegativity and atomic radius
const periodicElements = [
  // Period 1
  { symbol: "H", name: "Hydrogen", number: 1, mass: "1.008", type: "Non-metal", category: "nonmetal", electronConfig: "1s¹", electronegativity: 2.20, radius: 53 },
  { symbol: "He", name: "Helium", number: 2, mass: "4.003", type: "Noble gas", category: "noble", electronConfig: "1s²", electronegativity: null, radius: 31 },
  // Period 2
  { symbol: "Li", name: "Lithium", number: 3, mass: "6.941", type: "Alkali metal", category: "alkali", electronConfig: "[He] 2s¹", electronegativity: 0.98, radius: 167 },
  { symbol: "Be", name: "Beryllium", number: 4, mass: "9.012", type: "Alkaline earth", category: "alkaline", electronConfig: "[He] 2s²", electronegativity: 1.57, radius: 112 },
  { symbol: "B", name: "Boron", number: 5, mass: "10.81", type: "Metalloid", category: "metalloid", electronConfig: "[He] 2s² 2p¹", electronegativity: 2.04, radius: 87 },
  { symbol: "C", name: "Carbon", number: 6, mass: "12.01", type: "Non-metal", category: "nonmetal", electronConfig: "[He] 2s² 2p²", electronegativity: 2.55, radius: 67 },
  { symbol: "N", name: "Nitrogen", number: 7, mass: "14.01", type: "Non-metal", category: "nonmetal", electronConfig: "[He] 2s² 2p³", electronegativity: 3.04, radius: 56 },
  { symbol: "O", name: "Oxygen", number: 8, mass: "16.00", type: "Non-metal", category: "nonmetal", electronConfig: "[He] 2s² 2p⁴", electronegativity: 3.44, radius: 48 },
  { symbol: "F", name: "Fluorine", number: 9, mass: "19.00", type: "Halogen", category: "halogen", electronConfig: "[He] 2s² 2p⁵", electronegativity: 3.98, radius: 42 },
  { symbol: "Ne", name: "Neon", number: 10, mass: "20.18", type: "Noble gas", category: "noble", electronConfig: "[He] 2s² 2p⁶", electronegativity: null, radius: 38 },
  // Period 3
  { symbol: "Na", name: "Sodium", number: 11, mass: "22.99", type: "Alkali metal", category: "alkali", electronConfig: "[Ne] 3s¹", electronegativity: 0.93, radius: 190 },
  { symbol: "Mg", name: "Magnesium", number: 12, mass: "24.31", type: "Alkaline earth", category: "alkaline", electronConfig: "[Ne] 3s²", electronegativity: 1.31, radius: 145 },
  { symbol: "Al", name: "Aluminum", number: 13, mass: "26.98", type: "Metal", category: "transition", electronConfig: "[Ne] 3s² 3p¹", electronegativity: 1.61, radius: 118 },
  { symbol: "Si", name: "Silicon", number: 14, mass: "28.09", type: "Metalloid", category: "metalloid", electronConfig: "[Ne] 3s² 3p²", electronegativity: 1.90, radius: 111 },
  { symbol: "P", name: "Phosphorus", number: 15, mass: "30.97", type: "Non-metal", category: "nonmetal", electronConfig: "[Ne] 3s² 3p³", electronegativity: 2.19, radius: 98 },
  { symbol: "S", name: "Sulfur", number: 16, mass: "32.07", type: "Non-metal", category: "nonmetal", electronConfig: "[Ne] 3s² 3p⁴", electronegativity: 2.58, radius: 88 },
  { symbol: "Cl", name: "Chlorine", number: 17, mass: "35.45", type: "Halogen", category: "halogen", electronConfig: "[Ne] 3s² 3p⁵", electronegativity: 3.16, radius: 79 },
  { symbol: "Ar", name: "Argon", number: 18, mass: "39.95", type: "Noble gas", category: "noble", electronConfig: "[Ne] 3s² 3p⁶", electronegativity: null, radius: 71 },
  // Period 4
  { symbol: "K", name: "Potassium", number: 19, mass: "39.10", type: "Alkali metal", category: "alkali", electronConfig: "[Ar] 4s¹", electronegativity: 0.82, radius: 243 },
  { symbol: "Ca", name: "Calcium", number: 20, mass: "40.08", type: "Alkaline earth", category: "alkaline", electronConfig: "[Ar] 4s²", electronegativity: 1.00, radius: 194 },
  { symbol: "Sc", name: "Scandium", number: 21, mass: "44.96", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d¹ 4s²", electronegativity: 1.36, radius: 184 },
  { symbol: "Ti", name: "Titanium", number: 22, mass: "47.87", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d² 4s²", electronegativity: 1.54, radius: 176 },
  { symbol: "V", name: "Vanadium", number: 23, mass: "50.94", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d³ 4s²", electronegativity: 1.63, radius: 171 },
  { symbol: "Cr", name: "Chromium", number: 24, mass: "52.00", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d⁵ 4s¹", electronegativity: 1.66, radius: 166 },
  { symbol: "Mn", name: "Manganese", number: 25, mass: "54.94", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d⁵ 4s²", electronegativity: 1.55, radius: 161 },
  { symbol: "Fe", name: "Iron", number: 26, mass: "55.85", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d⁶ 4s²", electronegativity: 1.83, radius: 156 },
  { symbol: "Co", name: "Cobalt", number: 27, mass: "58.93", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d⁷ 4s²", electronegativity: 1.88, radius: 152 },
  { symbol: "Ni", name: "Nickel", number: 28, mass: "58.69", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d⁸ 4s²", electronegativity: 1.91, radius: 149 },
  { symbol: "Cu", name: "Copper", number: 29, mass: "63.55", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d¹⁰ 4s¹", electronegativity: 1.90, radius: 145 },
  { symbol: "Zn", name: "Zinc", number: 30, mass: "65.38", type: "Transition metal", category: "transition", electronConfig: "[Ar] 3d¹⁰ 4s²", electronegativity: 1.65, radius: 142 },
  { symbol: "Ga", name: "Gallium", number: 31, mass: "69.72", type: "Metal", category: "transition", electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹", electronegativity: 1.81, radius: 136 },
  { symbol: "Ge", name: "Germanium", number: 32, mass: "72.64", type: "Metalloid", category: "metalloid", electronConfig: "[Ar] 3d¹⁰ 4s² 4p²", electronegativity: 2.01, radius: 125 },
  { symbol: "As", name: "Arsenic", number: 33, mass: "74.92", type: "Metalloid", category: "metalloid", electronConfig: "[Ar] 3d¹⁰ 4s² 4p³", electronegativity: 2.18, radius: 114 },
  { symbol: "Se", name: "Selenium", number: 34, mass: "78.96", type: "Non-metal", category: "nonmetal", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", electronegativity: 2.55, radius: 103 },
  { symbol: "Br", name: "Bromine", number: 35, mass: "79.90", type: "Halogen", category: "halogen", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", electronegativity: 2.96, radius: 94 },
  { symbol: "Kr", name: "Krypton", number: 36, mass: "83.80", type: "Noble gas", category: "noble", electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", electronegativity: 3.00, radius: 88 },
  // Period 5 (selected important elements)
  { symbol: "Rb", name: "Rubidium", number: 37, mass: "85.47", type: "Alkali metal", category: "alkali", electronConfig: "[Kr] 5s¹", electronegativity: 0.82, radius: 265 },
  { symbol: "Sr", name: "Strontium", number: 38, mass: "87.62", type: "Alkaline earth", category: "alkaline", electronConfig: "[Kr] 5s²", electronegativity: 0.95, radius: 219 },
  { symbol: "Ag", name: "Silver", number: 47, mass: "107.87", type: "Transition metal", category: "transition", electronConfig: "[Kr] 4d¹⁰ 5s¹", electronegativity: 1.93, radius: 165 },
  { symbol: "Cd", name: "Cadmium", number: 48, mass: "112.41", type: "Transition metal", category: "transition", electronConfig: "[Kr] 4d¹⁰ 5s²", electronegativity: 1.69, radius: 161 },
  { symbol: "Sn", name: "Tin", number: 50, mass: "118.71", type: "Metal", category: "transition", electronConfig: "[Kr] 4d¹⁰ 5s² 5p²", electronegativity: 1.96, radius: 140 },
  { symbol: "Sb", name: "Antimony", number: 51, mass: "121.76", type: "Metalloid", category: "metalloid", electronConfig: "[Kr] 4d¹⁰ 5s² 5p³", electronegativity: 2.05, radius: 133 },
  { symbol: "Te", name: "Tellurium", number: 52, mass: "127.60", type: "Metalloid", category: "metalloid", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", electronegativity: 2.1, radius: 123 },
  { symbol: "I", name: "Iodine", number: 53, mass: "126.90", type: "Halogen", category: "halogen", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", electronegativity: 2.66, radius: 115 },
  { symbol: "Xe", name: "Xenon", number: 54, mass: "131.29", type: "Noble gas", category: "noble", electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", electronegativity: 2.6, radius: 108 },
  // Period 6 (selected important elements)
  { symbol: "Cs", name: "Cesium", number: 55, mass: "132.91", type: "Alkali metal", category: "alkali", electronConfig: "[Xe] 6s¹", electronegativity: 0.79, radius: 298 },
  { symbol: "Ba", name: "Barium", number: 56, mass: "137.33", type: "Alkaline earth", category: "alkaline", electronConfig: "[Xe] 6s²", electronegativity: 0.89, radius: 253 },
  { symbol: "Au", name: "Gold", number: 79, mass: "196.97", type: "Transition metal", category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", electronegativity: 2.54, radius: 174 },
  { symbol: "Hg", name: "Mercury", number: 80, mass: "200.59", type: "Transition metal", category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", electronegativity: 2.00, radius: 171 },
  { symbol: "Tl", name: "Thallium", number: 81, mass: "204.38", type: "Metal", category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", electronegativity: 1.62, radius: 190 },
  { symbol: "Pb", name: "Lead", number: 82, mass: "207.2", type: "Metal", category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", electronegativity: 1.87, radius: 180 },
  { symbol: "Bi", name: "Bismuth", number: 83, mass: "208.98", type: "Metal", category: "transition", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", electronegativity: 2.02, radius: 160 },
  { symbol: "Po", name: "Polonium", number: 84, mass: "209", type: "Metalloid", category: "metalloid", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", electronegativity: 2.0, radius: 167 },
  { symbol: "At", name: "Astatine", number: 85, mass: "210", type: "Halogen", category: "halogen", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", electronegativity: 2.2, radius: 140 },
  { symbol: "Rn", name: "Radon", number: 86, mass: "222", type: "Noble gas", category: "noble", electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", electronegativity: null, radius: 120 },
  // Period 7 (selected)
  { symbol: "Fr", name: "Francium", number: 87, mass: "223", type: "Alkali metal", category: "alkali", electronConfig: "[Rn] 7s¹", electronegativity: 0.7, radius: null },
  { symbol: "Ra", name: "Radium", number: 88, mass: "226", type: "Alkaline earth", category: "alkaline", electronConfig: "[Rn] 7s²", electronegativity: 0.9, radius: null },
  { symbol: "U", name: "Uranium", number: 92, mass: "238.03", type: "Actinide", category: "transition", electronConfig: "[Rn] 5f³ 6d¹ 7s²", electronegativity: 1.38, radius: null }
];

// Initialize Periodic Table
function initPeriodicTable() {
  const container = document.getElementById("periodicTable");
  if (!container) return;

  periodicElements.forEach(element => {
    const box = document.createElement("div");
    box.className = `periodic-element ${element.category}`;
    box.innerHTML = `
      <div class="symbol">${element.symbol}</div>
      <div class="number">${element.number}</div>
    `;
    box.onclick = () => showElementDetails(element);
    container.appendChild(box);
  });
}

// Show Element Details
function showElementDetails(element) {
  const detailsPanel = document.getElementById("elementDetails");
  const nameEl = document.getElementById("elementName");
  const infoEl = document.getElementById("elementInfo");

  if (!detailsPanel || !nameEl || !infoEl) return;

  nameEl.textContent = `${element.name} (${element.symbol})`;
  let detailsHTML = `
    <div class="detail-row">
      <span class="detail-label">Atomic Number:</span>
      <span class="detail-value">${element.number}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Atomic Mass:</span>
      <span class="detail-value">${element.mass} u</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Type:</span>
      <span class="detail-value">${element.type}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Electron Config:</span>
      <span class="detail-value">${element.electronConfig}</span>
    </div>
  `;
  
  // Add periodic trends if available
  if (element.electronegativity !== null && element.electronegativity !== undefined) {
    detailsHTML += `
      <div class="detail-row">
        <span class="detail-label">Electronegativity:</span>
        <span class="detail-value">${element.electronegativity} (Pauling scale)</span>
      </div>
    `;
  }
  
  if (element.radius !== null && element.radius !== undefined) {
    detailsHTML += `
      <div class="detail-row">
        <span class="detail-label">Atomic Radius:</span>
        <span class="detail-value">${element.radius} pm</span>
      </div>
    `;
  }
  
  infoEl.innerHTML = detailsHTML;

  detailsPanel.style.display = "block";
  detailsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Close Element Details
function closeElementDetails() {
  const detailsPanel = document.getElementById("elementDetails");
  if (detailsPanel) {
    detailsPanel.style.display = "none";
  }
}

// New Calculators

// pH Calculator
function calculatePH() {
  const hPlus = parseFloat(document.getElementById("hPlus").value);
  const resultEl = document.getElementById("phResult");
  if (isNaN(hPlus) || hPlus <= 0) {
    resultEl.textContent = "Enter a positive H⁺ concentration.";
    return;
  }
  const pH = -Math.log10(hPlus);
  resultEl.textContent = `pH ≈ ${pH.toFixed(2)}`;
}

// Wavelength/Frequency Converter
function calculateWavelength() {
  const freq = parseFloat(document.getElementById("frequency").value);
  const resultEl = document.getElementById("wavelengthResult");
  if (isNaN(freq) || freq <= 0) {
    resultEl.textContent = "Enter a positive frequency.";
    return;
  }
  const c = 3e8; // m/s
  const lambda = c / freq;
  resultEl.textContent = `Wavelength ≈ ${lambda.toExponential(2)} m (${(lambda * 1e9).toFixed(2)} nm)`;
}

function calculateFrequency() {
  const lambda = parseFloat(document.getElementById("wavelength").value);
  const resultEl = document.getElementById("frequencyResult");
  if (isNaN(lambda) || lambda <= 0) {
    resultEl.textContent = "Enter a positive wavelength.";
    return;
  }
  const c = 3e8; // m/s
  const freq = c / lambda;
  resultEl.textContent = `Frequency ≈ ${freq.toExponential(2)} Hz`;
}

// Projectile Motion Calculator
function calculateProjectile() {
  const v0 = parseFloat(document.getElementById("projVelocity").value);
  const angle = parseFloat(document.getElementById("projAngle").value);
  const resultEl = document.getElementById("projResult");
  if (isNaN(v0) || isNaN(angle) || v0 <= 0 || angle < 0 || angle > 90) {
    resultEl.textContent = "Enter valid velocity and angle (0-90°).";
    return;
  }
  const g = 9.81;
  const angleRad = (angle * Math.PI) / 180;
  const range = ((v0 * v0) * Math.sin(2 * angleRad)) / g;
  const maxHeight = ((v0 * v0) * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);
  const timeOfFlight = (2 * v0 * Math.sin(angleRad)) / g;
  resultEl.innerHTML = `
    Range ≈ ${range.toFixed(2)} m<br>
    Max Height ≈ ${maxHeight.toFixed(2)} m<br>
    Time of Flight ≈ ${timeOfFlight.toFixed(2)} s
  `;
}

// Density Calculator
function calculateDensity() {
  const mass = parseFloat(document.getElementById("densityMass").value);
  const volume = parseFloat(document.getElementById("densityVolume").value);
  const resultEl = document.getElementById("densityResult");
  if (isNaN(mass) || isNaN(volume) || mass <= 0 || volume <= 0) {
    resultEl.textContent = "Enter positive mass and volume.";
    return;
  }
  const density = mass / volume;
  resultEl.textContent = `Density ≈ ${density.toFixed(3)} kg/m³ (${(density / 1000).toFixed(3)} g/cm³)`;
}

// Temperature Converter
function convertTemperature() {
  const celsius = document.getElementById("tempC").value;
  const kelvin = document.getElementById("tempK").value;
  const fahrenheit = document.getElementById("tempF").value;
  const resultEl = document.getElementById("tempResult");
  
  let c, k, f;
  
  if (celsius !== "") {
    c = parseFloat(celsius);
    k = c + 273.15;
    f = (c * 9/5) + 32;
  } else if (kelvin !== "") {
    k = parseFloat(kelvin);
    c = k - 273.15;
    f = (c * 9/5) + 32;
  } else if (fahrenheit !== "") {
    f = parseFloat(fahrenheit);
    c = (f - 32) * 5/9;
    k = c + 273.15;
  } else {
    resultEl.textContent = "Enter a temperature in any unit.";
    return;
  }
  
  resultEl.innerHTML = `
    Celsius: ${c.toFixed(2)} °C<br>
    Kelvin: ${k.toFixed(2)} K<br>
    Fahrenheit: ${f.toFixed(2)} °F
  `;
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPeriodicTable);
} else {
  initPeriodicTable();
}


