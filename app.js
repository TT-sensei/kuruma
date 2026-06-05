const CAR_LIBRARY = [
  { name: "PRIUS", kana: "プリウス" },
  { name: "AQUA", kana: "アクア" },
  { name: "YARIS", kana: "ヤリス" },
  { name: "COROLLA", kana: "カローラ" },
  { name: "CROWN", kana: "クラウン" },
  { name: "ALPHARD", kana: "アルファード" },
  { name: "HARRIER", kana: "ハリアー" },
  { name: "RAV4", kana: "ラブフォー" },
  { name: "LAND CRUISER", kana: "ランドクルーザー" },
  { name: "NOAH", kana: "ノア" },
  { name: "VOXY", kana: "ヴォクシー" },
  { name: "SUPRA", kana: "スープラ" },
  { name: "86", kana: "ハチロク" },
  { name: "SKYLINE", kana: "スカイライン" },
  { name: "GT-R", kana: "ジーティーアール" },
  { name: "FAIRLADY Z", kana: "フェアレディゼット" },
  { name: "NOTE", kana: "ノート" },
  { name: "SERENA", kana: "セレナ" },
  { name: "X-TRAIL", kana: "エクストレイル" },
  { name: "LEAF", kana: "リーフ" },
  { name: "CIVIC", kana: "シビック" },
  { name: "FIT", kana: "フィット" },
  { name: "FREED", kana: "フリード" },
  { name: "VEZEL", kana: "ヴェゼル" },
  { name: "N-BOX", kana: "エヌボックス" },
  { name: "ROADSTER", kana: "ロードスター" },
  { name: "CX-5", kana: "シーエックスファイブ" },
  { name: "RX-7", kana: "アールエックスセブン" },
  { name: "IMPREZA", kana: "インプレッサ" },
  { name: "FORESTER", kana: "フォレスター" },
  { name: "BRZ", kana: "ビーアールゼット" },
  { name: "SWIFT", kana: "スイフト" },
  { name: "JIMNY", kana: "ジムニー" },
  { name: "TANTO", kana: "タント" },
  { name: "MOVE", kana: "ムーヴ" },
  { name: "MINI COOPER", kana: "ミニクーパー" },
  { name: "GOLF", kana: "ゴルフ" },
  { name: "POLO", kana: "ポロ" },
  { name: "A3", kana: "エースリー" },
  { name: "PORSCHE 911", kana: "ポルシェきゅういちいち" }
];
const ALL_CARS = CAR_LIBRARY.map((car) => car.name);
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
function normalizeCarName(name) { return String(name).replace(/[\s-]/g, "").toUpperCase(); }
function getCarData(name) { return CAR_LIBRARY.find((car) => car.name === name || normalizeCarName(car.name) === normalizeCarName(name)) || { name, kana: "" }; }
function getCarLabel(name) { const car = getCarData(name); return `${car.name}${car.kana ? `（${car.kana}）` : ""}`; }
function nextTypingWord() {
  const s = loadState();
  const words = s.unlockedCars;
  const word = words[s.typingIndex % words.length];
  s.typingIndex = (s.typingIndex + 1) % words.length;
  saveState(s);
  return word;
}
window.KurumaApp = { loadState, saveState, addPoint, horn, miss, nextTypingWord, ALL_CARS, CAR_LIBRARY, normalizeCarName, getCarData, getCarLabel };
