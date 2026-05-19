const ALL_CARS = ["PRIUS","AQUA","YARIS","COROLLA","CROWN","ALPHARD","HARRIER","RAV4","LAND CRUISER","NOAH","VOXY","SUPRA","86","SKYLINE","GT-R","FAIRLADY Z","NOTE","SERENA","X-TRAIL","LEAF","CIVIC","FIT","FREED","VEZEL","N-BOX","ROADSTER","CX-5","RX-7","IMPREZA","FORESTER","BRZ","SWIFT","JIMNY","TANTO","MOVE","MINI COOPER","GOLF","POLO","A3","PORSCHE 911"];
const DEFAULT_STATE = { points: 0, level: 1, unlockedCars: ["PRIUS"], typingIndex: 0 };
const key = "kurumaStudyStateV1";
function loadState() { try { return { ...DEFAULT_STATE, ...JSON.parse(localStorage.getItem(key) || "{}") }; } catch { return { ...DEFAULT_STATE }; } }
function saveState(state) { localStorage.setItem(key, JSON.stringify(state)); }
function levelFromPoints(points) { return Math.floor(points / 5) + 1; }
function addPoint() {
  const s = loadState();
  s.points += 1;
  s.level = levelFromPoints(s.points);
  const unlockCount = Math.min(ALL_CARS.length, s.level);
  s.unlockedCars = ALL_CARS.slice(0, unlockCount);
  saveState(s);
  return s;
}
function horn() { beep(740, 0.16, "square", 0.06); setTimeout(() => beep(620, 0.12, "square", 0.05), 90); }
function miss() { beep(220, 0.13, "sine", 0.03); }
function beep(freq, sec, type, gainValue) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type; osc.frequency.value = freq; gain.gain.value = gainValue;
  osc.connect(gain); gain.connect(ctx.destination); osc.start();
  osc.stop(ctx.currentTime + sec);
}
function nextTypingWord() {
  const s = loadState();
  const words = s.unlockedCars;
  const word = words[s.typingIndex % words.length];
  s.typingIndex = (s.typingIndex + 1) % words.length;
  saveState(s);
  return word;
}
window.KurumaApp = { loadState, saveState, addPoint, horn, miss, nextTypingWord, ALL_CARS };
