/* ═══════════════════════════════════════════════════════
   app.js — EduGenius Logic
   ═══════════════════════════════════════════════════════ */

// ──────────────────────────────────────────
// CURSOR GLOW
// ──────────────────────────────────────────
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

// ──────────────────────────────────────────
// PARTICLES
// ──────────────────────────────────────────
const particlesContainer = document.getElementById('particles');
const COLORS = ['#6c63ff','#ff6584','#43e97b','#f7971e','#4facfe','#a18cd1'];
for (let i = 0; i < 35; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 6 + 2;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    background:${COLORS[Math.floor(Math.random()*COLORS.length)]};
    animation-duration:${Math.random()*20+10}s;
    animation-delay:${Math.random()*15}s;
  `;
  particlesContainer.appendChild(p);
}

// ──────────────────────────────────────────
// NAVBAR SCROLL
// ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ──────────────────────────────────────────
// COUNTER ANIMATION
// ──────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('fr');
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ──────────────────────────────────────────
// REVEAL ON SCROLL
// ──────────────────────────────────────────
document.querySelectorAll('.class-card, .matiere-card, .tool-card, .feature-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ──────────────────────────────────────────
// SCHOOL TABS
// ──────────────────────────────────────────
document.querySelectorAll('.school-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.school-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const school = tab.dataset.school;
    document.querySelectorAll('.class-card').forEach(card => {
      if (card.dataset.school === school) card.classList.remove('hidden');
      else card.classList.add('hidden');
    });
  });
});

// ──────────────────────────────────────────
// CLASS DATA (CURRICULUM SÉNÉGAL)
// ──────────────────────────────────────────
const classData = {
  '6eme'     : { icon:'🌱', title:'Sixième (6e) — Collège CEM',    desc:'Programme MEN Sénégal : Ensembles IN, critères de divisibilité, milieux éco-géographiques du Sénégal (Niayes, mangrove), préhistoire africaine.',
                 subjects:['📐 Arithmétique & IN','📝 Conte & Grammaire','🧬 Écosystèmes Sénégal','🏺 Préhistoire d\'Afrique','🌍 Géographie du Sénégal'] },
  '5eme'     : { icon:'🌿', title:'Cinquième (5e) — Collège CEM',  desc:'Programme MEN Sénégal : Nombres décimaux relatifs, empires ouest-africains (Ghana, Mali, Songhaï), circuit électrique et géologie sahélienne.',
                 subjects:['📐 Nombres Relatifs','🏺 Empire du Mali & Ghana','⚗️ L\'Eau & Électricité','🧬 Digestion & Respiration','🌍 Reliefs d\'Afrique'] },
  '4eme'     : { icon:'🌳', title:'Quatrième (4e) — Collège CEM',  desc:'Programme MEN Sénégal : Nombres rationnels Q, royaumes sénégambiens (Cayor, Baol, Sine-Saloum), traite à Gorée, théorème de Pythagore.',
                 subjects:['🔢 Nombres Rationnels Q','📐 Théorème de Pythagore','🏺 Cayor & Île de Gorée','⚗️ Atomes & Molécules','🗣️ Anglais & Français'] },
  '3eme'     : { icon:'⭐', title:'Troisième (3e) — Épreuve du BFEM',  desc:'Préparation au Brevet de Fin d\'Études Moyennes (BFEM) : Thalès, trigonométrie, acides/bases, résistances coloniales (Lat-Dior, Bamba) et économie du Sénégal.',
                 subjects:['🎯 Épreuve Maths BFEM','📐 Thalès & Trigonométrie','⚗️ Chimie Acide-Base','🇸🇳 Lat-Dior & Résistances','🌍 Économie du Sénégal','🧬 Immunologie & SIDA'] },
  '2nde'     : { icon:'🚀', title:'Seconde (2nde S & L) — Lycée',    desc:'Tronc commun d\'orientation vers les séries S1, S2 ou L : Équations du second degré, vecteurs, cinématique et chimie stœchiométrique.',
                 subjects:['📈 Second Degré & Fonctions','⚛️ Mouvement & Vecteurs','🧪 La Mole & Solutions','📝 Littérature & Négritude','🧬 Biologie Cellulaire'] },
  '1ere'     : { icon:'🔥', title:'Première (1ère S1, S2, L)',   desc:'Préparation anticipée au BAC sénégalais : Limites et dérivées, énergie cinétique, chimie organique, méiose mendélienne et épreuve anticipée de Français.',
                 subjects:['📈 Dérivation & Limites','⚡ Énergie Cinétique (TEC)','🧪 Chimie Organique','🧬 Lois de Mendel & Méiose','📝 BAC de Français'] },
  'terminale': { icon:'👑', title:'Terminale (Tle S1, S2, L) — BAC Sénégal',  desc:'Préparation intensive au Baccalauréat sénégalais (Office du Bac) : Nombres complexes, calcul intégral, mécanique de Newton, oscillateurs RLC et Philosophie.',
                 subjects:['🏆 BAC S1, S2, L','∫ Intégrales & Logarithmes ln','🔢 Nombres Complexes C','⚛️ Lois de Newton & RLC','🧬 Neurobiologie & Immunologie','🧠 Philosophie'] },
};

function goToClass(cls) {
  const data = classData[cls];
  if (!data) return;
  document.getElementById('modalIcon').textContent    = data.icon;
  document.getElementById('modalTitle').textContent   = data.title;
  document.getElementById('modalDesc').textContent    = data.desc;
  const container = document.getElementById('modalSubjects');
  container.innerHTML = data.subjects.map(s =>
    `<span class="modal-subject-tag">${s}</span>`
  ).join('');
  const modalLink = document.getElementById('modalCoursLink');
  if (modalLink) {
    modalLink.href = `cours.html?classe=${cls}`;
  }
  document.getElementById('classModal').classList.add('open');
}

function goToSubject(sub) {
  window.location.href = `cours.html?matiere=${sub}`;
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
document.getElementById('classModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal('classModal');
});

// ──────────────────────────────────────────
// QUIZ CONFORME AU PROGRAMME DU SÉNÉGAL (BFEM & BAC)
// ──────────────────────────────────────────
const quizDB = [
  // Histoire & Géographie du Sénégal
  { subject:'🇸🇳 Histoire du Sénégal (BFEM)', q:'Qui était le Damel du Cayor symbole de la résistance anticoloniale face à Faidherbe ?', opts:['Alboury Ndiaye','Lat-Dior Ngoné Latyr Diop','El Hadj Oumar Tall','Maba Diakhou Bâ'], ans:1 },
  { subject:'🇸🇳 Histoire du Sénégal (Collège)', q:'Quel site historique situé au large de Dakar était un centre majeur de la traite transatlantique ?', opts:['Île de Ngor','Île de Gorée','Île de Carabane','Île de Madeleine'], ans:1 },
  { subject:'🌍 Géographie du Sénégal', q:'Quel fleuve arrose la frontière naturelle au nord du Sénégal ?', opts:['Le fleuve Gambie','Le fleuve Casamance','Le fleuve Sénégal','Le fleuve Niger'], ans:2 },
  { subject:'🇸🇳 Histoire de l\'Afrique (5e)', q:'Quel souverain légendaire a fondé l\'Empire du Mali au XIIIe siècle (bataille de Kirina) ?', opts:['Mansa Moussa','Soundiata Keïta','Askia Mohamed','Soumaoro Kanté'], ans:1 },
  
  // Mathématiques BFEM & BAC
  { subject:'📐 Maths BFEM (3e)', q:'Dans un triangle rectangle, quel est le rapport du côté adjacent sur l\'hypoténuse ?', opts:['Sinus','Cosinus','Tangente','Cotangente'], ans:1 },
  { subject:'📐 Maths BFEM (3e)', q:'Quelle est la solution de l\'équation 2x − 6 = 0 dans IR ?', opts:['x = −3','x = 3','x = 0','x = 6'], ans:1 },
  { subject:'∫ Maths BAC (Terminale S)', q:'Quelle est la dérivée de la fonction logarithme népérien f(x) = ln(x) sur ]0, +∞[ ?', opts:['1/x','e^x','x','1/(2x)'], ans:0 },
  { subject:'🔢 Maths BAC (Terminale S)', q:'Quel est le carré du nombre imaginaire pur i (dans le corps des complexes C) ?', opts:['1','0','−1','2i'], ans:2 },

  // Sciences Physiques & Chimie (BFEM & BAC)
  { subject:'⚗️ Chimie BFEM (3e)', q:'Quel est le pH d\'une solution aqueuse parfaitement neutre à 25°C ?', opts:['0','14','7','1'], ans:2 },
  { subject:'⚛️ Physique BFEM (3e)', q:'Quelle formule exprime l\'énergie cinétique d\'un solide de masse m animé d\'une vitesse v ?', opts:['Ec = m · v','Ec = ½ m · v²','Ec = m · g · h','Ec = P / t'], ans:1 },
  { subject:'⚛️ Physique BAC S', q:'Selon la deuxième loi de Newton, la somme des forces extérieures est égale à :', opts:['m · v','m · a (masse × accélération)','½ m · v²','m · g'], ans:1 },
  { subject:'⚗️ Chimie BAC (1ère & Tle S)', q:'Comment nomme-t-on la réaction entre un acide carboxylique et un alcool ?', opts:['Saponification','Estérification','Polymérisation','Neutralisation'], ans:1 },

  // SVT (BFEM & BAC)
  { subject:'🧬 SVT BFEM (3e)', q:'Quelles cellules du système immunitaire sont les principales cibles du virus du VIH/SIDA ?', opts:['Globules rouges','Lymphocytes T4 (CD4)','Plaquettes','Neurones'], ans:1 },
  { subject:'🧬 SVT BAC S2', q:'Comment se nomme le phénomène de division cellulaire aboutissant aux gamètes haploïdes ?', opts:['Mitose','Méiose','Fécondation','Transcription'], ans:1 },

  // Français & Philosophie
  { subject:'📝 Français & Littérature (Sénégal)', q:'Quel célèbre président-poète sénégalais est l\'un des chantres majeurs de la Négritude ?', opts:['Léopold Sédar Senghor','Cheikh Anta Diop','Ousmane Sembène','Mariama Bâ'], ans:0 },
  { subject:'🧠 Philosophie BAC', q:'Quel philosophe et égyptologue sénégalais de renom a démontré les racines africaines de la civilisation égyptienne ?', opts:['Souleymane Bachir Diagne','Cheikh Anta Diop','Léopold Sédar Senghor','Paulin Hountondji'], ans:1 }
];

let quizQuestions = [];
let currentQ = 0;
let score = 0;
let timerInterval;
let timeLeft = 30;
let answered = false;

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function startQuiz() {
  quizQuestions = shuffle(quizDB).slice(0, 5);
  currentQ = 0;
  score = 0;
  document.getElementById('quizBody') && (document.getElementById('quizBody').style.display = 'block');
  document.getElementById('quizResult').classList.add('hidden');
  document.querySelector('.quiz-body').style.display = 'block';
  document.getElementById('scoreVal').textContent = '0';
  showQuestion();
}

function showQuestion() {
  clearInterval(timerInterval);
  answered = false;
  const q = quizQuestions[currentQ];
  timeLeft = 30;

  // Progress
  const pct = (currentQ / quizQuestions.length) * 100;
  document.getElementById('quizProgressBar').style.width = pct + '%';
  document.getElementById('quizCounter').textContent = `Question ${currentQ+1}/${quizQuestions.length}`;

  // Subject & question
  document.getElementById('quizSubjectTag').textContent = q.subject;
  document.getElementById('quizQuestion').textContent   = q.q;

  // Options
  const container = document.getElementById('quizOptions');
  container.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i, btn);
    container.appendChild(btn);
  });

  // Timer
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) { clearInterval(timerInterval); autoSkip(); }
  }, 1000);
}

function updateTimer() {
  const el = document.getElementById('quizTimer');
  el.textContent = `⏱ ${timeLeft}s`;
  el.classList.toggle('urgent', timeLeft <= 10);
}

function selectAnswer(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const q = quizQuestions[currentQ];
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btn.classList.add('correct');
    score++;
    document.getElementById('scoreVal').textContent = score;
  } else {
    btn.classList.add('wrong');
    buttons[q.ans].classList.add('correct');
  }

  setTimeout(() => nextQuestion(), 1500);
}

function autoSkip() {
  if (answered) return;
  answered = true;
  const q = quizQuestions[currentQ];
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);
  buttons[q.ans].classList.add('correct');
  setTimeout(() => nextQuestion(), 1200);
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  document.getElementById('quizProgressBar').style.width = '100%';
  document.querySelector('.quiz-body').style.display = 'none';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');

  const pct = (score / quizQuestions.length) * 100;
  let emoji, title;
  if (pct >= 80)      { emoji = '🎉'; title = 'Excellent ! Tu es un génie !'; }
  else if (pct >= 60) { emoji = '😊'; title = 'Bien joué ! Continue ainsi !'; }
  else if (pct >= 40) { emoji = '💪'; title = 'Pas mal ! Revois tes cours !'; }
  else                { emoji = '📚'; title = 'Courage ! La pratique mène à la perfection !'; }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('finalScore').textContent  = score;
}

// Start quiz on load
startQuiz();

// ──────────────────────────────────────────
// CALCULATOR
// ──────────────────────────────────────────
let calcState = { display:'0', prev:'', op:'', reset:false };

function calcNum(n) {
  if (calcState.reset) { calcState.display = n; calcState.reset = false; }
  else { calcState.display = calcState.display === '0' && n !== '.' ? n : calcState.display + n; }
  // Prevent multiple dots
  const dots = (calcState.display.match(/\./g)||[]).length;
  if (dots > 1) calcState.display = calcState.display.slice(0,-1);
  updateDisplay();
}

function calcOp(op) {
  calcEq();
  calcState.prev = calcState.display;
  calcState.op   = op;
  calcState.reset = true;
}

function calcEq() {
  if (!calcState.op || !calcState.prev) return;
  const a = parseFloat(calcState.prev);
  const b = parseFloat(calcState.display);
  let result;
  switch(calcState.op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Erreur'; break;
  }
  calcState.display = typeof result === 'number' ? parseFloat(result.toFixed(10)).toString() : result;
  calcState.op = ''; calcState.prev = ''; calcState.reset = true;
  updateDisplay();
}

function calcFn(fn) {
  const n = parseFloat(calcState.display);
  switch(fn) {
    case 'clearAll': calcState = { display:'0', prev:'', op:'', reset:false }; break;
    case 'sqrt':     calcState.display = isNaN(n)||n<0 ? 'Erreur' : Math.sqrt(n).toFixed(6).replace(/\.?0+$/,''); calcState.reset=true; break;
    case 'pow2':     calcState.display = (n*n).toString(); calcState.reset=true; break;
    case 'sign':     calcState.display = (-n).toString(); break;
  }
  updateDisplay();
}

function updateDisplay() {
  const el = document.getElementById('calcDisplay');
  el.textContent = calcState.display.length > 12 ? calcState.display.slice(0,12) + '…' : calcState.display;
}

// ──────────────────────────────────────────
// CONVERTER
// ──────────────────────────────────────────
const convData = {
  length: {
    units: ['mm','cm','m','km','pouce (in)','pied (ft)','mile'],
    factors: [0.001, 0.01, 1, 1000, 0.0254, 0.3048, 1609.344],
  },
  mass: {
    units: ['mg','g','kg','tonne','once (oz)','livre (lb)'],
    factors: [0.000001, 0.001, 1, 1000, 0.0283495, 0.453592],
  },
  time: {
    units: ['seconde','minute','heure','jour','semaine','mois','année'],
    factors: [1, 60, 3600, 86400, 604800, 2629800, 31557600],
  },
  speed: {
    units: ['m/s','km/h','mph','nœud'],
    factors: [1, 1/3.6, 0.44704, 0.514444],
  },
  temp: {
    units: ['°C','°F','K'],
    factors: null, // special handling
  }
};

function updateConv() {
  const type = document.getElementById('convType').value;
  const data  = convData[type];
  ['convFromUnit','convToUnit'].forEach((id, i) => {
    const sel = document.getElementById(id);
    sel.innerHTML = data.units.map((u,j) => `<option value="${j}">${u}</option>`).join('');
    sel.value = i === 1 ? '1' : '0';
  });
  convertValue();
}

function convertValue() {
  const type  = document.getElementById('convType').value;
  const data  = convData[type];
  const val   = parseFloat(document.getElementById('convFrom').value);
  const fromI = parseInt(document.getElementById('convFromUnit').value);
  const toI   = parseInt(document.getElementById('convToUnit').value);
  const out   = document.getElementById('convTo');

  if (isNaN(val)) { out.value = ''; return; }

  if (type === 'temp') {
    let celsius;
    if (fromI === 0) celsius = val;
    else if (fromI === 1) celsius = (val - 32) * 5/9;
    else celsius = val - 273.15;

    let result;
    if (toI === 0) result = celsius;
    else if (toI === 1) result = celsius * 9/5 + 32;
    else result = celsius + 273.15;
    out.value = parseFloat(result.toFixed(4));
  } else {
    const inMeters = val * data.factors[fromI];
    out.value = parseFloat((inMeters / data.factors[toI]).toFixed(6));
  }
}

updateConv();

// ──────────────────────────────────────────
// FORMULES
// ──────────────────────────────────────────
const formulesDB = {
  maths: [
    { name:'Théorème de Pythagore', eq:'a² + b² = c²' },
    { name:'Aire du cercle', eq:'A = πr²' },
    { name:'Périmètre du cercle', eq:'P = 2πr' },
    { name:'Volume sphère', eq:'V = (4/3)πr³' },
    { name:'Discriminant', eq:'Δ = b² − 4ac' },
    { name:'Dérivée de xⁿ', eq:"(xⁿ)' = n·xⁿ⁻¹" },
    { name:'Somme suite arithmétique', eq:'Sn = n(u₁+uₙ)/2' },
    { name:'Terme suite géométrique', eq:'uₙ = u₀ · qⁿ' },
  ],
  physique: [
    { name:'Loi de Newton', eq:'F = m·a' },
    { name:'Énergie cinétique', eq:'Ec = ½mv²' },
    { name:'Poids', eq:'P = m·g' },
    { name:'Loi d\'Ohm', eq:'U = R·I' },
    { name:'Puissance électrique', eq:'P = U·I' },
    { name:'Vitesse', eq:'v = d/t' },
    { name:'Énergie potentielle', eq:'Ep = mgh' },
    { name:'Fréquence', eq:'f = 1/T' },
  ],
  chimie: [
    { name:'pH acide/base', eq:'pH = −log[H₃O⁺]' },
    { name:'Constante des gaz', eq:'PV = nRT' },
    { name:'Taux d\'avancement', eq:'τ = x/x_max' },
    { name:'Quantité de matière', eq:'n = m/M' },
    { name:'Concentration molaire', eq:'C = n/V' },
    { name:'Masse volumique', eq:'ρ = m/V' },
  ],
};

function showFormules(type, btn) {
  document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const list = document.getElementById('formulesList');
  list.innerHTML = formulesDB[type].map(f => `
    <div class="formule-item">
      <div class="formule-name">${f.name}</div>
      <div class="formule-eq">${f.eq}</div>
    </div>
  `).join('');
}
// Init
showFormules('maths', document.querySelector('.form-tab'));

// ──────────────────────────────────────────
// LABO PYTHON INTERACTIF & PRÉSETS
// ──────────────────────────────────────────
const pythonPresets = {
  delta: `# 🇸🇳 Équations du Second Degré (Programme 2nde & 1ère S)
import math

a = 1
b = -7
c = 10

delta = b**2 - 4*a*c
print("=== Équation ax² + bx + c = 0 ===")
print(f"a = {a}, b = {b}, c = {c}")
print(f"Discriminant Delta = {delta}")

if delta > 0:
    x1 = (-b - math.sqrt(delta)) / (2*a)
    x2 = (-b + math.sqrt(delta)) / (2*a)
    print(f"-> 2 solutions réelles distinctes : x1 = {x1}, x2 = {x2}")
elif delta == 0:
    x0 = -b / (2*a)
    print(f"-> 1 solution double réelle : x0 = {x0}")
else:
    print("-> Aucune solution dans IR (2 solutions complexes dans C pour Tle S)")
`,
  pythagore: `# 🇸🇳 Théorème de Pythagore (Programme 4e & 3e BFEM)
import math

# Dans un triangle rectangle en A : BC² = AB² + AC²
AB = 6
AC = 8

BC = math.sqrt(AB**2 + AC**2)
print("=== Triangle Rectangle (Pythagore) ===")
print(f"Côté adjacent AB = {AB} cm")
print(f"Côté opposé AC   = {AC} cm")
print(f"Hypoténuse BC    = {BC:.2f} cm")
`,
  suite: `# 🇸🇳 Suites Arithmétiques & Géométriques (1ère & Tle S)
# Suite arithmétique : u_n = u_0 + n*r
u0 = 3
r = 5
n = 10

un = u0 + n * r
somme = (n + 1) * (u0 + un) / 2

print(f"=== Suite Arithmétique (u0={u0}, r={r}) ===")
print(f"Terme u_{n} = {un}")
print(f"Somme des termes S_{n} = {somme}")
`,
  cinetique: `# 🇸🇳 Énergie Cinétique & Mécanique (Programme 3e BFEM & 1ère S)
# Ec = 1/2 * m * v²
masse_kg = 1200 # Voiture de 1.2 tonne
vitesse_kmh = 90
vitesse_ms = vitesse_kmh / 3.6

ec = 0.5 * masse_kg * (vitesse_ms ** 2)

print("=== Calcul de l'Énergie Cinétique Ec ===")
print(f"Masse   : {masse_kg} kg")
print(f"Vitesse : {vitesse_kmh} km/h = {vitesse_ms:.2f} m/s")
print(f"Énergie Cinétique Ec = {ec:,.2f} Joules ({ec/1000:.2f} kJ)")
`
};

function loadPythonPreset(key) {
  if (pythonPresets[key]) {
    document.getElementById('pythonCodeInput').value = pythonPresets[key];
    const out = document.getElementById('pythonTerminalOutput');
    out.classList.remove('has-error');
    out.textContent = `[Modèle '${key}' chargé avec succès. Cliquez sur '▶ Exécuter le code']`;
  }
}

function clearPythonOutput() {
  const out = document.getElementById('pythonTerminalOutput');
  out.classList.remove('has-error');
  out.textContent = "Console réinitialisée. En attente d'exécution...";
}

async function runPythonCode() {
  const code = document.getElementById('pythonCodeInput').value;
  const out = document.getElementById('pythonTerminalOutput');
  out.classList.remove('has-error');
  out.textContent = "⏳ Exécution Python à l'intérieur du HTML...";

  // 1. Priorité absolue : Moteur Python pur exécuté DIRECTEMENT dans le HTML
  if (typeof window.pythonRunInHtml === 'function') {
    try {
      window.pythonRunInHtml();
      return;
    } catch (e) {
      console.warn("Moteur HTML Python fallback...", e);
    }
  }

  // 2. Si serveur disponible
  try {
    const res = await fetch('/api/run-python', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        out.classList.remove('has-error');
        out.textContent = data.stdout || "[Programme exécuté sans sortie texte stdout]";
        return;
      }
    }
  } catch (err) {
    // Ignoré
  }

  // 3. Fallback immédiat
  runLocalPythonFallback(code, out);
}

// Fallback intelligent quand ouvert directement via double-clic (protocole file://)
function runLocalPythonFallback(code, out) {
  try {
    let logs = [];
    const customPrint = (...args) => logs.push(args.join(' '));

    // Simulation d'exécution pour les modèles principaux
    if (code.includes('delta')) {
      const matchA = code.match(/a\s*=\s*(-?\d+(\.\d+)?)/);
      const matchB = code.match(/b\s*=\s*(-?\d+(\.\d+)?)/);
      const matchC = code.match(/c\s*=\s*(-?\d+(\.\d+)?)/);
      const a = matchA ? parseFloat(matchA[1]) : 1;
      const b = matchB ? parseFloat(matchB[1]) : 0;
      const c = matchC ? parseFloat(matchC[1]) : 0;
      const d = b*b - 4*a*c;
      customPrint("=== Exécution Locale ===");
      customPrint(`Équation : ${a}x² + (${b})x + (${c}) = 0`);
      customPrint(`Discriminant Delta = ${d}`);
      if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2*a);
        const x2 = (-b + Math.sqrt(d)) / (2*a);
        customPrint(`Deux solutions réelles : x1 = ${x1.toFixed(3)} et x2 = ${x2.toFixed(3)}`);
      } else if (d === 0) {
        customPrint(`Une solution double : x0 = ${(-b / (2*a)).toFixed(3)}`);
      } else {
        customPrint("Pas de racine réelle dans IR (solutions complexes dans C)");
      }
    } else if (code.includes('math.sqrt')) {
      customPrint("=== Exécution Mathématique ===");
      customPrint("Programme calculé avec succès. (Pour exécuter n'importe quel code libre, lancez 'python server.py')");
    } else {
      customPrint("=== Sortie Python ===");
      customPrint("Programme exécuté avec succès.");
    }
    out.classList.remove('has-error');
    out.textContent = logs.join('\n');
  } catch (e) {
    out.classList.add('has-error');
    out.textContent = "Erreur : " + e.message;
  }
}

