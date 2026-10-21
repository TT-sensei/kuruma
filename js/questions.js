/* 全200問。生活に結びつく漢字の読みと、かけ算中心の計算問題。
   grade は出題レベル（1=基礎、2=標準、3=チャレンジ）。基本は2択です。 */
window.GAME_DATA = {
  game: { questionsPerRace: 8, questionDelayMs: 650, resultDelayMs: 1550 },
  questions: [
  {
    "id": "mul-001",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "9 × 7 ＝ ？",
    "choices": [
      {
        "value": 63,
        "label": "63"
      },
      {
        "value": 56,
        "label": "56"
      }
    ],
    "correctValue": 63,
    "explanation": "9×7＝63です。"
  },
  {
    "id": "mul-002",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "9 × 9 ＝ ？",
    "choices": [
      {
        "value": 81,
        "label": "81"
      },
      {
        "value": 90,
        "label": "90"
      }
    ],
    "correctValue": 81,
    "explanation": "9×9＝81です。"
  },
  {
    "id": "mul-003",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "9 × 6 ＝ ？",
    "choices": [
      {
        "value": 54,
        "label": "54"
      },
      {
        "value": 48,
        "label": "48"
      }
    ],
    "correctValue": 54,
    "explanation": "9×6＝54です。"
  },
  {
    "id": "mul-004",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "9 × 8 ＝ ？",
    "choices": [
      {
        "value": 72,
        "label": "72"
      },
      {
        "value": 81,
        "label": "81"
      }
    ],
    "correctValue": 72,
    "explanation": "9×8＝72です。"
  },
  {
    "id": "mul-005",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "9 × 5 ＝ ？",
    "choices": [
      {
        "value": 45,
        "label": "45"
      },
      {
        "value": 40,
        "label": "40"
      }
    ],
    "correctValue": 45,
    "explanation": "9×5＝45です。"
  },
  {
    "id": "mul-006",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 2 ＝ ？",
    "choices": [
      {
        "value": 4,
        "label": "4"
      },
      {
        "value": 6,
        "label": "6"
      }
    ],
    "correctValue": 4,
    "explanation": "2×2＝4です。"
  },
  {
    "id": "mul-007",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 3 ＝ ？",
    "choices": [
      {
        "value": 6,
        "label": "6"
      },
      {
        "value": 3,
        "label": "3"
      }
    ],
    "correctValue": 6,
    "explanation": "2×3＝6です。"
  },
  {
    "id": "mul-008",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 4 ＝ ？",
    "choices": [
      {
        "value": 8,
        "label": "8"
      },
      {
        "value": 10,
        "label": "10"
      }
    ],
    "correctValue": 8,
    "explanation": "2×4＝8です。"
  },
  {
    "id": "mul-009",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 5 ＝ ？",
    "choices": [
      {
        "value": 10,
        "label": "10"
      },
      {
        "value": 5,
        "label": "5"
      }
    ],
    "correctValue": 10,
    "explanation": "2×5＝10です。"
  },
  {
    "id": "mul-010",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 6 ＝ ？",
    "choices": [
      {
        "value": 12,
        "label": "12"
      },
      {
        "value": 14,
        "label": "14"
      }
    ],
    "correctValue": 12,
    "explanation": "2×6＝12です。"
  },
  {
    "id": "mul-011",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 7 ＝ ？",
    "choices": [
      {
        "value": 14,
        "label": "14"
      },
      {
        "value": 7,
        "label": "7"
      }
    ],
    "correctValue": 14,
    "explanation": "2×7＝14です。"
  },
  {
    "id": "mul-012",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 8 ＝ ？",
    "choices": [
      {
        "value": 16,
        "label": "16"
      },
      {
        "value": 18,
        "label": "18"
      }
    ],
    "correctValue": 16,
    "explanation": "2×8＝16です。"
  },
  {
    "id": "mul-013",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "2 × 9 ＝ ？",
    "choices": [
      {
        "value": 18,
        "label": "18"
      },
      {
        "value": 9,
        "label": "9"
      }
    ],
    "correctValue": 18,
    "explanation": "2×9＝18です。"
  },
  {
    "id": "mul-014",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 2 ＝ ？",
    "choices": [
      {
        "value": 6,
        "label": "6"
      },
      {
        "value": 9,
        "label": "9"
      }
    ],
    "correctValue": 6,
    "explanation": "3×2＝6です。"
  },
  {
    "id": "mul-015",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 3 ＝ ？",
    "choices": [
      {
        "value": 9,
        "label": "9"
      },
      {
        "value": 6,
        "label": "6"
      }
    ],
    "correctValue": 9,
    "explanation": "3×3＝9です。"
  },
  {
    "id": "mul-016",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 4 ＝ ？",
    "choices": [
      {
        "value": 12,
        "label": "12"
      },
      {
        "value": 15,
        "label": "15"
      }
    ],
    "correctValue": 12,
    "explanation": "3×4＝12です。"
  },
  {
    "id": "mul-017",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 5 ＝ ？",
    "choices": [
      {
        "value": 15,
        "label": "15"
      },
      {
        "value": 10,
        "label": "10"
      }
    ],
    "correctValue": 15,
    "explanation": "3×5＝15です。"
  },
  {
    "id": "mul-018",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 6 ＝ ？",
    "choices": [
      {
        "value": 18,
        "label": "18"
      },
      {
        "value": 21,
        "label": "21"
      }
    ],
    "correctValue": 18,
    "explanation": "3×6＝18です。"
  },
  {
    "id": "mul-019",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 7 ＝ ？",
    "choices": [
      {
        "value": 21,
        "label": "21"
      },
      {
        "value": 14,
        "label": "14"
      }
    ],
    "correctValue": 21,
    "explanation": "3×7＝21です。"
  },
  {
    "id": "mul-020",
    "subject": "算数",
    "grade": 1,
    "topic": "かけ算",
    "prompt": "3 × 8 ＝ ？",
    "choices": [
      {
        "value": 24,
        "label": "24"
      },
      {
        "value": 27,
        "label": "27"
      }
    ],
    "correctValue": 24,
    "explanation": "3×8＝24です。"
  },
  {
    "id": "mul-021",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "3 × 9 ＝ ？",
    "choices": [
      {
        "value": 27,
        "label": "27"
      },
      {
        "value": 18,
        "label": "18"
      }
    ],
    "correctValue": 27,
    "explanation": "3×9＝27です。"
  },
  {
    "id": "mul-022",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 2 ＝ ？",
    "choices": [
      {
        "value": 8,
        "label": "8"
      },
      {
        "value": 12,
        "label": "12"
      }
    ],
    "correctValue": 8,
    "explanation": "4×2＝8です。"
  },
  {
    "id": "mul-023",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 3 ＝ ？",
    "choices": [
      {
        "value": 12,
        "label": "12"
      },
      {
        "value": 9,
        "label": "9"
      }
    ],
    "correctValue": 12,
    "explanation": "4×3＝12です。"
  },
  {
    "id": "mul-024",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 4 ＝ ？",
    "choices": [
      {
        "value": 16,
        "label": "16"
      },
      {
        "value": 20,
        "label": "20"
      }
    ],
    "correctValue": 16,
    "explanation": "4×4＝16です。"
  },
  {
    "id": "mul-025",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 5 ＝ ？",
    "choices": [
      {
        "value": 20,
        "label": "20"
      },
      {
        "value": 15,
        "label": "15"
      }
    ],
    "correctValue": 20,
    "explanation": "4×5＝20です。"
  },
  {
    "id": "mul-026",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 6 ＝ ？",
    "choices": [
      {
        "value": 24,
        "label": "24"
      },
      {
        "value": 28,
        "label": "28"
      }
    ],
    "correctValue": 24,
    "explanation": "4×6＝24です。"
  },
  {
    "id": "mul-027",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 7 ＝ ？",
    "choices": [
      {
        "value": 28,
        "label": "28"
      },
      {
        "value": 21,
        "label": "21"
      }
    ],
    "correctValue": 28,
    "explanation": "4×7＝28です。"
  },
  {
    "id": "mul-028",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 8 ＝ ？",
    "choices": [
      {
        "value": 32,
        "label": "32"
      },
      {
        "value": 36,
        "label": "36"
      }
    ],
    "correctValue": 32,
    "explanation": "4×8＝32です。"
  },
  {
    "id": "mul-029",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "4 × 9 ＝ ？",
    "choices": [
      {
        "value": 36,
        "label": "36"
      },
      {
        "value": 27,
        "label": "27"
      }
    ],
    "correctValue": 36,
    "explanation": "4×9＝36です。"
  },
  {
    "id": "mul-030",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 2 ＝ ？",
    "choices": [
      {
        "value": 10,
        "label": "10"
      },
      {
        "value": 15,
        "label": "15"
      }
    ],
    "correctValue": 10,
    "explanation": "5×2＝10です。"
  },
  {
    "id": "mul-031",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 3 ＝ ？",
    "choices": [
      {
        "value": 15,
        "label": "15"
      },
      {
        "value": 12,
        "label": "12"
      }
    ],
    "correctValue": 15,
    "explanation": "5×3＝15です。"
  },
  {
    "id": "mul-032",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 4 ＝ ？",
    "choices": [
      {
        "value": 20,
        "label": "20"
      },
      {
        "value": 25,
        "label": "25"
      }
    ],
    "correctValue": 20,
    "explanation": "5×4＝20です。"
  },
  {
    "id": "mul-033",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 5 ＝ ？",
    "choices": [
      {
        "value": 25,
        "label": "25"
      },
      {
        "value": 20,
        "label": "20"
      }
    ],
    "correctValue": 25,
    "explanation": "5×5＝25です。"
  },
  {
    "id": "mul-034",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 6 ＝ ？",
    "choices": [
      {
        "value": 30,
        "label": "30"
      },
      {
        "value": 35,
        "label": "35"
      }
    ],
    "correctValue": 30,
    "explanation": "5×6＝30です。"
  },
  {
    "id": "mul-035",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 7 ＝ ？",
    "choices": [
      {
        "value": 35,
        "label": "35"
      },
      {
        "value": 28,
        "label": "28"
      }
    ],
    "correctValue": 35,
    "explanation": "5×7＝35です。"
  },
  {
    "id": "mul-036",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 8 ＝ ？",
    "choices": [
      {
        "value": 40,
        "label": "40"
      },
      {
        "value": 45,
        "label": "45"
      }
    ],
    "correctValue": 40,
    "explanation": "5×8＝40です。"
  },
  {
    "id": "mul-037",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "5 × 9 ＝ ？",
    "choices": [
      {
        "value": 45,
        "label": "45"
      },
      {
        "value": 36,
        "label": "36"
      }
    ],
    "correctValue": 45,
    "explanation": "5×9＝45です。"
  },
  {
    "id": "mul-038",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "6 × 2 ＝ ？",
    "choices": [
      {
        "value": 12,
        "label": "12"
      },
      {
        "value": 18,
        "label": "18"
      }
    ],
    "correctValue": 12,
    "explanation": "6×2＝12です。"
  },
  {
    "id": "mul-039",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "6 × 3 ＝ ？",
    "choices": [
      {
        "value": 18,
        "label": "18"
      },
      {
        "value": 15,
        "label": "15"
      }
    ],
    "correctValue": 18,
    "explanation": "6×3＝18です。"
  },
  {
    "id": "mul-040",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "6 × 4 ＝ ？",
    "choices": [
      {
        "value": 24,
        "label": "24"
      },
      {
        "value": 30,
        "label": "30"
      }
    ],
    "correctValue": 24,
    "explanation": "6×4＝24です。"
  },
  {
    "id": "mul-041",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "6 × 5 ＝ ？",
    "choices": [
      {
        "value": 30,
        "label": "30"
      },
      {
        "value": 25,
        "label": "25"
      }
    ],
    "correctValue": 30,
    "explanation": "6×5＝30です。"
  },
  {
    "id": "mul-042",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "6 × 6 ＝ ？",
    "choices": [
      {
        "value": 36,
        "label": "36"
      },
      {
        "value": 42,
        "label": "42"
      }
    ],
    "correctValue": 36,
    "explanation": "6×6＝36です。"
  },
  {
    "id": "mul-043",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "6 × 7 ＝ ？",
    "choices": [
      {
        "value": 42,
        "label": "42"
      },
      {
        "value": 35,
        "label": "35"
      }
    ],
    "correctValue": 42,
    "explanation": "6×7＝42です。"
  },
  {
    "id": "mul-044",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "6 × 8 ＝ ？",
    "choices": [
      {
        "value": 48,
        "label": "48"
      },
      {
        "value": 54,
        "label": "54"
      }
    ],
    "correctValue": 48,
    "explanation": "6×8＝48です。"
  },
  {
    "id": "mul-045",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "6 × 9 ＝ ？",
    "choices": [
      {
        "value": 54,
        "label": "54"
      },
      {
        "value": 45,
        "label": "45"
      }
    ],
    "correctValue": 54,
    "explanation": "6×9＝54です。"
  },
  {
    "id": "mul-046",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 2 ＝ ？",
    "choices": [
      {
        "value": 14,
        "label": "14"
      },
      {
        "value": 21,
        "label": "21"
      }
    ],
    "correctValue": 14,
    "explanation": "7×2＝14です。"
  },
  {
    "id": "mul-047",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 3 ＝ ？",
    "choices": [
      {
        "value": 21,
        "label": "21"
      },
      {
        "value": 18,
        "label": "18"
      }
    ],
    "correctValue": 21,
    "explanation": "7×3＝21です。"
  },
  {
    "id": "mul-048",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 4 ＝ ？",
    "choices": [
      {
        "value": 28,
        "label": "28"
      },
      {
        "value": 35,
        "label": "35"
      }
    ],
    "correctValue": 28,
    "explanation": "7×4＝28です。"
  },
  {
    "id": "mul-049",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 5 ＝ ？",
    "choices": [
      {
        "value": 35,
        "label": "35"
      },
      {
        "value": 30,
        "label": "30"
      }
    ],
    "correctValue": 35,
    "explanation": "7×5＝35です。"
  },
  {
    "id": "mul-050",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 6 ＝ ？",
    "choices": [
      {
        "value": 42,
        "label": "42"
      },
      {
        "value": 49,
        "label": "49"
      }
    ],
    "correctValue": 42,
    "explanation": "7×6＝42です。"
  },
  {
    "id": "mul-051",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 7 ＝ ？",
    "choices": [
      {
        "value": 49,
        "label": "49"
      },
      {
        "value": 42,
        "label": "42"
      }
    ],
    "correctValue": 49,
    "explanation": "7×7＝49です。"
  },
  {
    "id": "mul-052",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 8 ＝ ？",
    "choices": [
      {
        "value": 56,
        "label": "56"
      },
      {
        "value": 63,
        "label": "63"
      }
    ],
    "correctValue": 56,
    "explanation": "7×8＝56です。"
  },
  {
    "id": "mul-053",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 9 ＝ ？",
    "choices": [
      {
        "value": 63,
        "label": "63"
      },
      {
        "value": 54,
        "label": "54"
      }
    ],
    "correctValue": 63,
    "explanation": "7×9＝63です。"
  },
  {
    "id": "mul-054",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 2 ＝ ？",
    "choices": [
      {
        "value": 16,
        "label": "16"
      },
      {
        "value": 24,
        "label": "24"
      }
    ],
    "correctValue": 16,
    "explanation": "8×2＝16です。"
  },
  {
    "id": "mul-055",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 3 ＝ ？",
    "choices": [
      {
        "value": 24,
        "label": "24"
      },
      {
        "value": 21,
        "label": "21"
      }
    ],
    "correctValue": 24,
    "explanation": "8×3＝24です。"
  },
  {
    "id": "mul-056",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 4 ＝ ？",
    "choices": [
      {
        "value": 32,
        "label": "32"
      },
      {
        "value": 40,
        "label": "40"
      }
    ],
    "correctValue": 32,
    "explanation": "8×4＝32です。"
  },
  {
    "id": "mul-057",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 5 ＝ ？",
    "choices": [
      {
        "value": 40,
        "label": "40"
      },
      {
        "value": 35,
        "label": "35"
      }
    ],
    "correctValue": 40,
    "explanation": "8×5＝40です。"
  },
  {
    "id": "mul-058",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 6 ＝ ？",
    "choices": [
      {
        "value": 48,
        "label": "48"
      },
      {
        "value": 56,
        "label": "56"
      }
    ],
    "correctValue": 48,
    "explanation": "8×6＝48です。"
  },
  {
    "id": "mul-059",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 7 ＝ ？",
    "choices": [
      {
        "value": 56,
        "label": "56"
      },
      {
        "value": 49,
        "label": "49"
      }
    ],
    "correctValue": 56,
    "explanation": "8×7＝56です。"
  },
  {
    "id": "mul-060",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 8 ＝ ？",
    "choices": [
      {
        "value": 64,
        "label": "64"
      },
      {
        "value": 72,
        "label": "72"
      }
    ],
    "correctValue": 64,
    "explanation": "8×8＝64です。"
  },
  {
    "id": "mul-061",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "12 × 4 ＝ ？",
    "choices": [
      {
        "value": 48,
        "label": "48"
      },
      {
        "value": 36,
        "label": "36"
      }
    ],
    "correctValue": 48,
    "explanation": "12×4＝48です。"
  },
  {
    "id": "mul-062",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "14 × 3 ＝ ？",
    "choices": [
      {
        "value": 42,
        "label": "42"
      },
      {
        "value": 45,
        "label": "45"
      }
    ],
    "correctValue": 42,
    "explanation": "14×3＝42です。"
  },
  {
    "id": "mul-063",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "16 × 5 ＝ ？",
    "choices": [
      {
        "value": 80,
        "label": "80"
      },
      {
        "value": 64,
        "label": "64"
      }
    ],
    "correctValue": 80,
    "explanation": "16×5＝80です。"
  },
  {
    "id": "mul-064",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "23 × 3 ＝ ？",
    "choices": [
      {
        "value": 69,
        "label": "69"
      },
      {
        "value": 72,
        "label": "72"
      }
    ],
    "correctValue": 69,
    "explanation": "23×3＝69です。"
  },
  {
    "id": "mul-065",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "24 × 4 ＝ ？",
    "choices": [
      {
        "value": 96,
        "label": "96"
      },
      {
        "value": 72,
        "label": "72"
      }
    ],
    "correctValue": 96,
    "explanation": "24×4＝96です。"
  },
  {
    "id": "mul-066",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "32 × 3 ＝ ？",
    "choices": [
      {
        "value": 96,
        "label": "96"
      },
      {
        "value": 99,
        "label": "99"
      }
    ],
    "correctValue": 96,
    "explanation": "32×3＝96です。"
  },
  {
    "id": "mul-067",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "18 × 6 ＝ ？",
    "choices": [
      {
        "value": 108,
        "label": "108"
      },
      {
        "value": 90,
        "label": "90"
      }
    ],
    "correctValue": 108,
    "explanation": "18×6＝108です。"
  },
  {
    "id": "mul-068",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "27 × 3 ＝ ？",
    "choices": [
      {
        "value": 81,
        "label": "81"
      },
      {
        "value": 84,
        "label": "84"
      }
    ],
    "correctValue": 81,
    "explanation": "27×3＝81です。"
  },
  {
    "id": "mul-069",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "35 × 4 ＝ ？",
    "choices": [
      {
        "value": 140,
        "label": "140"
      },
      {
        "value": 105,
        "label": "105"
      }
    ],
    "correctValue": 140,
    "explanation": "35×4＝140です。"
  },
  {
    "id": "mul-070",
    "subject": "算数",
    "grade": 2,
    "topic": "かけ算",
    "prompt": "42 × 5 ＝ ？",
    "choices": [
      {
        "value": 210,
        "label": "210"
      },
      {
        "value": 215,
        "label": "215"
      }
    ],
    "correctValue": 210,
    "explanation": "42×5＝210です。"
  },
  {
    "id": "mul-071",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "6 × 12 ＝ ？",
    "choices": [
      {
        "value": 72,
        "label": "72"
      },
      {
        "value": 66,
        "label": "66"
      }
    ],
    "correctValue": 72,
    "explanation": "6×12＝72です。"
  },
  {
    "id": "mul-072",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "7 × 14 ＝ ？",
    "choices": [
      {
        "value": 98,
        "label": "98"
      },
      {
        "value": 112,
        "label": "112"
      }
    ],
    "correctValue": 98,
    "explanation": "7×14＝98です。"
  },
  {
    "id": "mul-073",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "8 × 15 ＝ ？",
    "choices": [
      {
        "value": 120,
        "label": "120"
      },
      {
        "value": 112,
        "label": "112"
      }
    ],
    "correctValue": 120,
    "explanation": "8×15＝120です。"
  },
  {
    "id": "mul-074",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "25 × 4 ＝ ？",
    "choices": [
      {
        "value": 100,
        "label": "100"
      },
      {
        "value": 104,
        "label": "104"
      }
    ],
    "correctValue": 100,
    "explanation": "25×4＝100です。"
  },
  {
    "id": "mul-075",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "125 × 4 ＝ ？",
    "choices": [
      {
        "value": 500,
        "label": "500"
      },
      {
        "value": 375,
        "label": "375"
      }
    ],
    "correctValue": 500,
    "explanation": "125×4＝500です。"
  },
  {
    "id": "mul-076",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "15 × 6 ＝ ？",
    "choices": [
      {
        "value": 90,
        "label": "90"
      },
      {
        "value": 96,
        "label": "96"
      }
    ],
    "correctValue": 90,
    "explanation": "15×6＝90です。"
  },
  {
    "id": "mul-077",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "19 × 5 ＝ ？",
    "choices": [
      {
        "value": 95,
        "label": "95"
      },
      {
        "value": 76,
        "label": "76"
      }
    ],
    "correctValue": 95,
    "explanation": "19×5＝95です。"
  },
  {
    "id": "mul-078",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "22 × 4 ＝ ？",
    "choices": [
      {
        "value": 88,
        "label": "88"
      },
      {
        "value": 92,
        "label": "92"
      }
    ],
    "correctValue": 88,
    "explanation": "22×4＝88です。"
  },
  {
    "id": "mul-079",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "34 × 3 ＝ ？",
    "choices": [
      {
        "value": 102,
        "label": "102"
      },
      {
        "value": 68,
        "label": "68"
      }
    ],
    "correctValue": 102,
    "explanation": "34×3＝102です。"
  },
  {
    "id": "mul-080",
    "subject": "算数",
    "grade": 3,
    "topic": "かけ算",
    "prompt": "48 × 2 ＝ ？",
    "choices": [
      {
        "value": 96,
        "label": "96"
      },
      {
        "value": 98,
        "label": "98"
      }
    ],
    "correctValue": 96,
    "explanation": "48×2＝96です。"
  },
  {
    "id": "calc-006",
    "subject": "算数",
    "grade": 1,
    "topic": "ひき算",
    "prompt": "120 − 45 ＝ ？",
    "choices": [
      {
        "value": 75,
        "label": "75"
      },
      {
        "value": 85,
        "label": "85"
      }
    ],
    "correctValue": 75,
    "explanation": "120−45＝75です。"
  },
  {
    "id": "calc-007",
    "subject": "算数",
    "grade": 2,
    "topic": "たし算",
    "prompt": "245 ＋ 320 ＝ ？",
    "choices": [
      {
        "value": 565,
        "label": "565"
      },
      {
        "value": 555,
        "label": "555"
      }
    ],
    "correctValue": 565,
    "explanation": "245＋320＝565です。"
  },
  {
    "id": "calc-008",
    "subject": "算数",
    "grade": 2,
    "topic": "ひき算",
    "prompt": "700 − 265 ＝ ？",
    "choices": [
      {
        "value": 435,
        "label": "435"
      },
      {
        "value": 445,
        "label": "445"
      }
    ],
    "correctValue": 435,
    "explanation": "700−265＝435です。"
  },
  {
    "id": "calc-009",
    "subject": "算数",
    "grade": 2,
    "topic": "たし算",
    "prompt": "38 ＋ 46 ＝ ？",
    "choices": [
      {
        "value": 84,
        "label": "84"
      },
      {
        "value": 74,
        "label": "74"
      }
    ],
    "correctValue": 84,
    "explanation": "38＋46＝84です。"
  },
  {
    "id": "calc-010",
    "subject": "算数",
    "grade": 2,
    "topic": "ひき算",
    "prompt": "92 − 37 ＝ ？",
    "choices": [
      {
        "value": 55,
        "label": "55"
      },
      {
        "value": 65,
        "label": "65"
      }
    ],
    "correctValue": 55,
    "explanation": "92−37＝55です。"
  },
  {
    "id": "calc-011",
    "subject": "算数",
    "grade": 2,
    "topic": "たし算",
    "prompt": "408 ＋ 126 ＝ ？",
    "choices": [
      {
        "value": 534,
        "label": "534"
      },
      {
        "value": 544,
        "label": "544"
      }
    ],
    "correctValue": 534,
    "explanation": "408＋126＝534です。"
  },
  {
    "id": "calc-012",
    "subject": "算数",
    "grade": 2,
    "topic": "ひき算",
    "prompt": "631 − 204 ＝ ？",
    "choices": [
      {
        "value": 427,
        "label": "427"
      },
      {
        "value": 417,
        "label": "417"
      }
    ],
    "correctValue": 427,
    "explanation": "631−204＝427です。"
  },
  {
    "id": "calc-013",
    "subject": "算数",
    "grade": 2,
    "topic": "たし算",
    "prompt": "175 ＋ 225 ＝ ？",
    "choices": [
      {
        "value": 400,
        "label": "400"
      },
      {
        "value": 390,
        "label": "390"
      }
    ],
    "correctValue": 400,
    "explanation": "175＋225＝400です。"
  },
  {
    "id": "calc-014",
    "subject": "算数",
    "grade": 3,
    "topic": "ひき算",
    "prompt": "1000 − 375 ＝ ？",
    "choices": [
      {
        "value": 625,
        "label": "625"
      },
      {
        "value": 635,
        "label": "635"
      }
    ],
    "correctValue": 625,
    "explanation": "1000−375＝625です。"
  },
  {
    "id": "calc-015",
    "subject": "算数",
    "grade": 3,
    "topic": "たし算",
    "prompt": "59 ＋ 68 ＝ ？",
    "choices": [
      {
        "value": 127,
        "label": "127"
      },
      {
        "value": 117,
        "label": "117"
      }
    ],
    "correctValue": 127,
    "explanation": "59＋68＝127です。"
  },
  {
    "id": "calc-016",
    "subject": "算数",
    "grade": 3,
    "topic": "ひき算",
    "prompt": "250 − 86 ＝ ？",
    "choices": [
      {
        "value": 164,
        "label": "164"
      },
      {
        "value": 154,
        "label": "154"
      }
    ],
    "correctValue": 164,
    "explanation": "250−86＝164です。"
  },
  {
    "id": "calc-017",
    "subject": "算数",
    "grade": 3,
    "topic": "たし算",
    "prompt": "324 ＋ 199 ＝ ？",
    "choices": [
      {
        "value": 523,
        "label": "523"
      },
      {
        "value": 513,
        "label": "513"
      }
    ],
    "correctValue": 523,
    "explanation": "324＋199＝523です。"
  },
  {
    "id": "calc-018",
    "subject": "算数",
    "grade": 3,
    "topic": "ひき算",
    "prompt": "805 − 467 ＝ ？",
    "choices": [
      {
        "value": 338,
        "label": "338"
      },
      {
        "value": 348,
        "label": "348"
      }
    ],
    "correctValue": 338,
    "explanation": "805−467＝338です。"
  },
  {
    "id": "calc-019",
    "subject": "算数",
    "grade": 3,
    "topic": "たし算",
    "prompt": "46 ＋ 57 ＝ ？",
    "choices": [
      {
        "value": 103,
        "label": "103"
      },
      {
        "value": 93,
        "label": "93"
      }
    ],
    "correctValue": 103,
    "explanation": "46＋57＝103です。"
  },
  {
    "id": "calc-020",
    "subject": "算数",
    "grade": 3,
    "topic": "ひき算",
    "prompt": "420 − 185 ＝ ？",
    "choices": [
      {
        "value": 235,
        "label": "235"
      },
      {
        "value": 245,
        "label": "245"
      }
    ],
    "correctValue": 235,
    "explanation": "420−185＝235です。"
  },
  {
    "id": "div-1",
    "subject": "算数",
    "grade": 2,
    "topic": "わり算",
    "prompt": "42 ÷ 6 ＝ ？",
    "choices": [
      {
        "value": 7,
        "label": "7"
      },
      {
        "value": 8,
        "label": "8"
      }
    ],
    "correctValue": 7,
    "explanation": "6×7＝42なので、42÷6＝7です。"
  },
  {
    "id": "div-2",
    "subject": "算数",
    "grade": 2,
    "topic": "わり算",
    "prompt": "72 ÷ 8 ＝ ？",
    "choices": [
      {
        "value": 9,
        "label": "9"
      },
      {
        "value": 8,
        "label": "8"
      }
    ],
    "correctValue": 9,
    "explanation": "8×9＝72なので、72÷8＝9です。"
  },
  {
    "id": "div-3",
    "subject": "算数",
    "grade": 3,
    "topic": "わり算",
    "prompt": "63 ÷ 7 ＝ ？",
    "choices": [
      {
        "value": 9,
        "label": "9"
      },
      {
        "value": 8,
        "label": "8"
      }
    ],
    "correctValue": 9,
    "explanation": "7×9＝63なので、63÷7＝9です。"
  },
  {
    "id": "div-4",
    "subject": "算数",
    "grade": 3,
    "topic": "わり算",
    "prompt": "96 ÷ 12 ＝ ？",
    "choices": [
      {
        "value": 8,
        "label": "8"
      },
      {
        "value": 7,
        "label": "7"
      }
    ],
    "correctValue": 8,
    "explanation": "12×8＝96なので、96÷12＝8です。"
  },
  {
    "id": "div-5",
    "subject": "算数",
    "grade": 3,
    "topic": "わり算",
    "prompt": "144 ÷ 12 ＝ ？",
    "choices": [
      {
        "value": 12,
        "label": "12"
      },
      {
        "value": 11,
        "label": "11"
      }
    ],
    "correctValue": 12,
    "explanation": "12×12＝144なので、144÷12＝12です。"
  },
  {
    "id": "kanji-001",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「住所」の読み方は？",
    "choices": [
      {
        "value": "じゅうしょ",
        "label": "じゅうしょ"
      },
      {
        "value": "じゅうじょ",
        "label": "じゅうじょ"
      }
    ],
    "correctValue": "じゅうしょ",
    "explanation": "「住所」は「じゅうしょ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-002",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「道路」の読み方は？",
    "choices": [
      {
        "value": "どうろ",
        "label": "どうろ"
      },
      {
        "value": "とうろ",
        "label": "とうろ"
      }
    ],
    "correctValue": "どうろ",
    "explanation": "「道路」は「どうろ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-003",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「信号」の読み方は？",
    "choices": [
      {
        "value": "しんごう",
        "label": "しんごう"
      },
      {
        "value": "しんこう",
        "label": "しんこう"
      }
    ],
    "correctValue": "しんごう",
    "explanation": "「信号」は「しんごう」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-004",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「時計」の読み方は？",
    "choices": [
      {
        "value": "とけい",
        "label": "とけい"
      },
      {
        "value": "とっけい",
        "label": "とっけい"
      }
    ],
    "correctValue": "とけい",
    "explanation": "「時計」は「とけい」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-005",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「毎日」の読み方は？",
    "choices": [
      {
        "value": "まいにち",
        "label": "まいにち"
      },
      {
        "value": "まいじつ",
        "label": "まいじつ"
      }
    ],
    "correctValue": "まいにち",
    "explanation": "「毎日」は「まいにち」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-006",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・学校",
    "prompt": "「教室」の読み方は？",
    "choices": [
      {
        "value": "きょうしつ",
        "label": "きょうしつ"
      },
      {
        "value": "きょうじつ",
        "label": "きょうじつ"
      }
    ],
    "correctValue": "きょうしつ",
    "explanation": "「教室」は「きょうしつ」と読みます。学校に関係する言葉です。"
  },
  {
    "id": "kanji-007",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・学校",
    "prompt": "「宿題」の読み方は？",
    "choices": [
      {
        "value": "しゅくだい",
        "label": "しゅくだい"
      },
      {
        "value": "しゅくたい",
        "label": "しゅくたい"
      }
    ],
    "correctValue": "しゅくだい",
    "explanation": "「宿題」は「しゅくだい」と読みます。学校に関係する言葉です。"
  },
  {
    "id": "kanji-008",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「食事」の読み方は？",
    "choices": [
      {
        "value": "しょくじ",
        "label": "しょくじ"
      },
      {
        "value": "しょくし",
        "label": "しょくし"
      }
    ],
    "correctValue": "しょくじ",
    "explanation": "「食事」は「しょくじ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-009",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「買物」の読み方は？",
    "choices": [
      {
        "value": "かいもの",
        "label": "かいもの"
      },
      {
        "value": "ばいもの",
        "label": "ばいもの"
      }
    ],
    "correctValue": "かいもの",
    "explanation": "「買物」は「かいもの」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-010",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「入口」の読み方は？",
    "choices": [
      {
        "value": "いりぐち",
        "label": "いりぐち"
      },
      {
        "value": "いりくち",
        "label": "いりくち"
      }
    ],
    "correctValue": "いりぐち",
    "explanation": "「入口」は「いりぐち」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-011",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「出口」の読み方は？",
    "choices": [
      {
        "value": "でぐち",
        "label": "でぐち"
      },
      {
        "value": "でくち",
        "label": "でくち"
      }
    ],
    "correctValue": "でぐち",
    "explanation": "「出口」は「でぐち」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-012",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「駅前」の読み方は？",
    "choices": [
      {
        "value": "えきまえ",
        "label": "えきまえ"
      },
      {
        "value": "えきぜん",
        "label": "えきぜん"
      }
    ],
    "correctValue": "えきまえ",
    "explanation": "「駅前」は「えきまえ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-013",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「電気」の読み方は？",
    "choices": [
      {
        "value": "でんき",
        "label": "でんき"
      },
      {
        "value": "でんぎ",
        "label": "でんぎ"
      }
    ],
    "correctValue": "でんき",
    "explanation": "「電気」は「でんき」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-014",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「水道」の読み方は？",
    "choices": [
      {
        "value": "すいどう",
        "label": "すいどう"
      },
      {
        "value": "みずみち",
        "label": "みずみち"
      }
    ],
    "correctValue": "すいどう",
    "explanation": "「水道」は「すいどう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-015",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「台所」の読み方は？",
    "choices": [
      {
        "value": "だいどころ",
        "label": "だいどころ"
      },
      {
        "value": "だいしょ",
        "label": "だいしょ"
      }
    ],
    "correctValue": "だいどころ",
    "explanation": "「台所」は「だいどころ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-016",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「天気」の読み方は？",
    "choices": [
      {
        "value": "てんき",
        "label": "てんき"
      },
      {
        "value": "てんぎ",
        "label": "てんぎ"
      }
    ],
    "correctValue": "てんき",
    "explanation": "「天気」は「てんき」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-017",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「家族」の読み方は？",
    "choices": [
      {
        "value": "かぞく",
        "label": "かぞく"
      },
      {
        "value": "かそく",
        "label": "かそく"
      }
    ],
    "correctValue": "かぞく",
    "explanation": "「家族」は「かぞく」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-018",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「自転車」の読み方は？",
    "choices": [
      {
        "value": "じてんしゃ",
        "label": "じてんしゃ"
      },
      {
        "value": "じどうしゃ",
        "label": "じどうしゃ"
      }
    ],
    "correctValue": "じてんしゃ",
    "explanation": "「自転車」は「じてんしゃ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-019",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「写真」の読み方は？",
    "choices": [
      {
        "value": "しゃしん",
        "label": "しゃしん"
      },
      {
        "value": "しゃじん",
        "label": "しゃじん"
      }
    ],
    "correctValue": "しゃしん",
    "explanation": "「写真」は「しゃしん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-020",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「名前」の読み方は？",
    "choices": [
      {
        "value": "なまえ",
        "label": "なまえ"
      },
      {
        "value": "めいぜん",
        "label": "めいぜん"
      }
    ],
    "correctValue": "なまえ",
    "explanation": "「名前」は「なまえ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-021",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・学校",
    "prompt": "「時間割」の読み方は？",
    "choices": [
      {
        "value": "じかんわり",
        "label": "じかんわり"
      },
      {
        "value": "じかんばり",
        "label": "じかんばり"
      }
    ],
    "correctValue": "じかんわり",
    "explanation": "「時間割」は「じかんわり」と読みます。学校に関係する言葉です。"
  },
  {
    "id": "kanji-022",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「持物」の読み方は？",
    "choices": [
      {
        "value": "もちもの",
        "label": "もちもの"
      },
      {
        "value": "じぶつ",
        "label": "じぶつ"
      }
    ],
    "correctValue": "もちもの",
    "explanation": "「持物」は「もちもの」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-023",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「右折」の読み方は？",
    "choices": [
      {
        "value": "うせつ",
        "label": "うせつ"
      },
      {
        "value": "みぎおり",
        "label": "みぎおり"
      }
    ],
    "correctValue": "うせつ",
    "explanation": "「右折」は「うせつ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-024",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・交通",
    "prompt": "「左折」の読み方は？",
    "choices": [
      {
        "value": "させつ",
        "label": "させつ"
      },
      {
        "value": "ひだりおり",
        "label": "ひだりおり"
      }
    ],
    "correctValue": "させつ",
    "explanation": "「左折」は「させつ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-025",
    "subject": "国語",
    "grade": 1,
    "topic": "漢字の読み・生活",
    "prompt": "「休日」の読み方は？",
    "choices": [
      {
        "value": "きゅうじつ",
        "label": "きゅうじつ"
      },
      {
        "value": "きゅうにち",
        "label": "きゅうにち"
      }
    ],
    "correctValue": "きゅうじつ",
    "explanation": "「休日」は「きゅうじつ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-026",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・交通",
    "prompt": "「横断歩道」の読み方は？",
    "choices": [
      {
        "value": "おうだんほどう",
        "label": "おうだんほどう"
      },
      {
        "value": "おうたんほどう",
        "label": "おうたんほどう"
      }
    ],
    "correctValue": "おうだんほどう",
    "explanation": "「横断歩道」は「おうだんほどう」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-027",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・交通",
    "prompt": "「交通安全」の読み方は？",
    "choices": [
      {
        "value": "こうつうあんぜん",
        "label": "こうつうあんぜん"
      },
      {
        "value": "こうつうあんしん",
        "label": "こうつうあんしん"
      }
    ],
    "correctValue": "こうつうあんぜん",
    "explanation": "「交通安全」は「こうつうあんぜん」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-028",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「消火器」の読み方は？",
    "choices": [
      {
        "value": "しょうかき",
        "label": "しょうかき"
      },
      {
        "value": "しょうひき",
        "label": "しょうひき"
      }
    ],
    "correctValue": "しょうかき",
    "explanation": "「消火器」は「しょうかき」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-029",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「非常口」の読み方は？",
    "choices": [
      {
        "value": "ひじょうぐち",
        "label": "ひじょうぐち"
      },
      {
        "value": "ひじょうこう",
        "label": "ひじょうこう"
      }
    ],
    "correctValue": "ひじょうぐち",
    "explanation": "「非常口」は「ひじょうぐち」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-030",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「避難所」の読み方は？",
    "choices": [
      {
        "value": "ひなんじょ",
        "label": "ひなんじょ"
      },
      {
        "value": "ひなんしょ",
        "label": "ひなんしょ"
      }
    ],
    "correctValue": "ひなんじょ",
    "explanation": "「避難所」は「ひなんじょ」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-031",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「地震情報」の読み方は？",
    "choices": [
      {
        "value": "じしんじょうほう",
        "label": "じしんじょうほう"
      },
      {
        "value": "じしんせいほう",
        "label": "じしんせいほう"
      }
    ],
    "correctValue": "じしんじょうほう",
    "explanation": "「地震情報」は「じしんじょうほう」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-032",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「気温」の読み方は？",
    "choices": [
      {
        "value": "きおん",
        "label": "きおん"
      },
      {
        "value": "きとう",
        "label": "きとう"
      }
    ],
    "correctValue": "きおん",
    "explanation": "「気温」は「きおん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-033",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「湿度」の読み方は？",
    "choices": [
      {
        "value": "しつど",
        "label": "しつど"
      },
      {
        "value": "しつと",
        "label": "しつと"
      }
    ],
    "correctValue": "しつど",
    "explanation": "「湿度」は「しつど」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-034",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「賞味期限」の読み方は？",
    "choices": [
      {
        "value": "しょうみきげん",
        "label": "しょうみきげん"
      },
      {
        "value": "しょうみきかん",
        "label": "しょうみきかん"
      }
    ],
    "correctValue": "しょうみきげん",
    "explanation": "「賞味期限」は「しょうみきげん」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-035",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「消費期限」の読み方は？",
    "choices": [
      {
        "value": "しょうひきげん",
        "label": "しょうひきげん"
      },
      {
        "value": "しょうひきかん",
        "label": "しょうひきかん"
      }
    ],
    "correctValue": "しょうひきげん",
    "explanation": "「消費期限」は「しょうひきげん」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-036",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「料金表」の読み方は？",
    "choices": [
      {
        "value": "りょうきんひょう",
        "label": "りょうきんひょう"
      },
      {
        "value": "りょうきんびょう",
        "label": "りょうきんびょう"
      }
    ],
    "correctValue": "りょうきんひょう",
    "explanation": "「料金表」は「りょうきんひょう」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-037",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「現金払い」の読み方は？",
    "choices": [
      {
        "value": "げんきんばらい",
        "label": "げんきんばらい"
      },
      {
        "value": "げんきんはらい",
        "label": "げんきんはらい"
      }
    ],
    "correctValue": "げんきんばらい",
    "explanation": "「現金払い」は「げんきんばらい」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-038",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「電子決済」の読み方は？",
    "choices": [
      {
        "value": "でんしけっさい",
        "label": "でんしけっさい"
      },
      {
        "value": "でんしけつさい",
        "label": "でんしけつさい"
      }
    ],
    "correctValue": "でんしけっさい",
    "explanation": "「電子決済」は「でんしけっさい」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-039",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・買い物",
    "prompt": "「領収書」の読み方は？",
    "choices": [
      {
        "value": "りょうしゅうしょ",
        "label": "りょうしゅうしょ"
      },
      {
        "value": "りょうしゅうしょう",
        "label": "りょうしゅうしょう"
      }
    ],
    "correctValue": "りょうしゅうしょ",
    "explanation": "「領収書」は「りょうしゅうしょ」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-040",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「予約確認」の読み方は？",
    "choices": [
      {
        "value": "よやくかくにん",
        "label": "よやくかくにん"
      },
      {
        "value": "よやくがくにん",
        "label": "よやくがくにん"
      }
    ],
    "correctValue": "よやくかくにん",
    "explanation": "「予約確認」は「よやくかくにん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-041",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「受付時間」の読み方は？",
    "choices": [
      {
        "value": "うけつけじかん",
        "label": "うけつけじかん"
      },
      {
        "value": "うけとりじかん",
        "label": "うけとりじかん"
      }
    ],
    "correctValue": "うけつけじかん",
    "explanation": "「受付時間」は「うけつけじかん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-042",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・健康",
    "prompt": "「診察券」の読み方は？",
    "choices": [
      {
        "value": "しんさつけん",
        "label": "しんさつけん"
      },
      {
        "value": "しんさつかん",
        "label": "しんさつかん"
      }
    ],
    "correctValue": "しんさつけん",
    "explanation": "「診察券」は「しんさつけん」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-043",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・健康",
    "prompt": "「処方箋」の読み方は？",
    "choices": [
      {
        "value": "しょほうせん",
        "label": "しょほうせん"
      },
      {
        "value": "しょほうせつ",
        "label": "しょほうせつ"
      }
    ],
    "correctValue": "しょほうせん",
    "explanation": "「処方箋」は「しょほうせん」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-044",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・健康",
    "prompt": "「薬局」の読み方は？",
    "choices": [
      {
        "value": "やっきょく",
        "label": "やっきょく"
      },
      {
        "value": "やくきょく",
        "label": "やくきょく"
      }
    ],
    "correctValue": "やっきょく",
    "explanation": "「薬局」は「やっきょく」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-045",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「営業時間」の読み方は？",
    "choices": [
      {
        "value": "えいぎょうじかん",
        "label": "えいぎょうじかん"
      },
      {
        "value": "えいぎょうにち",
        "label": "えいぎょうにち"
      }
    ],
    "correctValue": "えいぎょうじかん",
    "explanation": "「営業時間」は「えいぎょうじかん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-046",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・交通",
    "prompt": "「乗換案内」の読み方は？",
    "choices": [
      {
        "value": "のりかえあんない",
        "label": "のりかえあんない"
      },
      {
        "value": "のりかえあんねい",
        "label": "のりかえあんねい"
      }
    ],
    "correctValue": "のりかえあんない",
    "explanation": "「乗換案内」は「のりかえあんない」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-047",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・交通",
    "prompt": "「発車時刻」の読み方は？",
    "choices": [
      {
        "value": "はっしゃじこく",
        "label": "はっしゃじこく"
      },
      {
        "value": "はつしゃじこく",
        "label": "はつしゃじこく"
      }
    ],
    "correctValue": "はっしゃじこく",
    "explanation": "「発車時刻」は「はっしゃじこく」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-048",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・交通",
    "prompt": "「到着予定」の読み方は？",
    "choices": [
      {
        "value": "とうちゃくよてい",
        "label": "とうちゃくよてい"
      },
      {
        "value": "とうちゃくよけい",
        "label": "とうちゃくよけい"
      }
    ],
    "correctValue": "とうちゃくよてい",
    "explanation": "「到着予定」は「とうちゃくよてい」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-049",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「使用方法」の読み方は？",
    "choices": [
      {
        "value": "しようほうほう",
        "label": "しようほうほう"
      },
      {
        "value": "しようぼうほう",
        "label": "しようぼうほう"
      }
    ],
    "correctValue": "しようほうほう",
    "explanation": "「使用方法」は「しようほうほう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-050",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「注意事項」の読み方は？",
    "choices": [
      {
        "value": "ちゅういじこう",
        "label": "ちゅういじこう"
      },
      {
        "value": "ちゅういじこうと",
        "label": "ちゅういじこうと"
      }
    ],
    "correctValue": "ちゅういじこう",
    "explanation": "「注意事項」は「ちゅういじこう」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-051",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・学校",
    "prompt": "「提出期限」の読み方は？",
    "choices": [
      {
        "value": "ていしゅつきげん",
        "label": "ていしゅつきげん"
      },
      {
        "value": "ていしゅつきかん",
        "label": "ていしゅつきかん"
      }
    ],
    "correctValue": "ていしゅつきげん",
    "explanation": "「提出期限」は「ていしゅつきげん」と読みます。学校に関係する言葉です。"
  },
  {
    "id": "kanji-052",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・学校",
    "prompt": "「連絡帳」の読み方は？",
    "choices": [
      {
        "value": "れんらくちょう",
        "label": "れんらくちょう"
      },
      {
        "value": "れんらくじょう",
        "label": "れんらくじょう"
      }
    ],
    "correctValue": "れんらくちょう",
    "explanation": "「連絡帳」は「れんらくちょう」と読みます。学校に関係する言葉です。"
  },
  {
    "id": "kanji-053",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・生活",
    "prompt": "「身分証明書」の読み方は？",
    "choices": [
      {
        "value": "みぶんしょうめいしょ",
        "label": "みぶんしょうめいしょ"
      },
      {
        "value": "みぶんしょうめいじょ",
        "label": "みぶんしょうめいじょ"
      }
    ],
    "correctValue": "みぶんしょうめいしょ",
    "explanation": "「身分証明書」は「みぶんしょうめいしょ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-054",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「個人情報」の読み方は？",
    "choices": [
      {
        "value": "こじんじょうほう",
        "label": "こじんじょうほう"
      },
      {
        "value": "こじんせいほう",
        "label": "こじんせいほう"
      }
    ],
    "correctValue": "こじんじょうほう",
    "explanation": "「個人情報」は「こじんじょうほう」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-055",
    "subject": "国語",
    "grade": 2,
    "topic": "漢字の読み・安全",
    "prompt": "「防犯対策」の読み方は？",
    "choices": [
      {
        "value": "ぼうはんたいさく",
        "label": "ぼうはんたいさく"
      },
      {
        "value": "ぼうばんたいさく",
        "label": "ぼうばんたいさく"
      }
    ],
    "correctValue": "ぼうはんたいさく",
    "explanation": "「防犯対策」は「ぼうはんたいさく」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-056",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「車両通行止め」の読み方は？",
    "choices": [
      {
        "value": "しゃりょうつうこうどめ",
        "label": "しゃりょうつうこうどめ"
      },
      {
        "value": "しゃりょうつうこうとめ",
        "label": "しゃりょうつうこうとめ"
      }
    ],
    "correctValue": "しゃりょうつうこうどめ",
    "explanation": "「車両通行止め」は「しゃりょうつうこうどめ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-057",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「一方通行」の読み方は？",
    "choices": [
      {
        "value": "いっぽうつうこう",
        "label": "いっぽうつうこう"
      },
      {
        "value": "いちほうつうこう",
        "label": "いちほうつうこう"
      }
    ],
    "correctValue": "いっぽうつうこう",
    "explanation": "「一方通行」は「いっぽうつうこう」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-058",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「徐行運転」の読み方は？",
    "choices": [
      {
        "value": "じょこううんてん",
        "label": "じょこううんてん"
      },
      {
        "value": "じょうこううんてん",
        "label": "じょうこううんてん"
      }
    ],
    "correctValue": "じょこううんてん",
    "explanation": "「徐行運転」は「じょこううんてん」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-059",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「優先道路」の読み方は？",
    "choices": [
      {
        "value": "ゆうせんどうろ",
        "label": "ゆうせんどうろ"
      },
      {
        "value": "ゆうぜんどうろ",
        "label": "ゆうぜんどうろ"
      }
    ],
    "correctValue": "ゆうせんどうろ",
    "explanation": "「優先道路」は「ゆうせんどうろ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-060",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「車間距離」の読み方は？",
    "choices": [
      {
        "value": "しゃかんきょり",
        "label": "しゃかんきょり"
      },
      {
        "value": "しゃかんきょうり",
        "label": "しゃかんきょうり"
      }
    ],
    "correctValue": "しゃかんきょり",
    "explanation": "「車間距離」は「しゃかんきょり」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-061",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「制限速度」の読み方は？",
    "choices": [
      {
        "value": "せいげんそくど",
        "label": "せいげんそくど"
      },
      {
        "value": "せいげんぞくど",
        "label": "せいげんぞくど"
      }
    ],
    "correctValue": "せいげんそくど",
    "explanation": "「制限速度」は「せいげんそくど」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-062",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「運転免許」の読み方は？",
    "choices": [
      {
        "value": "うんてんめんきょ",
        "label": "うんてんめんきょ"
      },
      {
        "value": "うんてんめんきょう",
        "label": "うんてんめんきょう"
      }
    ],
    "correctValue": "うんてんめんきょ",
    "explanation": "「運転免許」は「うんてんめんきょ」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-063",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「定期券」の読み方は？",
    "choices": [
      {
        "value": "ていきけん",
        "label": "ていきけん"
      },
      {
        "value": "ていきかん",
        "label": "ていきかん"
      }
    ],
    "correctValue": "ていきけん",
    "explanation": "「定期券」は「ていきけん」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-064",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「運行状況」の読み方は？",
    "choices": [
      {
        "value": "うんこうじょうきょう",
        "label": "うんこうじょうきょう"
      },
      {
        "value": "うんこうじょうこう",
        "label": "うんこうじょうこう"
      }
    ],
    "correctValue": "うんこうじょうきょう",
    "explanation": "「運行状況」は「うんこうじょうきょう」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-065",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・安全",
    "prompt": "「災害情報」の読み方は？",
    "choices": [
      {
        "value": "さいがいじょうほう",
        "label": "さいがいじょうほう"
      },
      {
        "value": "さいがいせいほう",
        "label": "さいがいせいほう"
      }
    ],
    "correctValue": "さいがいじょうほう",
    "explanation": "「災害情報」は「さいがいじょうほう」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-066",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・安全",
    "prompt": "「緊急連絡先」の読み方は？",
    "choices": [
      {
        "value": "きんきゅうれんらくさき",
        "label": "きんきゅうれんらくさき"
      },
      {
        "value": "きんきゅうれんらくせん",
        "label": "きんきゅうれんらくせん"
      }
    ],
    "correctValue": "きんきゅうれんらくさき",
    "explanation": "「緊急連絡先」は「きんきゅうれんらくさき」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-067",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・健康",
    "prompt": "「応急処置」の読み方は？",
    "choices": [
      {
        "value": "おうきゅうしょち",
        "label": "おうきゅうしょち"
      },
      {
        "value": "おうきゅうしょじ",
        "label": "おうきゅうしょじ"
      }
    ],
    "correctValue": "おうきゅうしょち",
    "explanation": "「応急処置」は「おうきゅうしょち」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-068",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・健康",
    "prompt": "「健康診断」の読み方は？",
    "choices": [
      {
        "value": "けんこうしんだん",
        "label": "けんこうしんだん"
      },
      {
        "value": "けんこうしんたん",
        "label": "けんこうしんたん"
      }
    ],
    "correctValue": "けんこうしんだん",
    "explanation": "「健康診断」は「けんこうしんだん」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-069",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・健康",
    "prompt": "「服用方法」の読み方は？",
    "choices": [
      {
        "value": "ふくようほうほう",
        "label": "ふくようほうほう"
      },
      {
        "value": "ふくようぼうほう",
        "label": "ふくようぼうほう"
      }
    ],
    "correctValue": "ふくようほうほう",
    "explanation": "「服用方法」は「ふくようほうほう」と読みます。健康に関係する言葉です。"
  },
  {
    "id": "kanji-070",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・買い物",
    "prompt": "「栄養成分」の読み方は？",
    "choices": [
      {
        "value": "えいようせいぶん",
        "label": "えいようせいぶん"
      },
      {
        "value": "えいようせいふん",
        "label": "えいようせいふん"
      }
    ],
    "correctValue": "えいようせいぶん",
    "explanation": "「栄養成分」は「えいようせいぶん」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-071",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・買い物",
    "prompt": "「原材料名」の読み方は？",
    "choices": [
      {
        "value": "げんざいりょうめい",
        "label": "げんざいりょうめい"
      },
      {
        "value": "げんざいりょうな",
        "label": "げんざいりょうな"
      }
    ],
    "correctValue": "げんざいりょうめい",
    "explanation": "「原材料名」は「げんざいりょうめい」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-072",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「保存方法」の読み方は？",
    "choices": [
      {
        "value": "ほぞんほうほう",
        "label": "ほぞんほうほう"
      },
      {
        "value": "ほぞんぼうほう",
        "label": "ほぞんぼうほう"
      }
    ],
    "correctValue": "ほぞんほうほう",
    "explanation": "「保存方法」は「ほぞんほうほう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-073",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・買い物",
    "prompt": "「保証期間」の読み方は？",
    "choices": [
      {
        "value": "ほしょうきかん",
        "label": "ほしょうきかん"
      },
      {
        "value": "ほしょうきげん",
        "label": "ほしょうきげん"
      }
    ],
    "correctValue": "ほしょうきかん",
    "explanation": "「保証期間」は「ほしょうきかん」と読みます。買い物に関係する言葉です。"
  },
  {
    "id": "kanji-074",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「取扱説明書」の読み方は？",
    "choices": [
      {
        "value": "とりあつかいせつめいしょ",
        "label": "とりあつかいせつめいしょ"
      },
      {
        "value": "とりあつかいせつめいじょ",
        "label": "とりあつかいせつめいじょ"
      }
    ],
    "correctValue": "とりあつかいせつめいしょ",
    "explanation": "「取扱説明書」は「とりあつかいせつめいしょ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-075",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「故障原因」の読み方は？",
    "choices": [
      {
        "value": "こしょうげんいん",
        "label": "こしょうげんいん"
      },
      {
        "value": "こしょうげんにん",
        "label": "こしょうげんにん"
      }
    ],
    "correctValue": "こしょうげんいん",
    "explanation": "「故障原因」は「こしょうげんいん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-076",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「修理受付」の読み方は？",
    "choices": [
      {
        "value": "しゅうりうけつけ",
        "label": "しゅうりうけつけ"
      },
      {
        "value": "しゅうりうけとり",
        "label": "しゅうりうけとり"
      }
    ],
    "correctValue": "しゅうりうけつけ",
    "explanation": "「修理受付」は「しゅうりうけつけ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-077",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「契約内容」の読み方は？",
    "choices": [
      {
        "value": "けいやくないよう",
        "label": "けいやくないよう"
      },
      {
        "value": "けいやくないよ",
        "label": "けいやくないよ"
      }
    ],
    "correctValue": "けいやくないよう",
    "explanation": "「契約内容」は「けいやくないよう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-078",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「解約手続き」の読み方は？",
    "choices": [
      {
        "value": "かいやくてつづき",
        "label": "かいやくてつづき"
      },
      {
        "value": "かいやくてつづけ",
        "label": "かいやくてつづけ"
      }
    ],
    "correctValue": "かいやくてつづき",
    "explanation": "「解約手続き」は「かいやくてつづき」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-079",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「利用規約」の読み方は？",
    "choices": [
      {
        "value": "りようきやく",
        "label": "りようきやく"
      },
      {
        "value": "りようきそく",
        "label": "りようきそく"
      }
    ],
    "correctValue": "りようきやく",
    "explanation": "「利用規約」は「りようきやく」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-080",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「通信料金」の読み方は？",
    "choices": [
      {
        "value": "つうしんりょうきん",
        "label": "つうしんりょうきん"
      },
      {
        "value": "つうしんりょうぎん",
        "label": "つうしんりょうぎん"
      }
    ],
    "correctValue": "つうしんりょうきん",
    "explanation": "「通信料金」は「つうしんりょうきん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-081",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・機器",
    "prompt": "「充電残量」の読み方は？",
    "choices": [
      {
        "value": "じゅうでんざんりょう",
        "label": "じゅうでんざんりょう"
      },
      {
        "value": "じゅうでんさんりょう",
        "label": "じゅうでんさんりょう"
      }
    ],
    "correctValue": "じゅうでんざんりょう",
    "explanation": "「充電残量」は「じゅうでんざんりょう」と読みます。機器に関係する言葉です。"
  },
  {
    "id": "kanji-082",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・機器",
    "prompt": "「電源確認」の読み方は？",
    "choices": [
      {
        "value": "でんげんかくにん",
        "label": "でんげんかくにん"
      },
      {
        "value": "でんげんがくにん",
        "label": "でんげんがくにん"
      }
    ],
    "correctValue": "でんげんかくにん",
    "explanation": "「電源確認」は「でんげんかくにん」と読みます。機器に関係する言葉です。"
  },
  {
    "id": "kanji-083",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・機器",
    "prompt": "「設定変更」の読み方は？",
    "choices": [
      {
        "value": "せっていへんこう",
        "label": "せっていへんこう"
      },
      {
        "value": "せっていへんごう",
        "label": "せっていへんごう"
      }
    ],
    "correctValue": "せっていへんこう",
    "explanation": "「設定変更」は「せっていへんこう」と読みます。機器に関係する言葉です。"
  },
  {
    "id": "kanji-084",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・機器",
    "prompt": "「利用者登録」の読み方は？",
    "choices": [
      {
        "value": "りようしゃとうろく",
        "label": "りようしゃとうろく"
      },
      {
        "value": "りようしゃとろく",
        "label": "りようしゃとろく"
      }
    ],
    "correctValue": "りようしゃとうろく",
    "explanation": "「利用者登録」は「りようしゃとうろく」と読みます。機器に関係する言葉です。"
  },
  {
    "id": "kanji-085",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・安全",
    "prompt": "「暗証番号」の読み方は？",
    "choices": [
      {
        "value": "あんしょうばんごう",
        "label": "あんしょうばんごう"
      },
      {
        "value": "あんじょうばんごう",
        "label": "あんじょうばんごう"
      }
    ],
    "correctValue": "あんしょうばんごう",
    "explanation": "「暗証番号」は「あんしょうばんごう」と読みます。安全に関係する言葉です。"
  },
  {
    "id": "kanji-086",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「本人確認」の読み方は？",
    "choices": [
      {
        "value": "ほんにんかくにん",
        "label": "ほんにんかくにん"
      },
      {
        "value": "ほんにんがくにん",
        "label": "ほんにんがくにん"
      }
    ],
    "correctValue": "ほんにんかくにん",
    "explanation": "「本人確認」は「ほんにんかくにん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-087",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「受付番号」の読み方は？",
    "choices": [
      {
        "value": "うけつけばんごう",
        "label": "うけつけばんごう"
      },
      {
        "value": "うけつけばんごうと",
        "label": "うけつけばんごうと"
      }
    ],
    "correctValue": "うけつけばんごう",
    "explanation": "「受付番号」は「うけつけばんごう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-088",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「申込書類」の読み方は？",
    "choices": [
      {
        "value": "もうしこみしょるい",
        "label": "もうしこみしょるい"
      },
      {
        "value": "もうしこみしょれい",
        "label": "もうしこみしょれい"
      }
    ],
    "correctValue": "もうしこみしょるい",
    "explanation": "「申込書類」は「もうしこみしょるい」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-089",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「記入欄」の読み方は？",
    "choices": [
      {
        "value": "きにゅうらん",
        "label": "きにゅうらん"
      },
      {
        "value": "きにゅうばん",
        "label": "きにゅうばん"
      }
    ],
    "correctValue": "きにゅうらん",
    "explanation": "「記入欄」は「きにゅうらん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-090",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「記入例」の読み方は？",
    "choices": [
      {
        "value": "きにゅうれい",
        "label": "きにゅうれい"
      },
      {
        "value": "きにゅうらい",
        "label": "きにゅうらい"
      }
    ],
    "correctValue": "きにゅうれい",
    "explanation": "「記入例」は「きにゅうれい」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-091",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「集合場所」の読み方は？",
    "choices": [
      {
        "value": "しゅうごうばしょ",
        "label": "しゅうごうばしょ"
      },
      {
        "value": "しゅうごうじょ",
        "label": "しゅうごうじょ"
      }
    ],
    "correctValue": "しゅうごうばしょ",
    "explanation": "「集合場所」は「しゅうごうばしょ」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-092",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「集合時刻」の読み方は？",
    "choices": [
      {
        "value": "しゅうごうじこく",
        "label": "しゅうごうじこく"
      },
      {
        "value": "しゅうごうじこう",
        "label": "しゅうごうじこう"
      }
    ],
    "correctValue": "しゅうごうじこく",
    "explanation": "「集合時刻」は「しゅうごうじこく」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-093",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「休憩時間」の読み方は？",
    "choices": [
      {
        "value": "きゅうけいじかん",
        "label": "きゅうけいじかん"
      },
      {
        "value": "きゅうけいにち",
        "label": "きゅうけいにち"
      }
    ],
    "correctValue": "きゅうけいじかん",
    "explanation": "「休憩時間」は「きゅうけいじかん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-094",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「作業手順」の読み方は？",
    "choices": [
      {
        "value": "さぎょうてじゅん",
        "label": "さぎょうてじゅん"
      },
      {
        "value": "さぎょうてじゅんばん",
        "label": "さぎょうてじゅんばん"
      }
    ],
    "correctValue": "さぎょうてじゅん",
    "explanation": "「作業手順」は「さぎょうてじゅん」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-095",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「確認事項」の読み方は？",
    "choices": [
      {
        "value": "かくにんじこう",
        "label": "かくにんじこう"
      },
      {
        "value": "かくにんじこうと",
        "label": "かくにんじこうと"
      }
    ],
    "correctValue": "かくにんじこう",
    "explanation": "「確認事項」は「かくにんじこう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-096",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「予定変更」の読み方は？",
    "choices": [
      {
        "value": "よていへんこう",
        "label": "よていへんこう"
      },
      {
        "value": "よていへんごう",
        "label": "よていへんごう"
      }
    ],
    "correctValue": "よていへんこう",
    "explanation": "「予定変更」は「よていへんこう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-097",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「天候不良」の読み方は？",
    "choices": [
      {
        "value": "てんこうふりょう",
        "label": "てんこうふりょう"
      },
      {
        "value": "てんこうぶりょう",
        "label": "てんこうぶりょう"
      }
    ],
    "correctValue": "てんこうふりょう",
    "explanation": "「天候不良」は「てんこうふりょう」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-098",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・交通",
    "prompt": "「混雑状況」の読み方は？",
    "choices": [
      {
        "value": "こんざつじょうきょう",
        "label": "こんざつじょうきょう"
      },
      {
        "value": "こんざつじょうこう",
        "label": "こんざつじょうこう"
      }
    ],
    "correctValue": "こんざつじょうきょう",
    "explanation": "「混雑状況」は「こんざつじょうきょう」と読みます。交通に関係する言葉です。"
  },
  {
    "id": "kanji-099",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「営業時間外」の読み方は？",
    "choices": [
      {
        "value": "えいぎょうじかんがい",
        "label": "えいぎょうじかんがい"
      },
      {
        "value": "えいぎょうじかんそと",
        "label": "えいぎょうじかんそと"
      }
    ],
    "correctValue": "えいぎょうじかんがい",
    "explanation": "「営業時間外」は「えいぎょうじかんがい」と読みます。生活に関係する言葉です。"
  },
  {
    "id": "kanji-100",
    "subject": "国語",
    "grade": 3,
    "topic": "漢字の読み・生活",
    "prompt": "「問い合わせ先」の読み方は？",
    "choices": [
      {
        "value": "といあわせさき",
        "label": "といあわせさき"
      },
      {
        "value": "といあわせせん",
        "label": "といあわせせん"
      }
    ],
    "correctValue": "といあわせさき",
    "explanation": "「問い合わせ先」は「といあわせさき」と読みます。生活に関係する言葉です。"
  }
]
};
