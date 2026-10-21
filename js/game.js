(() => {
  "use strict";
  const data = window.GAME_DATA;
  const el = id => document.getElementById(id);
  const start = el("start"), result = el("result"), questionPanel = el("question");
  const prompt = el("prompt"), car = el("car"), scoreEl = el("score");
  const progressEl = el("progress"), feedbackEl = el("feedback");
  const buttons = { left: el("left"), right: el("right") };
  const resultTitle = el("resultTitle"), resultText = el("resultText");
  let raceQuestions = [], index = 0, score = 0, locked = false, timer = null;

  function shuffled(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function prepareQuestion(source) {
    const q = { ...source, choices: shuffled(source.choices) };
    // 左右に正解が偏らないよう、表示位置をランダムに割り当てます。
    q.choices = q.choices.map((choice, i) => ({ ...choice, side: i === 0 ? "left" : "right" }));
    return q;
  }
  function resetScene() {
    clearTimeout(timer);
    locked = false;
    car.classList.remove("left-turn", "right-turn");
    questionPanel.classList.remove("show");
    Object.values(buttons).forEach(button => {
      button.classList.remove("show");
      button.disabled = false;
    });
    result.classList.remove("show");
  }
  function begin() {
    resetScene();
    score = 0;
    index = 0;
    scoreEl.textContent = "0";
    start.classList.add("hide");
    raceQuestions = shuffled(data.questions).slice(0, Math.min(data.game.questionsPerRace, data.questions.length));
    showQuestion();
  }
  function showQuestion() {
    resetScene();
    if (index >= raceQuestions.length) {
      finishRace();
      return;
    }
    const q = prepareQuestion(raceQuestions[index]);
    prompt.textContent = q.prompt;
    progressEl.textContent = (index + 1) + " / " + raceQuestions.length;
    feedbackEl.textContent = "";
    Object.values(buttons).forEach(button => { button.textContent = ""; button.dataset.value = ""; });
    q.choices.forEach(choice => {
      const button = buttons[choice.side];
      button.textContent = choice.label;
      button.dataset.value = String(choice.value);
      button.setAttribute("aria-label", "答え " + choice.label);
    });
    timer = setTimeout(() => {
      questionPanel.classList.add("show");
      Object.values(buttons).forEach(button => button.classList.add("show"));
    }, data.game.questionDelayMs);
    buttons.left.focus({ preventScroll: true });
    showQuestion.current = q;
  }
  function choose(side) {
    if (locked) return;
    const q = showQuestion.current;
    if (!q) return;
    locked = true;
    Object.values(buttons).forEach(button => { button.disabled = true; button.classList.remove("show"); });
    const chosen = Number(buttons[side].dataset.value);
    const correct = chosen === q.correctValue;
    car.classList.add(side + "-turn");
    // 解説を読めるよう、問題パネルは残して選択肢だけを隠します。
    questionPanel.classList.add("show");
    if (correct) {
      score++;
      scoreEl.textContent = String(score);
      feedbackEl.textContent = "せいかい！ " + q.explanation;
    } else {
      feedbackEl.textContent = "おしい！ 正解は「" + q.correctValue + "」。" + q.explanation;
    }
    timer = setTimeout(() => {
      index++;
      if (index >= raceQuestions.length) finishRace();
      else showQuestion();
    }, data.game.resultDelayMs);
  }
  function finishRace() {
    resetScene();
    resultTitle.textContent = score === raceQuestions.length ? "パーフェクト！ 🏆" : "ゴール！ 🏁";
    resultTitle.style.color = score === raceQuestions.length ? "#3be89c" : "#ffd12a";
    resultText.textContent = raceQuestions.length + "問中 " + score + "問正解！" +
      (score === raceQuestions.length ? " 全問正解、すばらしい！" : " まちがえた問題は、解説を思い出してもう一度挑戦しよう。");
    result.classList.add("show");
    el("retry").focus({ preventScroll: true });
  }
  el("startBtn").addEventListener("click", begin);
  el("retry").addEventListener("click", begin);
  Object.keys(buttons).forEach(side => buttons[side].addEventListener("click", () => choose(side)));
  document.addEventListener("keydown", event => {
    if (locked || start.classList.contains("hide") === false || result.classList.contains("show")) return;
    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") { if (!buttons.left.disabled && buttons.left.classList.contains("show")) choose("left"); }
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") { if (!buttons.right.disabled && buttons.right.classList.contains("show")) choose("right"); }
  });
})();
