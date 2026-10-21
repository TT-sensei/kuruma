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
  const liveryNames = { stock: "ファクトリー", neon: "ネオン", stripe: "レーシング", carbon: "カーボン" };
  const liveryUnlocks = { stock: 0, neon: 25, stripe: 60, carbon: 100 };
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
  const defaultCareer = { points: 0, races: 0, bestScore: 0, bestSpeed: 0, bestStreak: 0, totalCorrect: 0, wins: 0, totalNitro: 0, badges: [], selectedLivery: "stock" };
  const storageKey = "kuruma-study-career-v1";
  const dailyStorageKey = "kuruma-study-daily-v1";
  const dailySpecialLimit = 3;
  const normalEvent = { id: "standard", name: "通常レース", description: "スペシャルイベントの対象回数外です。通常レースは何度でも楽しめます。", startSpeed: 60, nitroBonus: 0, streakBonus: 0, pointBonus: 0, finishBonus: 0, isSpecial: false };
  function localDayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function readDailyState() {
    const today = localDayKey();
    try {
      const saved = JSON.parse(localStorage.getItem(dailyStorageKey) || "null");
      if (!saved || saved.date !== today) return { date: today, used: 0 };
      return { date: today, used: Math.max(0, Math.min(dailySpecialLimit, Number(saved.used) || 0)) };
    } catch (_) { return { date: today, used: 0 }; }
  }
  let dailyState = readDailyState();
  function saveDailyState() {
    try { localStorage.setItem(dailyStorageKey, JSON.stringify(dailyState)); } catch (_) {}
  }
  function refreshDailyState() {
    if (dailyState.date !== localDayKey()) dailyState = { date: localDayKey(), used: 0 };
    renderDailyState();
  }
  function remainingSpecialRaces() { return Math.max(0, dailySpecialLimit - dailyState.used); }
  function renderDailyState() {
    const remaining = remainingSpecialRaces();
    const count = el("dailySpecialCount");
    if (count) count.textContent = String(remaining);
    const message = el("dailyLimitMessage");
    if (message) message.textContent = remaining > 0
      ? "スペシャルイベントとポイントボーナスは1日3回まで。通常レースは何度でもプレイできます。"
      : "今日のスペシャルレースは終了。通常レースと学習は引き続き何度でもプレイできます。";
    const resultNote = el("dailySpecialResult");
    if (resultNote) resultNote.textContent = "今日のスペシャルレース残り：" + remaining + " / " + dailySpecialLimit + "回";
  }
  function loadCareer() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const saved = parsed && typeof parsed === "object" ? parsed : {};
      return Object.assign({}, defaultCareer, saved, {
        badges: Array.isArray(saved.badges) ? saved.badges : [],
        selectedLivery: liveryNames[saved.selectedLivery] ? saved.selectedLivery : "stock"
      });
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
    const eventPoints = currentEvent.isSpecial ? score * (currentEvent.pointBonus || 0) + (currentEvent.finishBonus || 0) : 0;
    const reward = currentEvent.isSpecial ? 5 + score * 2 + eventPoints + (won ? 3 : 0) : 0;
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
        ? "今回の獲得ポイント：" + reward + " pt" + (eventPoints ? "（イベントボーナス +" + eventPoints + " ptを含む）" : "")
        : "今日はスペシャルレースの上限に達しています。通常レースと学習は引き続き楽しめます。ポイントは明日また獲得できます。");
    el("resultRecords").textContent =
      "イベント：" + currentEvent.name + " ／ 最高速度 " + raceBestSpeed + " km/h ／ 連続正解 " + raceBestStreak +
      "問 ／ ニトロ " + nitroUses + "回" + (wasBest ? " ／ 🆕 自己ベスト更新！" : "");
    el("badgeNotice").textContent = newBadges.length
      ? "新しい称号を獲得！ " + newBadges.map(id => badgeInfo[id].name).join("・")
      : (career.badges.length ? "獲得した称号：" + career.badges.map(id => badgeInfo[id].name).join("・") : "レースを続けて称号を集めよう。");
    el("nextRaceNote").textContent = vehicles[selectedVehicle].name + "・" + liveryNames[selectedLivery] +
      "仕様。次は別のコースとイベントが待っている！";
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