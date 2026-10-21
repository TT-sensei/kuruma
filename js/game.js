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
  const vehicles = {
    race: { name: "レーシングカー", number: "GT 01", icon: "🏎️" },
    police: { name: "パトカー", number: "POLICE", icon: "🚓" },
    fire: { name: "しょうぼうしゃ", number: "FIRE", icon: "🚒" },
    truck: { name: "トラック", number: "TRUCK", icon: "🚚" }
  };
  const courses = [
    { id: "grand-prix", name: "グランプリ" },
    { id: "city", name: "シティコース" },
    { id: "forest", name: "もりのコース" },
    { id: "coast", name: "うみべのコース" },
    { id: "night", name: "ナイトコース" }
  ];
  let selectedVehicle = "race";
  let subjectFilter = "both";
  let gradeFilter = "all";
  let currentCourse = null;
  let courseReady = true;
  let currentQuestion = null;
  let raceQuestions = [], index = 0, score = 0, speed = 60, locked = false, timer = null;

  function shuffled(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function chooseCourse() {
    const options = courses.filter(course => !currentCourse || course.id !== currentCourse.id);
    currentCourse = options[Math.floor(Math.random() * options.length)];
    courses.forEach(course => root.classList.remove("course-" + course.id));
    root.classList.add("course-" + currentCourse.id);
    courseNameEl.textContent = currentCourse.name;
    coursePreviewEl.textContent = currentCourse.name;
  }
  function setVehicle(id) {
    selectedVehicle = id;
    const vehicle = vehicles[id];
    Object.keys(vehicles).forEach(key => {
      const option = document.querySelector('[data-vehicle="' + key + '"]');
      option.classList.toggle("selected", key === id);
      option.setAttribute("aria-pressed", String(key === id));
    });
    car.classList.remove("car--race", "car--police", "car--fire", "car--truck", "left-turn", "right-turn");
    car.classList.add("car--" + id);
    vehicleNumberEl.textContent = vehicle.number;
    vehiclePreviewEl.textContent = vehicle.name + "でスタート";
  }
  function setSelectedOption(selector, activeValue, attr) {
    document.querySelectorAll(selector).forEach(button => {
      const active = button.getAttribute(attr) === activeValue;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  function updateSpeed(delta) {
    const previous = speed;
    speed = Math.max(20, Math.min(240, speed + delta));
    el("speed").textContent = String(speed);
    el("speedPanel").setAttribute("aria-label", "現在の時速 " + speed + " キロメートル");
    el("speedPanel").classList.remove("speed-up", "speed-down");
    el("speedPanel").classList.add(speed >= previous ? "speed-up" : "speed-down");
    const duration = 1.3 - ((speed - 20) / 220) * 1.05;
    root.style.setProperty("--drive-duration", duration.toFixed(2) + "s");
    return speed - previous;
  }
  function resetSpeed() {
    speed = 60;
    el("speed").textContent = "60";
    el("speedPanel").classList.remove("speed-up", "speed-down");
    el("speedPanel").setAttribute("aria-label", "現在の時速 60 キロメートル");
    root.style.setProperty("--drive-duration", "1.11s");
  }
  function resetScene() {
    clearTimeout(timer);
    locked = false;
    currentQuestion = null;
    car.classList.remove("left-turn", "right-turn");
    questionPanel.classList.remove("show");
    feedbackEl.textContent = "";
    Object.values(buttons).forEach(button => {
      button.classList.remove("show");
      button.disabled = true;
    });
    result.classList.remove("show");
  }
  function begin() {
    resetScene();
    if (!courseReady) chooseCourse();
    courseReady = false;
    score = 0;
    index = 0;
    resetSpeed();
    scoreEl.textContent = "0";
    start.classList.add("hide");
    const pool = data.questions.filter(q =>
      (subjectFilter === "both" || q.subject === subjectFilter) &&
      (gradeFilter === "all" || String(q.grade) === gradeFilter)
    );
    raceQuestions = shuffled(pool).slice(0, Math.min(data.game.questionsPerRace, pool.length));
    if (raceQuestions.length === 0) {
      resultTitle.textContent = "問題がありません";
      resultText.textContent = "選んだ条件に合う問題を登録してください。";
      result.classList.add("show");
      return;
    }
    showQuestion();
  }
  function prepareQuestion(source) {
    const q = { ...source, choices: shuffled(source.choices) };
    q.choices = q.choices.map((choice, i) => ({ ...choice, side: i === 0 ? "left" : "right" }));
    return q;
  }
  function showQuestion() {
    resetScene();
    if (index >= raceQuestions.length) {
      finishRace();
      return;
    }
    const q = prepareQuestion(raceQuestions[index]);
    currentQuestion = q;
    prompt.textContent = q.prompt;
    progressEl.textContent = (index + 1) + " / " + raceQuestions.length;
    el("questionHint").textContent = q.subject + "・" + q.grade + "年生の問題";
    Object.values(buttons).forEach(button => { button.textContent = ""; button.dataset.value = ""; });
    q.choices.forEach(choice => {
      const button = buttons[choice.side];
      button.textContent = choice.label;
      button.dataset.value = String(choice.value);
      button.disabled = false;
      button.setAttribute("aria-label", "答え " + choice.label);
    });
    timer = setTimeout(() => {
      questionPanel.classList.add("show");
      Object.values(buttons).forEach(button => button.classList.add("show"));
    }, data.game.questionDelayMs);
  }
  function choose(side) {
    if (locked || !currentQuestion || !buttons[side].classList.contains("show")) return;
    locked = true;
    Object.values(buttons).forEach(button => { button.disabled = true; button.classList.remove("show"); });
    const chosen = buttons[side].dataset.value;
    const correct = String(chosen) === String(currentQuestion.correctValue);
    car.classList.add(side + "-turn");
    questionPanel.classList.add("show");
    if (correct) {
      score++;
      scoreEl.textContent = String(score);
      const gain = updateSpeed(20);
      feedbackEl.textContent = "せいかい！ " + (gain > 0 ? "時速 +" + gain + " km/h！ " : "最高速度！ ") + "いま " + speed + " km/h。 " + currentQuestion.explanation;
    } else {
      const correctChoice = currentQuestion.choices.find(choice => String(choice.value) === String(currentQuestion.correctValue));
      const correctLabel = correctChoice ? correctChoice.label : String(currentQuestion.correctValue);
      const loss = updateSpeed(-15);
      feedbackEl.textContent = "おしい！ " + (loss < 0 ? "時速 " + loss + " km/h。 " : "これ以上はおそくならないよ！ ") + "いま " + speed + " km/h。正解は「" + correctLabel + "」。" + currentQuestion.explanation;
    }
    timer = setTimeout(() => {
      index++;
      if (index >= raceQuestions.length) finishRace();
      else showQuestion();
    }, data.game.resultDelayMs);
  }
  function finishRace() {
    resetScene();
    const total = raceQuestions.length;
    resultTitle.textContent = score === total ? "パーフェクト！ 🏆" : "ゴール！ 🏁";
    resultTitle.style.color = score === total ? "#3be89c" : "#ffd12a";
    resultText.textContent = total + "問中 " + score + "問正解！" +
      (score === total ? " 全問正解、すばらしい！" : " まちがえた問題も、解説を見ながら少しずつ覚えよう。");
    el("nextRaceNote").textContent = vehicles[selectedVehicle].name + "のまま、次は別のコースに挑戦しよう！";
    result.classList.add("show");
    el("retry").focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-vehicle]").forEach(button =>
    button.addEventListener("click", () => setVehicle(button.dataset.vehicle))
  );
  document.querySelectorAll("[data-subject-filter]").forEach(button => button.addEventListener("click", () => {
    subjectFilter = button.dataset.subjectFilter;
    setSelectedOption("[data-subject-filter]", subjectFilter, "data-subject-filter");
  }));
  document.querySelectorAll("[data-grade-filter]").forEach(button => button.addEventListener("click", () => {
    gradeFilter = button.dataset.gradeFilter;
    setSelectedOption("[data-grade-filter]", gradeFilter, "data-grade-filter");
  }));
  el("startBtn").addEventListener("click", begin);
  el("retry").addEventListener("click", begin);
  Object.keys(buttons).forEach(side => buttons[side].addEventListener("click", () => choose(side)));
  document.addEventListener("keydown", event => {
    if (locked || !start.classList.contains("hide") || result.classList.contains("show")) return;
    if ((event.key === "ArrowLeft" || event.key.toLowerCase() === "a") && buttons.left.classList.contains("show")) choose("left");
    if ((event.key === "ArrowRight" || event.key.toLowerCase() === "d") && buttons.right.classList.contains("show")) choose("right");
  });

  setVehicle(selectedVehicle);
  chooseCourse();
})();
