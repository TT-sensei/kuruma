/* 問題を増やすときは、同じ形式の問題オブジェクトを追加します。
   choices は基本2つ。side は left / right、value は数値、label は画面表示です。 */
window.GAME_DATA = {
  game: { questionsPerRace: 10, questionDelayMs: 900, resultDelayMs: 1200 },
  questions: [
    { id: "q001", subject: "算数", grade: 1, topic: "たし算", prompt: "1 ＋ 1 ＝ ？", choices: [{ side: "left", value: 1, label: "1" }, { side: "right", value: 2, label: "2" }], correctValue: 2, explanation: "1と1を合わせると、2です。" },
    { id: "q002", subject: "算数", grade: 1, topic: "たし算", prompt: "2 ＋ 3 ＝ ？", choices: [{ side: "left", value: 5, label: "5" }, { side: "right", value: 6, label: "6" }], correctValue: 5, explanation: "2に3をたすと、5です。" },
    { id: "q003", subject: "算数", grade: 1, topic: "たし算", prompt: "4 ＋ 2 ＝ ？", choices: [{ side: "left", value: 7, label: "7" }, { side: "right", value: 6, label: "6" }], correctValue: 6, explanation: "4に2をたすと、6です。" },
    { id: "q004", subject: "算数", grade: 1, topic: "ひき算", prompt: "5 − 2 ＝ ？", choices: [{ side: "left", value: 3, label: "3" }, { side: "right", value: 2, label: "2" }], correctValue: 3, explanation: "5から2をひくと、3です。" },
    { id: "q005", subject: "算数", grade: 1, topic: "たし算", prompt: "3 ＋ 4 ＝ ？", choices: [{ side: "left", value: 8, label: "8" }, { side: "right", value: 7, label: "7" }], correctValue: 7, explanation: "3に4をたすと、7です。" },
    { id: "q006", subject: "算数", grade: 1, topic: "ひき算", prompt: "8 − 3 ＝ ？", choices: [{ side: "left", value: 5, label: "5" }, { side: "right", value: 4, label: "4" }], correctValue: 5, explanation: "8から3をひくと、5です。" },
    { id: "q007", subject: "算数", grade: 1, topic: "たし算", prompt: "5 ＋ 4 ＝ ？", choices: [{ side: "left", value: 9, label: "9" }, { side: "right", value: 8, label: "8" }], correctValue: 9, explanation: "5に4をたすと、9です。" },
    { id: "q008", subject: "算数", grade: 1, topic: "ひき算", prompt: "7 − 4 ＝ ？", choices: [{ side: "left", value: 4, label: "4" }, { side: "right", value: 3, label: "3" }], correctValue: 3, explanation: "7から4をひくと、3です。" },
    { id: "q009", subject: "算数", grade: 1, topic: "たし算", prompt: "6 ＋ 3 ＝ ？", choices: [{ side: "left", value: 9, label: "9" }, { side: "right", value: 10, label: "10" }], correctValue: 9, explanation: "6に3をたすと、9です。" },
    { id: "q010", subject: "算数", grade: 1, topic: "ひき算", prompt: "9 − 5 ＝ ？", choices: [{ side: "left", value: 4, label: "4" }, { side: "right", value: 5, label: "5" }], correctValue: 4, explanation: "9から5をひくと、4です。" },
    { id: "q011", subject: "算数", grade: 1, topic: "たし算", prompt: "2 ＋ 6 ＝ ？", choices: [{ side: "left", value: 9, label: "9" }, { side: "right", value: 8, label: "8" }], correctValue: 8, explanation: "2に6をたすと、8です。" },
    { id: "q012", subject: "算数", grade: 1, topic: "ひき算", prompt: "10 − 6 ＝ ？", choices: [{ side: "left", value: 4, label: "4" }, { side: "right", value: 3, label: "3" }], correctValue: 4, explanation: "10から6をひくと、4です。" }
  ]
};
