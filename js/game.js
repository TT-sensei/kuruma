(() => {
  "use strict";
  const data = window.GAME_DATA;
  const el = id => document.getElementById(id);
  const root = el("game");
  const start = el("start"), result = el("result"), questionPanel = el("question");
  const prompt = el("prompt"), car = el("car"), scoreEl = el("score");
  const progressEl = el("progress"), feedbackEl = el("feedback");
  const courseNameEl = el("courseName"), coursePreviewEl = el("coursePreview");
  const vehicleNumberEl = el("vehicleNumber"), vehiclePreviewEl = el("vehiclePreview");
  const buttons = { left: el("left"), right: el("right") };
  const resultTitle = el("resultTitle"), resultText = el("resultText");
  const customCatalog = {
    livery: { label: "カラー", options: [
      { id: "stock", name: "ファクトリー", points: 0 }, { id: "neon", name: "ネオン", points: 25 },
      { id: "stripe", name: "レーシング", points: 45 }, { id: "carbon", name: "カーボン", points: 70 },
      { id: "sunset", name: "サンセット", points: 90 }, { id: "ice", name: "アイスブルー", points: 110 },
      { id: "lime", name: "ライム", points: 130 }, { id: "purple", name: "パープル", points: 150 },
      { id: "sakura", name: "サクラ", points: 175 }, { id: "gold", name: "ゴールド", points: 200 },
      { id: "ocean", name: "オーシャン", points: 225 }, { id: "flame", name: "フレイム", points: 250 },
      { id: "desert", name: "デザート", points: 280 }, { id: "candy", name: "キャンディ", points: 310 },
      { id: "stealth", name: "ステルス", points: 350 }
    ]},
    decal: { label: "ステッカー", options: [
      { id: "none", name: "なし", points: 0 }, { id: "stripe", name: "スピードライン", points: 0 },
      { id: "checker", name: "チェッカー", points: 15 }, { id: "flame", name: "ファイア", points: 25 },
      { id: "lightning", name: "稲妻", points: 35 }, { id: "stars", name: "スター", points: 45 },
      { id: "sponsor", name: "レーシングロゴ", points: 55 }, { id: "circuit", name: "サーキット", points: 70 },
      { id: "camo", name: "カモフラージュ", points: 90 }, { id: "digital", name: "デジタル", points: 110 }
    ]},
    spoiler: { label: "ウイング", options: [
      { id: "stock", name: "標準", points: 0 }, { id: "double", name: "ダブル", points: 0 },
      { id: "high", name: "ハイウイング", points: 20 }, { id: "split", name: "スプリット", points: 35 },
      { id: "carbon", name: "カーボン", points: 50 }, { id: "aero", name: "エアロGT", points: 70 },
      { id: "wide", name: "ワイド", points: 90 }
    ]},
    wheels: { label: "ホイール", options: [
      { id: "stock", name: "標準", points: 0 }, { id: "silver", name: "シルバー", points: 0 },
      { id: "gold", name: "ゴールド", points: 15 }, { id: "ice", name: "アイス", points: 25 },
      { id: "red", name: "レッド", points: 35 }, { id: "neon", name: "ネオン", points: 45 },
      { id: "white", name: "ホワイト", points: 60 }, { id: "carbon", name: "カーボン", points: 75 },
      { id: "rainbow", name: "レインボー", points: 100 }
    ]},
    lights: { label: "ライト", options: [
      { id: "stock", name: "標準レッド", points: 0 }, { id: "ice", name: "アイスブルー", points: 0 },
      { id: "amber", name: "アンバー", points: 20 }, { id: "green", name: "グリーン", points: 35 },
      { id: "purple", name: "パープル", points: 50 }, { id: "gold", name: "ゴールド", points: 65 },
      { id: "rainbow", name: "レインボー", points: 85 }
    ]},
    roof: { label: "ルーフ飾り", options: [
      { id: "none", name: "なし", points: 0 }, { id: "stripe", name: "ストライプ", points: 0 },
      { id: "checker", name: "チェッカー", points: 20 }, { id: "stars", name: "スター", points: 30 },
      { id: "flag", name: "チェッカーフラッグ", points: 45 }, { id: "number", name: "ゼッケン", points: 55 },
      { id: "japan", name: "日の丸", points: 70 }, { id: "digital", name: "デジタル", points: 90 }
    ]},
    aura: { label: "エフェクト", options: [
      { id: "none", name: "なし", points: 0 }, { id: "blue", name: "ブーストブルー", points: 20 },
      { id: "flame", name: "ファイア", points: 35 }, { id: "purple", name: "プラズマ", points: 50 },
      { id: "emerald", name: "エメラルド", points: 70 }, { id: "gold", name: "ゴールド", points: 90 },
      { id: "rainbow", name: "レインボー", points: 120 }
    ]}
  };
  const liveryNames = Object.fromEntries(customCatalog.livery.options.map(item => [item.id, item.name]));
  const liveryUnlocks = Object.fromEntries(customCatalog.livery.options.map(item => [item.id, item.points]));
  const defaultCustomParts = Object.fromEntries(Object.entries(customCatalog).map(([slot, config]) => [slot, config.options[0].id]));
  const vehicles = {
    red: { name: "GT レッド", number: "GT 01", detail: "スタンダード" },
    blue: { name: "GT ブルー", number: "GT 03", detail: "ダブルウイング" },
    yellow: { name: "GT イエロー", number: "GT 17", detail: "ハイウイング" },
    black: { name: "GT ブラック", number: "GT 24", detail: "ロングウイング" }
  };
  const courses = [
    { id: "grand-prix", name: "グランプリ" },
    { id: "city", name: "シティコース" },
    { id: "forest", name: "もりのコース" },
    { id: "coast", name: "うみべのコース" },
    { id: "night", name: "ナイトコース" }
  ];
  const events = [
    { id: "tailwind", name: "追い風スタート", description: "スタート速度が80 km/hにアップ！", startSpeed: 80, nitroBonus: 0, pointBonus: 0, finishBonus: 0 },
    { id: "nitro-day", name: "ニトロデー", description: "正解するとニトロがいつもより多くたまる！", startSpeed: 60, nitroBonus: 12, pointBonus: 0, finishBonus: 0 },
    { id: "bonus-points", name: "ポイントボーナス", description: "正解1問につきポイントが1pt追加！", startSpeed: 60, nitroBonus: 0, pointBonus: 1, finishBonus: 0 },
    { id: "crew-support", name: "クルー応援デー", description: "完走するとピットクルーから6ptプレゼント！", startSpeed: 60, nitroBonus: 0, pointBonus: 0, finishBonus: 6 },
    { id: "streak-festival", name: "連続正解フェス", description: "連続正解するとニトロがさらにたまる！", startSpeed: 60, nitroBonus: 0, streakBonus: 10, pointBonus: 0, finishBonus: 0 }
  ];
  const defaultCareer = { points: 0, races: 0, bestScore: 0, bestSpeed: 0, bestStreak: 0, totalCorrect: 0, wins: 0, totalNitro: 0, badges: [], selectedLivery: "stock", customParts: defaultCustomParts };
  const storageKey = "kuruma-study-career-v1";
  const customDailyStorageKey = "kuruma-study-custom-daily-v1";
  const dailyCustomLimit = 3;
  function localDayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function readCustomDailyState() {
    const today = localDayKey();
    try {
      const saved = JSON.parse(localStorage.getItem(customDailyStorageKey) || "null");
      if (!saved || saved.date !== today) return { date: today, used: 0 };
      return { date: today, used: Math.max(0, Math.min(dailyCustomLimit, Number(saved.used) || 0)) };
    } catch (_) { return { date: today, used: 0 }; }
  }
  let dailyCustomState = readCustomDailyState();
  function saveCustomDailyState() {
    try { localStorage.setItem(customDailyStorageKey, JSON.stringify(dailyCustomState)); } catch (_) {}
  }
  function remainingCustomChanges() { return Math.max(0, dailyCustomLimit - dailyCustomState.used); }
  function refreshCustomDaily() {
    if (dailyCustomState.date !== localDayKey()) dailyCustomState = { date: localDayKey(), used: 0 };
    renderCustomDaily();
  }
  function renderCustomDaily() {
    const remaining = remainingCustomChanges();
    const count = el("dailyCustomCount");
    if (count) count.textContent = String(remaining);
    const message = el("dailyCustomMessage");
    if (message) message.textContent = remaining > 0
      ? "パーツを1つ変更すると1回分を使います。同じパーツを選び直しても回数は減りません。"
      : "今日はカスタム変更の上限です。ポイント集め・レース・問題練習は何度でも続けられます。";
    const resultNote = el("dailyCustomResult");
    if (resultNote) resultNote.textContent = "今日のカスタム変更残り：" + remaining + " / " + dailyCustomLimit + "回";
    renderCustomOptions();
  }
  function loadCareer() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const saved = parsed && typeof parsed === "object" ? parsed : {};
      const loaded = Object.assign({}, defaultCareer, saved, {
        badges: Array.isArray(saved.badges) ? saved.badges : [],
        selectedLivery: liveryNames[saved.selectedLivery] ? saved.selectedLivery : "stock",
        customParts: Object.assign({}, defaultCustomParts, saved.customParts || {})
      });
      if (!saved.customParts || !saved.customParts.livery) loaded.customParts.livery = loaded.selectedLivery;
      for (const [slot, config] of Object.entries(customCatalog)) {
        const selected = loaded.customParts[slot];
        const option = config.options.find(item => item.id === selected);
        loaded.customParts[slot] = option && option.points <= (Number(loaded.points) || 0)
          ? selected : defaultCustomParts[slot];
      }
      loaded.selectedLivery = loaded.customParts.livery;
      return loaded;
    } catch (_) { return Object.assign({}, defaultCareer); }
  }
  let career = loadCareer();
  let selectedVehicle = "red";
  let selectedLivery = career.selectedLivery || "stock";
  if ((liveryUnlocks[selectedLivery] || 0) > career.points) selectedLivery = "stock";
  let subjectFilter = "both";
  let gradeFilter = "all";
  let currentCourse = null;
  let courseReady = true;
  let currentEvent = events[0];
  let currentQuestion = null;
  let raceQuestions = [], index = 0, score = 0, speed = 60, locked = false, timer = null;
  let nitro = 0, streak = 0, raceBestStreak = 0, nitroUses = 0, raceBestSpeed = 60;
  let playerDistance = 0, rivalDistance = 0, raceActive = false, nitroTimer = null, eventTimer = null;

  function shuffled(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function saveCareer() {
    try { localStorage.setItem(storageKey, JSON.stringify(career)); } catch (_) {}
  }
  function chooseCourse() {
    const options = courses.filter(course => !currentCourse || course.id !== currentCourse.id);
    currentCourse = options[Math.floor(Math.random() * options.length)];
    courses.forEach(course => root.classList.remove("course-" + course.id));
    root.classList.add("course-" + currentCourse.id);
    courseNameEl.textContent = currentCourse.name;
    coursePreviewEl.textContent = currentCourse.name;
  }
  function applyAppearance() {
    const vehicle = vehicles[selectedVehicle];
    car.classList.remove("car--red", "car--blue", "car--yellow", "car--black",
      "livery--stock", "livery--neon", "livery--stripe", "livery--carbon", "left-turn", "right-turn");
    car.classList.add("car--" + selectedVehicle, "livery--" + selectedLivery);
    vehicleNumberEl.textContent = vehicle.number;
    vehiclePreviewEl.textContent = vehicle.name + "でスタート";
    el("liveryPreview").textContent = liveryNames[selectedLivery] + "仕様を選択中";
  }
  function setVehicle(id) {
    if (!vehicles[id]) return;
    selectedVehicle = id;
    Object.keys(vehicles).forEach(key => {
      const option = document.querySelector('[data-vehicle="' + key + '"]');
      option.classList.toggle("selected", key === id);
      option.setAttribute("aria-pressed", String(key === id));
    });
    applyAppearance();
  }
  function setLivery(id) {
    if (!liveryNames[id] || career.points < liveryUnlocks[id]) return;
    selectedLivery = id;
    career.selectedLivery = id;
    saveCareer();
    document.querySelectorAll("[data-livery]").forEach(button => {
      const active = button.dataset.livery === id;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    applyAppearance();
  }
  function renderCareer() {
    el("careerRaces").textContent = String(career.races);
    el("careerBest").textContent = String(career.bestScore) + " / " + data.game.questionsPerRace;
    el("careerSpeed").textContent = String(career.bestSpeed) + " km/h";
    el("careerPoints").textContent = String(career.points);
    document.querySelectorAll("[data-livery]").forEach(button => {
      const id = button.dataset.livery;
      const unlocked = career.points >= liveryUnlocks[id];
      button.disabled = !unlocked;
      button.classList.toggle("locked", !unlocked);
      button.classList.toggle("selected", selectedLivery === id);
      button.setAttribute("aria-pressed", String(selectedLivery === id));
      const small = button.querySelector("small");
      if (small) small.textContent = unlocked ? (selectedLivery === id ? "選択中" : "選択できます") : liveryUnlocks[id] + " ptで解放";
    });
    const labels = career.badges.length ? career.badges.map(id => badgeInfo[id] ? badgeInfo[id].name : "").filter(Boolean) : [];
    el("careerBadges").textContent = labels.length ? "獲得した称号：" + labels.join(" ／ ") : "称号はレースを重ねると増えていきます。";
  }
  function updateNitro() {
    el("nitroFill").style.width = nitro + "%";
    el("nitroText").textContent = nitro + "%";
    el("nitroBtn").disabled = nitro < 100 || !raceActive;
    el("nitroBtn").classList.toggle("ready", nitro >= 100 && raceActive);
  }
  function resetNitro() {
    nitro = 0;
    updateNitro();
  }
  function updateSpeed(delta) {
    const previous = speed;
    speed = Math.max(20, Math.min(240, speed + delta));
    el("speed").textContent = String(speed);
    el("speedPanel").setAttribute("aria-label", "現在の時速 " + speed + " キロメートル");
    el("speedPanel").classList.remove("speed-up", "speed-down");
    el("speedPanel").classList.add(speed >= previous ? "speed-up" : "speed-down");
    const duration = 0.56 - ((speed - 20) / 220) * 0.44;
    root.style.setProperty("--drive-duration", duration.toFixed(2) + "s");
    raceBestSpeed = Math.max(raceBestSpeed, speed);
    return speed - previous;
  }
  function resetSpeed(initialSpeed) {
    speed = initialSpeed || 60;
    raceBestSpeed = speed;
    el("speed").textContent = String(speed);
    el("speedPanel").classList.remove("speed-up", "speed-down");
    el("speedPanel").setAttribute("aria-label", "現在の時速 " + speed + " キロメートル");
    root.style.setProperty("--drive-duration", "0.48s");
  }
  function updateDuel() {
    el("playerMarker").style.left = Math.min(100, playerDistance * 100) + "%";
    el("rivalMarker").style.left = Math.min(100, rivalDistance * 100) + "%";
    if (playerDistance > rivalDistance + 0.035) el("positionText").textContent = "1位";
    else if (rivalDistance > playerDistance + 0.035) el("positionText").textContent = "2位";
    else el("positionText").textContent = "接戦";
  }
  function updatePhase() {
    root.classList.remove("phase-start", "phase-battle", "phase-final");
    if (index <= 1) {
      root.classList.add("phase-start");
      el("phaseTag").textContent = "スタート";
    } else if (index >= raceQuestions.length - 2) {
      root.classList.add("phase-final");
      el("phaseTag").textContent = "ファイナル";
    } else {
      root.classList.add("phase-battle");
      el("phaseTag").textContent = "中盤戦";
    }
  }
  function showEvent() {
    el("eventName").textContent = "EVENT · " + currentEvent.name;
    el("eventBanner").title = currentEvent.description;
    el("eventBanner").classList.add("event-pop");
    clearTimeout(eventTimer);
    eventTimer = setTimeout(() => el("eventBanner").classList.remove("event-pop"), 2600);
  }
  function hideQuestion() {
    questionPanel.classList.remove("show");
    feedbackEl.textContent = "";
    el("thinkMeter").classList.remove("active");
    Object.values(buttons).forEach(button => {
      button.classList.remove("show", "thinking");
      button.disabled = true;
    });
  }
  function resetScene() {
    clearTimeout(timer);
    locked = false;
    currentQuestion = null;
    car.classList.remove("left-turn", "right-turn");
    hideQuestion();
    result.classList.remove("show");
  }
  function begin() {
    resetScene();
    clearTimeout(nitroTimer);
    root.classList.remove("nitro-active");
    refreshDailyState();
    if (!courseReady) chooseCourse();
    courseReady = false;
    if (remainingSpecialRaces() > 0) {
      dailyState.used++;
      saveDailyState();
      currentEvent = Object.assign({}, events[Math.floor(Math.random() * events.length)], { isSpecial: true });
    } else {
      currentEvent = normalEvent;
    }
    renderDailyState();
    score = 0;
    index = 0;
    streak = 0;
    raceBestStreak = 0;
    nitroUses = 0;
    playerDistance = 0;
    rivalDistance = 0;
    raceActive = false;
    resetNitro();
    resetSpeed(currentEvent.startSpeed || 60);
    scoreEl.textContent = "0";
    el("streak").textContent = "0";
    updateDuel();
    start.classList.add("hide");
    showEvent();
    const pool = data.questions.filter(q =>
      (subjectFilter === "both" || q.subject === subjectFilter) &&
      (gradeFilter === "all" || String(q.grade) === gradeFilter)
    );
    raceQuestions = shuffled(pool).slice(0, Math.min(data.game.questionsPerRace, pool.length));
    if (raceQuestions.length === 0) {
      resultTitle.textContent = "問題がありません";
      resultText.textContent = "選んだ条件に合う問題がありません。条件を変えて試してください。";
      result.classList.add("show");
      return;
    }
    raceActive = true;
    updateNitro();
    showQuestion();
  }
  function prepareQuestion(source) {
    const q = Object.assign({}, source, { choices: shuffled(source.choices) });
    q.choices = q.choices.map((choice, i) => Object.assign({}, choice, { side: i === 0 ? "left" : "right" }));
    return q;
  }
  function showQuestion() {
    clearTimeout(timer);
    locked = false;
    currentQuestion = null;
    car.classList.remove("left-turn", "right-turn");
    hideQuestion();
    if (index >= raceQuestions.length) {
      finishRace();
      return;
    }
    const q = prepareQuestion(raceQuestions[index]);
    currentQuestion = q;
    prompt.textContent = q.prompt;
    progressEl.textContent = (index + 1) + " / " + raceQuestions.length;
    el("questionHint").textContent = q.subject + "・" + ({1:"基礎",2:"標準",3:"チャレンジ"}[q.grade] || "標準") + "レベル";
    Object.values(buttons).forEach(button => { button.textContent = ""; button.dataset.value = ""; });
    q.choices.forEach(choice => {
      const button = buttons[choice.side];
      button.textContent = choice.label;
      button.dataset.value = String(choice.value);
      button.disabled = false;
      button.setAttribute("aria-label", "答え " + choice.label);
    });
    updatePhase();
    timer = setTimeout(() => {
      questionPanel.classList.add("show");
      Object.values(buttons).forEach(button => {
        button.classList.add("show");
        button.disabled = true;
        button.classList.add("thinking");
      });
      el("questionHint").textContent = "問題を読んで考えよう。少し待ってから答えを選べます。";
      el("thinkMeter").classList.add("active");
      timer = setTimeout(() => {
        if (!raceActive || !currentQuestion) return;
        Object.values(buttons).forEach(button => {
          button.disabled = false;
          button.classList.remove("thinking");
        });
        el("questionHint").textContent = q.subject + "・" + ({1:"基礎",2:"標準",3:"チャレンジ"}[q.grade] || "標準") + "レベル";
        el("thinkMeter").classList.remove("active");
      }, 1400);
    }, data.game.questionDelayMs);
  }
  function choose(side) {
    if (locked || !raceActive || !currentQuestion || !buttons[side].classList.contains("show") || buttons[side].disabled) return;
    locked = true;
    Object.values(buttons).forEach(button => { button.disabled = true; button.classList.remove("show"); });
    const chosen = buttons[side].dataset.value;
    const correct = String(chosen) === String(currentQuestion.correctValue);
    car.classList.add(side + "-turn");
    questionPanel.classList.add("show");
    if (correct) {
      score++;
      streak++;
      raceBestStreak = Math.max(raceBestStreak, streak);
      scoreEl.textContent = String(score);
      el("streak").textContent = String(streak);
      const gain = updateSpeed(20);
      let charge = 28 + (streak >= 2 ? 7 : 0) + (currentEvent.nitroBonus || 0);
      if (currentEvent.streakBonus && streak >= 2) charge += currentEvent.streakBonus;
      nitro = Math.min(100, nitro + charge);
      feedbackEl.textContent = "正解！ " + (gain > 0 ? "時速 +" + gain + " km/h。 " : "最高速度！ ") +
        (streak >= 2 ? "連続正解 " + streak + "！ " : "") + currentQuestion.explanation;
    } else {
      streak = 0;
      el("streak").textContent = "0";
      const correctChoice = currentQuestion.choices.find(choice => String(choice.value) === String(currentQuestion.correctValue));
      const correctLabel = correctChoice ? correctChoice.label : String(currentQuestion.correctValue);
      const loss = updateSpeed(-15);
      feedbackEl.textContent = "今回は不正解。 " + (loss < 0 ? "時速 " + loss + " km/h。 " : "最低速度です。 ") +
        "正解は「" + correctLabel + "」。" + currentQuestion.explanation;
    }
    updateNitro();
    playerDistance += 0.105 + (correct ? 0.043 : 0.012) + (speed / 240) * 0.012;
    rivalDistance += 0.132 + Math.random() * 0.012;
    updateDuel();
    timer = setTimeout(() => {
      index++;
      if (index >= raceQuestions.length) finishRace();
      else showQuestion();
    }, data.game.resultDelayMs);
  }
  function activateNitro() {
    if (!raceActive || nitro < 100) return;
    nitro = 0;
    nitroUses++;
    updateNitro();
    const gain = updateSpeed(45);
    root.classList.add("nitro-active");
    car.classList.add("nitro-flash");
    feedbackEl.textContent = "⚡ ニトロ発動！ +" + gain + " km/h！";
    clearTimeout(nitroTimer);
    nitroTimer = setTimeout(() => {
      root.classList.remove("nitro-active");
      car.classList.remove("nitro-flash");
    }, 1900);
  }
  const badgeInfo = {
    first: { name: "初完走", description: "最初のレースを完走" },
    streak: { name: "連続正解", description: "3問連続で正解" },
    perfect: { name: "パーフェクト", description: "1レースで全問正解" },
    nitro: { name: "ニトロ初発動", description: "ニトロを使った" },
    regular: { name: "サーキット常連", description: "5レース完走" },
    winner: { name: "トップランナー", description: "1位を3回獲得" }
  };
  function updateBadges() {
    const earned = [];
    if (career.races >= 1) earned.push("first");
    if (career.bestStreak >= 3) earned.push("streak");
    if (career.bestScore >= data.game.questionsPerRace) earned.push("perfect");
    if (career.totalNitro >= 1) earned.push("nitro");
    if (career.races >= 5) earned.push("regular");
    if (career.wins >= 3) earned.push("winner");
    const newBadges = earned.filter(id => !career.badges.includes(id));
    career.badges = earned;
    return newBadges;
  }
  function finishRace() {
    clearTimeout(timer);
    raceActive = false;
    locked = false;
    root.classList.remove("nitro-active");
    car.classList.remove("nitro-flash", "left-turn", "right-turn");
    hideQuestion();
    root.classList.remove("phase-start", "phase-battle", "phase-final");
    root.classList.add("phase-final");
    el("phaseTag").textContent = "FINISH";
    const total = raceQuestions.length;
    const won = playerDistance >= rivalDistance;
    const rewardThreshold = Math.ceil(total * 0.625);
    const earnsReward = currentEvent.isSpecial && score >= rewardThreshold;
    const eventPoints = earnsReward ? score * (currentEvent.pointBonus || 0) + (currentEvent.finishBonus || 0) : 0;
    const reward = earnsReward ? 5 + score * 2 + eventPoints + (won ? 3 : 0) : 0;
    const wasBest = score > career.bestScore;
    career.races++;
    career.totalCorrect += score;
    career.bestScore = Math.max(career.bestScore, score);
    career.bestSpeed = Math.max(career.bestSpeed, raceBestSpeed);
    career.bestStreak = Math.max(career.bestStreak, raceBestStreak);
    career.totalNitro += nitroUses;
    if (won) career.wins++;
    career.points += reward;
    const newBadges = updateBadges();
    saveCareer();
    renderCareer();
    resultTitle.textContent = won ? "1位でフィニッシュ！ 🏆" : "ゴール！ 次は巻き返そう 🏁";
    resultTitle.style.color = won ? "#3be89c" : "#ffd12a";
    resultText.textContent = total + "問中 " + score + "問正解。 " +
      (score === total ? "パーフェクト！ " : "解説を確認して次のレースに生かそう。 ") +
      (currentEvent.isSpecial
        ? (earnsReward
          ? "今回の獲得ポイント：" + reward + " pt" + (eventPoints ? "（イベントボーナス +" + eventPoints + " ptを含む）" : "")
          : "ポイント獲得には " + rewardThreshold + "問以上の正解が必要です。今回はポイントなし。解説を確認して、次のレースで再挑戦しよう。")
        : "今日はスペシャルレースの上限に達しています。通常レースと学習は引き続き楽しめます。ポイントは明日また獲得できます。");
    el("resultRecords").textContent =
      "イベント：" + currentEvent.name + " ／ 最高速度 " + raceBestSpeed + " km/h ／ 連続正解 " + raceBestStreak +
      "問 ／ ニトロ " + nitroUses + "回" + (wasBest ? " ／ 🆕 自己ベスト更新！" : "");
    el("badgeNotice").textContent = newBadges.length
      ? "新しい称号を獲得！ " + newBadges.map(id => badgeInfo[id].name).join("・")
      : (career.badges.length ? "獲得した称号：" + career.badges.map(id => badgeInfo[id].name).join("・") : "レースを続けて称号を集めよう。");
    el("nextRaceNote").textContent = vehicles[selectedVehicle].name + "・" + liveryNames[selectedLivery] +
      "仕様。" + (remainingSpecialRaces() > 0 ? "次は別のコースとスペシャルイベントが待っている！" : "スペシャルイベントは今日はここまで。通常レースはいつでも再挑戦できます。");
    renderDailyState();
    result.classList.add("show");
    updateNitro();
    el("retry").focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-vehicle]").forEach(button =>
    button.addEventListener("click", () => setVehicle(button.dataset.vehicle))
  );
  document.querySelectorAll("[data-livery]").forEach(button =>
    button.addEventListener("click", () => setLivery(button.dataset.livery))
  );
  document.querySelectorAll("[data-subject-filter]").forEach(button => button.addEventListener("click", () => {
    subjectFilter = button.dataset.subjectFilter;
    setSelectedOption("[data-subject-filter]", subjectFilter, "data-subject-filter");
  }));
  document.querySelectorAll("[data-grade-filter]").forEach(button => button.addEventListener("click", () => {
    gradeFilter = button.dataset.gradeFilter;
    setSelectedOption("[data-grade-filter]", gradeFilter, "data-grade-filter");
  }));
  function setSelectedOption(selector, activeValue, attr) {
    document.querySelectorAll(selector).forEach(button => {
      const active = button.getAttribute(attr) === activeValue;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  el("startBtn").addEventListener("click", begin);
  el("retry").addEventListener("click", begin);
  el("garageBtn").addEventListener("click", () => {
    result.classList.remove("show");
    start.classList.remove("hide");
    resetScene();
    courseReady = false;
    refreshDailyState();
    renderCareer();
    el("startBtn").focus({ preventScroll: true });
  });
  el("nitroBtn").addEventListener("click", activateNitro);
  Object.keys(buttons).forEach(side => buttons[side].addEventListener("click", () => choose(side)));
  document.addEventListener("keydown", event => {
    if (event.key === "Shift" && raceActive) {
      event.preventDefault();
      activateNitro();
      return;
    }
    if (locked || !start.classList.contains("hide") || result.classList.contains("show")) return;
    if ((event.key === "ArrowLeft" || event.key.toLowerCase() === "a") && buttons.left.classList.contains("show")) choose("left");
    if ((event.key === "ArrowRight" || event.key.toLowerCase() === "d") && buttons.right.classList.contains("show")) choose("right");
  });

  setVehicle(selectedVehicle);
  setLivery(selectedLivery);
  renderCareer();
  refreshDailyState();
  chooseCourse();
  updateNitro();
})();