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
    livery: { label: "いろ", options: [
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
    roof: { label: "ルーフのかざり", options: [
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
    { id: "night", name: "よるのコース" }
  ];
  const events = [
    { id: "tailwind", name: "おいかぜスタート", description: "スタートのはやさが80 km/hになるよ！", startSpeed: 80, nitroBonus: 0, pointBonus: 0, finishBonus: 0 },
    { id: "nitro-day", name: "ニトロデー", description: "せいかいすると、ニトロがいつもよりたまるよ！", startSpeed: 60, nitroBonus: 12, pointBonus: 0, finishBonus: 0 },
    { id: "bonus-points", name: "ポイントボーナス", description: "1もんせいかいするごとに、ポイントが1ptふえるよ！", startSpeed: 60, nitroBonus: 0, pointBonus: 1, finishBonus: 0 },
    { id: "crew-support", name: "クルーおうえんデー", description: "5もんいじょうせいかいすると、6ptプラス！", startSpeed: 60, nitroBonus: 0, pointBonus: 0, finishBonus: 6 },
    { id: "streak-festival", name: "れんぞくせいかいフェス", description: "れんぞくでせいかいすると、ニトロがもっとたまるよ！", startSpeed: 60, nitroBonus: 0, streakBonus: 10, pointBonus: 0, finishBonus: 0 }
  ];
  const defaultCareer = { points: 0, races: 0, bestScore: 0, bestSpeed: 0, bestStreak: 0, totalCorrect: 0, wins: 0, totalNitro: 0, badges: [], selectedLivery: "stock", customParts: defaultCustomParts };
  const storageKey = "kuruma-study-career-v1";
  const minCustomChangeCost = 5;
  function customOptionCost(option) {
    return Math.max(minCustomChangeCost, Math.max(0, Number(option && option.points) || 0));
  }
  function pendingCustomCost() {
    return Object.keys(customCatalog).reduce((total, slot) => {
      if (pendingCustomParts[slot] === career.customParts[slot]) return total;
      const option = customCatalog[slot].options.find(item => item.id === pendingCustomParts[slot]);
      return total + customOptionCost(option);
    }, 0);
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
        loaded.customParts[slot] = option ? selected : defaultCustomParts[slot];
      }
      loaded.selectedLivery = loaded.customParts.livery;
      return loaded;
    } catch (_) { return Object.assign({}, defaultCareer, { customParts: Object.assign({}, defaultCustomParts), badges: [] }); }
  }
  let career = loadCareer();
  let selectedVehicle = "red";
  let selectedLivery = career.selectedLivery || "stock";
  let pendingCustomParts = Object.assign({}, career.customParts || defaultCustomParts);
  pendingCustomParts.livery = selectedLivery;
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
  function selectedCustomValue(slot) {
    return pendingCustomParts[slot] || defaultCustomParts[slot];
  }
  function hasPendingCustomChanges() {
    return Object.keys(customCatalog).some(slot => pendingCustomParts[slot] !== career.customParts[slot]);
  }
  function renderCustomActions() {
    const changed = hasPendingCustomChanges();
    const cost = pendingCustomCost();
    const balance = Math.max(0, Number(career.points) || 0);
    const enough = cost <= balance;
    const confirm = el("confirmCustomBtn");
    const discard = el("discardCustomBtn");
    const balanceEl = el("garagePointBalance");
    const costEl = el("customCostPreview");
    const afterEl = el("customPointsAfter");
    if (balanceEl) balanceEl.textContent = String(balance);
    if (costEl) costEl.textContent = String(cost);
    if (afterEl) afterEl.textContent = String(Math.max(0, balance - cost));
    if (confirm) {
      confirm.disabled = !changed || !enough || raceActive;
      confirm.textContent = !changed
        ? "🪙 かえたいパーツをえらぼう"
        : enough
          ? "🪙 ポイントでかう（合計 " + cost + " pt）"
          : "ポイントがたりないよ（あと " + (cost - balance) + " pt）";
    }
    if (discard) discard.disabled = !changed || raceActive;
    const status = el("customStatus");
    if (status && status.dataset.notice !== "result") {
      status.textContent = changed
        ? enough
          ? "こんかいのねだんは合計 " + cost + " pt。かうと、のこりは " + (balance - cost) + " ptになるよ。"
          : "こんかいのねだんは合計 " + cost + " pt。あと " + (cost - balance) + " ptひつようだよ。もんだいをといてためよう。"
        : "パーツのねだんを見てえらぼう。「ポイントでかう」をおすと、ポイントをつかうよ。もんだいをといてためよう。";
      status.dataset.notice = changed ? "preview" : "";
    }
  }
  function slotClass(slot, value) {
    const prefix = { livery: "livery--", decal: "decal--", spoiler: "spoiler--", wheels: "wheels--", lights: "lights--", roof: "roof--", aura: "aura--" }[slot];
    return prefix + value;
  }
  function applyAppearance() {
    const vehicle = vehicles[selectedVehicle];
    const removable = ["car--red", "car--blue", "car--yellow", "car--black", "left-turn", "right-turn", "nitro-flash"];
    for (const [slot, config] of Object.entries(customCatalog)) {
      for (const option of config.options) removable.push(slotClass(slot, option.id));
    }
    car.classList.remove(...removable);
    car.classList.add("car--" + selectedVehicle);
    for (const slot of Object.keys(customCatalog)) car.classList.add(slotClass(slot, selectedCustomValue(slot)));
    vehicleNumberEl.textContent = vehicle.number;
    vehiclePreviewEl.textContent = vehicle.name + "でスタート";
    const summary = Object.keys(customCatalog).map(slot => customCatalog[slot].label + "：" +
      customCatalog[slot].options.find(item => item.id === selectedCustomValue(slot)).name);
    el("customPreview").textContent = "いまのマシン： " + summary.join(" ／ ");
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
  function handleCustomSelection(slot, id) {
    const config = customCatalog[slot];
    const option = config && config.options.find(item => item.id === id);
    if (!option || raceActive) return;
    if (selectedCustomValue(slot) === id) return;
    const price = customOptionCost(option);
    if (price > career.points) {
      const status = el("customStatus");
      if (status) {
        status.textContent = "このパーツは " + price + " pt。いまのポイントは " + career.points + " ptだよ。もんだいをといてためよう。";
        status.dataset.notice = "result";
      }
      return;
    }
    pendingCustomParts[slot] = id;
    const status = el("customStatus");
    if (status) {
      status.textContent = "かえたあとのマシンをおためし中だよ。「ポイントでかう」をおすと、合計ぶんのポイントをつかうよ。";
      status.dataset.notice = "preview";
    }
    applyAppearance();
    renderCustomOptions();
    renderCustomActions();
  }
  function confirmCustomChanges() {
    if (raceActive) return;
    const changedSlots = Object.keys(customCatalog).filter(slot =>
      pendingCustomParts[slot] !== career.customParts[slot]
    );
    const cost = pendingCustomCost();
    const status = el("customStatus");
    if (!changedSlots.length) {
      if (status) {
        status.textContent = "へんこうはないよ。ポイントはへっていません。";
        status.dataset.notice = "result";
      }
      return;
    }
    if (cost > career.points) {
      if (status) {
        status.textContent = "あと " + (cost - career.points) + " ptたりないよ。パーツをえらびなおすか、もんだいをといてためよう。";
        status.dataset.notice = "result";
      }
      renderCustomOptions();
      return;
    }
    career.points -= cost;
    career.customParts = Object.assign({}, pendingCustomParts);
    selectedLivery = career.customParts.livery;
    career.selectedLivery = selectedLivery;
    saveCareer();
    applyAppearance();
    renderCareer();
    if (status) {
      status.textContent = "パーツをかったよ！ " + changedSlots.length +
          "しゅるいのパーツをかえて、合計 " + cost + " ptつかったよ。のこりは " + career.points + " ptだよ！";
      status.dataset.notice = "result";
    }
    renderCustomActions();
  }
  function discardCustomChanges() {
    pendingCustomParts = Object.assign({}, career.customParts);
    selectedLivery = career.customParts.livery || "stock";
    applyAppearance();
    renderCareer();
    const status = el("customStatus");
    if (status) {
      status.textContent = "まだきめていないへんこうをやめたよ。ポイントはへっていません。";
      status.dataset.notice = "result";
    }
    renderCustomActions();
  }
  function renderCustomOptions() {
    for (const [slot, config] of Object.entries(customCatalog)) {
      const container = el("customOptions-" + slot);
      if (!container) continue;
      const current = selectedCustomValue(slot);
      const committed = career.customParts[slot];
      container.innerHTML = config.options.map(option => {
        const selected = current === option.id;
        const saved = committed === option.id;
        const price = customOptionCost(option);
        const affordable = career.points >= price;
        const disabled = !affordable && !selected;
        const status = selected && saved
          ? "つけているよ"
          : selected
            ? "えらんでいるよ・" + price + " pt"
            : !affordable
              ? price + " pt・あと" + (price - career.points) + " ptひつよう"
              : saved
                ? price + " ptでもどす"
                : price + " ptでかえる";
        return '<button type="button" class="custom-option' + (selected ? ' is-selected' : '') +
          (saved && !selected ? ' is-saved' : '') + (disabled ? ' is-locked' : '') +
          '" data-custom-slot="' + slot + '" data-custom-value="' + option.id + '" aria-pressed="' + String(selected) + '"' +
          (disabled ? ' disabled' : '') + '><span class="custom-swatch swatch-' + slot + '-' + option.id + '" aria-hidden="true"></span>' +
          '<strong>' + option.name + '</strong><small>' + status + '</small></button>';
      }).join("");
    }
    renderCustomActions();
  }
  function renderCareer() {
    el("careerRaces").textContent = String(career.races);
    el("careerBest").textContent = String(career.bestScore) + " / " + data.game.questionsPerRace;
    el("careerSpeed").textContent = String(career.bestSpeed) + " km/h";
    el("careerPoints").textContent = String(career.points);
    const labels = career.badges.length ? career.badges.map(id => badgeInfo[id] ? badgeInfo[id].name : "").filter(Boolean) : [];
    el("careerBadges").textContent = labels.length ? "あつめたバッジ：" + labels.join(" ／ ") : "レースをすると、バッジがふえていくよ。";
    renderCustomOptions();
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
    el("speedPanel").setAttribute("aria-label", "いまのはやさ " + speed + " キロメートル");
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
    el("speedPanel").setAttribute("aria-label", "いまのはやさ " + speed + " キロメートル");
    root.style.setProperty("--drive-duration", "0.48s");
  }
  function updateDuel() {
    el("playerMarker").style.left = Math.min(100, playerDistance * 100) + "%";
    el("rivalMarker").style.left = Math.min(100, rivalDistance * 100) + "%";
    if (playerDistance > rivalDistance + 0.035) el("positionText").textContent = "1い！";
    else if (rivalDistance > playerDistance + 0.035) el("positionText").textContent = "2い";
    else el("positionText").textContent = "いいしょうぶ";
  }
  function updatePhase() {
    root.classList.remove("phase-start", "phase-battle", "phase-final");
    if (index <= 1) {
      root.classList.add("phase-start");
      el("phaseTag").textContent = "スタート";
    } else if (index >= raceQuestions.length - 2) {
      root.classList.add("phase-final");
      el("phaseTag").textContent = "ラスト";
    } else {
      root.classList.add("phase-battle");
      el("phaseTag").textContent = "まんなか";
    }
  }
  function showEvent() {
    el("eventName").textContent = "イベント・" + currentEvent.name;
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
    if (!courseReady) chooseCourse();
    courseReady = false;
    if (hasPendingCustomChanges()) {
      pendingCustomParts = Object.assign({}, career.customParts);
      selectedLivery = career.customParts.livery || "stock";
      applyAppearance();
      const status = el("customStatus");
      if (status) {
        status.textContent = "まだきめていないカスタムは保存せず、前のマシンでレースをはじめるよ。";
        status.dataset.notice = "result";
      }
    }
    currentEvent = Object.assign({}, events[Math.floor(Math.random() * events.length)], { isSpecial: true });
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
      resultTitle.textContent = "もんだいがないよ";
      resultText.textContent = "えらんだ条件にあうもんだいがないよ。べつの条件をえらんでみてね。";
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
    el("questionHint").textContent = (q.subject === "国語" ? "こくご" : "さんすう") + "・" + ({1:"きほん",2:"ふつう",3:"ちょうせん"}[q.grade] || "ふつう");
    Object.values(buttons).forEach(button => { button.textContent = ""; button.dataset.value = ""; });
    q.choices.forEach(choice => {
      const button = buttons[choice.side];
      button.textContent = choice.label;
      button.dataset.value = String(choice.value);
      button.disabled = false;
      button.setAttribute("aria-label", "こたえ " + choice.label);
    });
    updatePhase();
    timer = setTimeout(() => {
      questionPanel.classList.add("show");
      Object.values(buttons).forEach(button => {
        button.classList.add("show");
        button.disabled = true;
        button.classList.add("thinking");
      });
      el("questionHint").textContent = "もんだいをよんで、かんがえよう。すこしまつと、こたえをえらべるよ。";
      el("thinkMeter").classList.add("active");
      timer = setTimeout(() => {
        if (!raceActive || !currentQuestion) return;
        Object.values(buttons).forEach(button => {
          button.disabled = false;
          button.classList.remove("thinking");
        });
        el("questionHint").textContent = (q.subject === "国語" ? "こくご" : "さんすう") + "・" + ({1:"きほん",2:"ふつう",3:"ちょうせん"}[q.grade] || "ふつう");
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
      feedbackEl.textContent = "せいかい！ " + (gain > 0 ? "はやさ +" + gain + " km/h。 " : "さいこうのはやさ！ ") +
        (streak >= 2 ? streak + "もん れんぞくせいかい！ " : "") + currentQuestion.explanation;
    } else {
      streak = 0;
      el("streak").textContent = "0";
      const correctChoice = currentQuestion.choices.find(choice => String(choice.value) === String(currentQuestion.correctValue));
      const correctLabel = correctChoice ? correctChoice.label : String(currentQuestion.correctValue);
      const loss = updateSpeed(-15);
      feedbackEl.textContent = "ざんねん！ " + (loss < 0 ? "はやさ " + loss + " km/h。 " : "これいじょうおそくならないよ。 ") +
        "ただしいこたえは「" + correctLabel + "」。" + currentQuestion.explanation;
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
    feedbackEl.textContent = "⚡ ニトロ！ はやさ +" + gain + " km/h！";
    clearTimeout(nitroTimer);
    nitroTimer = setTimeout(() => {
      root.classList.remove("nitro-active");
      car.classList.remove("nitro-flash");
    }, 1900);
  }
  const badgeInfo = {
    first: { name: "はじめてのゴール", description: "さいしょのレースをゴール" },
    streak: { name: "れんぞくせいかい", description: "3もんつづけてせいかい" },
    perfect: { name: "パーフェクト", description: "1レースですべてもんだいにせいかい" },
    nitro: { name: "はじめてのニトロ", description: "ニトロをつかった" },
    regular: { name: "サーキットのじょうれん", description: "5レースをゴール" },
    winner: { name: "トップランナー", description: "1いを3かいとった" }
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
    el("phaseTag").textContent = "ゴール";
    const total = raceQuestions.length;
    const won = playerDistance >= rivalDistance;
    const rewardThreshold = Math.ceil(total * 0.625);
    const earnsReward = score >= rewardThreshold;
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
    resultTitle.textContent = won ? "1いでゴール！ 🏆" : "ゴール！ つぎはがんばろう 🏁";
    resultTitle.style.color = won ? "#3be89c" : "#ffd12a";
    resultText.textContent = total + "もん中 " + score + "もんせいかい！ " +
      (score === total ? "パーフェクト！ " : "かいせつをみて、つぎのレースにいかそう。 ") +
      (earnsReward
        ? "もらったポイント：" + reward + " pt" + (eventPoints ? "（イベントで +" + eventPoints + " pt）" : "")
        : "ポイントをもらうには " + rewardThreshold + "もんいじょうのせいかいがひつようだよ。こんかいはポイントなし。かいせつをみて、つぎもがんばろう！");
    el("resultRecords").textContent =
      "イベント：" + currentEvent.name + " ／ さいこうのはやさ " + raceBestSpeed + " km/h ／ れんぞくせいかい " + raceBestStreak +
      "もん ／ ニトロ " + nitroUses + "かい" + (wasBest ? " ／ 🆕 ベストこうしん！" : "");
    el("badgeNotice").textContent = newBadges.length
      ? "あたらしいバッジをゲット！ " + newBadges.map(id => badgeInfo[id].name).join("・")
      : (career.badges.length ? "あつめたバッジ：" + career.badges.map(id => badgeInfo[id].name).join("・") : "レースをしてバッジをあつめよう。");
    el("nextRaceNote").textContent = vehicles[selectedVehicle].name + "・" + liveryNames[selectedLivery] +
      "のマシンだよ。つぎはべつのコースとイベントがまっているよ！";
    result.classList.add("show");
    updateNitro();
    el("retry").focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-vehicle]").forEach(button =>
    button.addEventListener("click", () => setVehicle(button.dataset.vehicle))
  );
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-custom-slot][data-custom-value]");
    if (button && !button.disabled && !raceActive) handleCustomSelection(button.dataset.customSlot, button.dataset.customValue);
  });
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
  el("confirmCustomBtn").addEventListener("click", confirmCustomChanges);
  el("discardCustomBtn").addEventListener("click", discardCustomChanges);
  el("garageBtn").addEventListener("click", () => {
    result.classList.remove("show");
    start.classList.remove("hide");
    resetScene();
    courseReady = false;
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
  applyAppearance();
  renderCareer();
  chooseCourse();
  updateNitro();
})();