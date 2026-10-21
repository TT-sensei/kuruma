/* 国語・算数の問題データ。対象は小学1〜3年生程度。選択肢は基本2つです。
   追加するときは id / subject / grade / topic / prompt / choices / correctValue / explanation を設定します。
   国語の value は文字列、算数の value は数値でも使えます。 */
window.GAME_DATA = {
  game: { questionsPerRace: 8, questionDelayMs: 650, resultDelayMs: 1900 },
  questions: [
    { id:"m1-01", subject:"算数", grade:1, topic:"たし算", prompt:"3 ＋ 1 ＝ ？", choices:[{value:3,label:"3"},{value:4,label:"4"}], correctValue:4, explanation:"3に1をたすと、4です。" },
    { id:"m1-02", subject:"算数", grade:1, topic:"ひき算", prompt:"5 − 2 ＝ ？", choices:[{value:2,label:"2"},{value:3,label:"3"}], correctValue:3, explanation:"5から2をひくと、3です。" },
    { id:"m1-03", subject:"算数", grade:1, topic:"たし算", prompt:"4 ＋ 4 ＝ ？", choices:[{value:8,label:"8"},{value:7,label:"7"}], correctValue:8, explanation:"4に4をたすと、8です。" },
    { id:"m1-04", subject:"算数", grade:1, topic:"ひき算", prompt:"9 − 6 ＝ ？", choices:[{value:3,label:"3"},{value:4,label:"4"}], correctValue:3, explanation:"9から6をひくと、3です。" },
    { id:"m1-05", subject:"算数", grade:1, topic:"たし算", prompt:"6 ＋ 2 ＝ ？", choices:[{value:8,label:"8"},{value:9,label:"9"}], correctValue:8, explanation:"6に2をたすと、8です。" },
    { id:"m1-06", subject:"算数", grade:1, topic:"ひき算", prompt:"10 − 3 ＝ ？", choices:[{value:6,label:"6"},{value:7,label:"7"}], correctValue:7, explanation:"10から3をひくと、7です。" },
    { id:"m1-07", subject:"算数", grade:1, topic:"かず", prompt:"7より 2 おおきい かずは？", choices:[{value:8,label:"8"},{value:9,label:"9"}], correctValue:9, explanation:"7の次が8、その次が9です。" },
    { id:"m1-08", subject:"算数", grade:1, topic:"かず", prompt:"10は いくつと いくつ？ 6 と あわせると", choices:[{value:4,label:"4"},{value:5,label:"5"}], correctValue:4, explanation:"6と4を合わせると10です。" },

    { id:"m2-01", subject:"算数", grade:2, topic:"たし算", prompt:"24 ＋ 13 ＝ ？", choices:[{value:36,label:"36"},{value:37,label:"37"}], correctValue:37, explanation:"20＋10＝30、4＋3＝7。合わせて37です。" },
    { id:"m2-02", subject:"算数", grade:2, topic:"ひき算", prompt:"52 − 20 ＝ ？", choices:[{value:32,label:"32"},{value:30,label:"30"}], correctValue:32, explanation:"十のくらいから2十をひくと、32です。" },
    { id:"m2-03", subject:"算数", grade:2, topic:"九九", prompt:"6 × 3 ＝ ？", choices:[{value:18,label:"18"},{value:16,label:"16"}], correctValue:18, explanation:"6を3回たすと、6＋6＋6＝18です。" },
    { id:"m2-04", subject:"算数", grade:2, topic:"九九", prompt:"車が5台。タイヤは1台に4こ。全部で何こ？", choices:[{value:20,label:"20"},{value:25,label:"25"}], correctValue:20, explanation:"4の5ばいは20です。" },
    { id:"m2-05", subject:"算数", grade:2, topic:"たし算", prompt:"36 ＋ 27 ＝ ？", choices:[{value:62,label:"62"},{value:63,label:"63"}], correctValue:63, explanation:"36＋20＝56、さらに7をたして63です。" },
    { id:"m2-06", subject:"算数", grade:2, topic:"ひき算", prompt:"45 − 18 ＝ ？", choices:[{value:27,label:"27"},{value:28,label:"28"}], correctValue:27, explanation:"45から10をひいて35、さらに8をひいて27です。" },
    { id:"m2-07", subject:"算数", grade:2, topic:"九九", prompt:"21 ÷ 3 ＝ ？", choices:[{value:6,label:"6"},{value:7,label:"7"}], correctValue:7, explanation:"3×7＝21なので、21÷3＝7です。" },
    { id:"m2-08", subject:"算数", grade:2, topic:"九九", prompt:"車が5台ずつ7れつ。車は全部で何台？", choices:[{value:35,label:"35"},{value:30,label:"30"}], correctValue:35, explanation:"5の7ばいは35です。" },

    { id:"m3-01", subject:"算数", grade:3, topic:"かけ算", prompt:"7 × 8 ＝ ？", choices:[{value:54,label:"54"},{value:56,label:"56"}], correctValue:56, explanation:"7×8＝56です。" },
    { id:"m3-02", subject:"算数", grade:3, topic:"わり算", prompt:"63 ÷ 9 ＝ ？", choices:[{value:7,label:"7"},{value:8,label:"8"}], correctValue:7, explanation:"9×7＝63なので、答えは7です。" },
    { id:"m3-03", subject:"算数", grade:3, topic:"たし算", prompt:"235 ＋ 146 ＝ ？", choices:[{value:371,label:"371"},{value:381,label:"381"}], correctValue:381, explanation:"235＋100＝335、さらに46をたすと381です。" },
    { id:"m3-04", subject:"算数", grade:3, topic:"ひき算", prompt:"400 − 175 ＝ ？", choices:[{value:225,label:"225"},{value:235,label:"235"}], correctValue:225, explanation:"400から175をひくと225です。" },
    { id:"m3-05", subject:"算数", grade:3, topic:"かけ算", prompt:"1分に9台の車が来ます。6分で何台？", choices:[{value:54,label:"54"},{value:56,label:"56"}], correctValue:54, explanation:"6×9＝54です。" },
    { id:"m3-06", subject:"算数", grade:3, topic:"わり算", prompt:"48 ÷ 6 ＝ ？", choices:[{value:6,label:"6"},{value:8,label:"8"}], correctValue:8, explanation:"6×8＝48なので、答えは8です。" },
    { id:"m3-07", subject:"算数", grade:3, topic:"長さ", prompt:"コース1周は1 km。何 m？", choices:[{value:100,label:"100 m"},{value:1000,label:"1000 m"}], correctValue:1000, explanation:"1 kmは1000 mです。" },
    { id:"m3-08", subject:"算数", grade:3, topic:"長さ", prompt:"トラックの長さが2 m。何 cm？", choices:[{value:20,label:"20 cm"},{value:200,label:"200 cm"}], correctValue:200, explanation:"1 mは100 cm。2 mは200 cmです。" },

    { id:"k1-01", subject:"国語", grade:1, topic:"ことば", prompt:"「おおきい」の はんたいは？", choices:[{value:"small",label:"ちいさい"},{value:"long",label:"ながい"}], correctValue:"small", explanation:"「おおきい」の反対は「ちいさい」です。" },
    { id:"k1-02", subject:"国語", grade:1, topic:"ことば", prompt:"「あさ」の はんたいは？", choices:[{value:"night",label:"よる"},{value:"noon",label:"ひる"}], correctValue:"night", explanation:"「あさ」の反対は「よる」です。" },
    { id:"k1-03", subject:"国語", grade:1, topic:"かん字", prompt:"「山」の よみかたは？", choices:[{value:"yama",label:"やま"},{value:"kawa",label:"かわ"}], correctValue:"yama", explanation:"「山」は「やま」と読みます。" },
    { id:"k1-04", subject:"国語", grade:1, topic:"かん字", prompt:"「木」の よみかたは？", choices:[{value:"ki",label:"き"},{value:"hi",label:"ひ"}], correctValue:"ki", explanation:"「木」は「き」と読みます。" },
    { id:"k1-05", subject:"国語", grade:1, topic:"ことば", prompt:"「あかるい」の はんたいは？", choices:[{value:"dark",label:"くらい"},{value:"hot",label:"あつい"}], correctValue:"dark", explanation:"「あかるい」の反対は「くらい」です。" },
    { id:"k1-06", subject:"国語", grade:1, topic:"文", prompt:"くるまが（　）を はしる。", choices:[{value:"road",label:"みち"},{value:"sky",label:"そら"}], correctValue:"road", explanation:"くるまは「みち」を走ります。" },
    { id:"k1-07", subject:"国語", grade:1, topic:"かん字", prompt:"「川」の よみかたは？", choices:[{value:"kawa",label:"かわ"},{value:"yama",label:"やま"}], correctValue:"kawa", explanation:"「川」は「かわ」と読みます。" },
    { id:"k1-08", subject:"国語", grade:1, topic:"ことば", prompt:"「はやい」の はんたいに近いのは？", choices:[{value:"slow",label:"おそい"},{value:"small",label:"ちいさい"}], correctValue:"slow", explanation:"速さの「はやい」の反対は「おそい」です。" },

    { id:"k2-01", subject:"国語", grade:2, topic:"かん字", prompt:"「学校」の よみかたは？", choices:[{value:"gakkou",label:"がっこう"},{value:"gakukou",label:"がくこう"}], correctValue:"gakkou", explanation:"「学校」は「がっこう」と読みます。" },
    { id:"k2-02", subject:"国語", grade:2, topic:"かん字", prompt:"「東」の よみかたは？", choices:[{value:"higashi",label:"ひがし"},{value:"nishi",label:"にし"}], correctValue:"higashi", explanation:"「東」は「ひがし」、「西」は「にし」です。" },
    { id:"k2-03", subject:"国語", grade:2, topic:"ことば", prompt:"「高い」の はんたいは？", choices:[{value:"low",label:"ひくい"},{value:"late",label:"おそい"}], correctValue:"low", explanation:"高さの「高い」の反対は「ひくい」です。" },
    { id:"k2-04", subject:"国語", grade:2, topic:"文", prompt:"雨が（　）。", choices:[{value:"fall",label:"ふる"},{value:"climb",label:"のぼる"}], correctValue:"fall", explanation:"雨については「雨がふる」と言います。" },
    { id:"k2-05", subject:"国語", grade:2, topic:"ことば", prompt:"「元気」に近いのは？", choices:[{value:"energetic",label:"げんきいっぱい"},{value:"sad",label:"かなしい"}], correctValue:"energetic", explanation:"元気は、いきいきしている様子です。" },
    { id:"k2-06", subject:"国語", grade:2, topic:"かん字", prompt:"「走る」の よみかたは？", choices:[{value:"hashiru",label:"はしる"},{value:"hairu",label:"はいる"}], correctValue:"hashiru", explanation:"「走る」は「はしる」と読みます。" },
    { id:"k2-07", subject:"国語", grade:2, topic:"ことば", prompt:"図書館ですることは？", choices:[{value:"read",label:"本を読む"},{value:"wash",label:"くつをあらう"}], correctValue:"read", explanation:"図書館では本を読んだり、借りたりします。" },
    { id:"k2-08", subject:"国語", grade:2, topic:"かん字", prompt:"「朝」の よみかたは？", choices:[{value:"asa",label:"あさ"},{value:"yoru",label:"よる"}], correctValue:"asa", explanation:"「朝」は「あさ」と読みます。" },

    { id:"k3-01", subject:"国語", grade:3, topic:"ことば", prompt:"「安全」の 意味に近いのは？", choices:[{value:"safe",label:"あぶなくない"},{value:"scary",label:"おそろしい"}], correctValue:"safe", explanation:"安全は、危険がなく安心できることです。" },
    { id:"k3-02", subject:"国語", grade:3, topic:"かん字", prompt:"「運転（うんてん）」の 意味に近いのは？", choices:[{value:"drive",label:"車などを動かすこと"},{value:"exercise",label:"体をきたえること"}], correctValue:"drive", explanation:"運転は、車などの乗り物を動かすことです。" },
    { id:"k3-03", subject:"国語", grade:3, topic:"ことば", prompt:"「目的地（もくてきち）」はどこ？", choices:[{value:"destination",label:"行きたい場所"},{value:"departure",label:"出発した時間"}], correctValue:"destination", explanation:"目的地は、向かっている先の場所です。" },
    { id:"k3-04", subject:"国語", grade:3, topic:"かん字", prompt:"「急ぐ」の よみかたは？", choices:[{value:"isogu",label:"いそぐ"},{value:"tsuzuku",label:"つづく"}], correctValue:"isogu", explanation:"「急ぐ」は「いそぐ」と読みます。" },
    { id:"k3-05", subject:"国語", grade:3, topic:"文", prompt:"道がぬれているので、（　）走る。", choices:[{value:"slowly",label:"ゆっくり"},{value:"quickly",label:"いそいで"}], correctValue:"slowly", explanation:"道がぬれているときは、安全のためゆっくり走ります。" },
    { id:"k3-06", subject:"国語", grade:3, topic:"ことば", prompt:"「開始」の はんたいに近い言葉は？", choices:[{value:"end",label:"終了（しゅうりょう）"},{value:"prepare",label:"準備（じゅんび）"}], correctValue:"end", explanation:"開始は始めること、終了は終わることです。" },
    { id:"k3-07", subject:"国語", grade:3, topic:"ことば", prompt:"「安全」の はんたいに近い言葉は？", choices:[{value:"danger",label:"危険（きけん）"},{value:"relief",label:"安心（あんしん）"}], correctValue:"danger", explanation:"安全の反対に近い言葉は危険です。" },
    { id:"k3-08", subject:"国語", grade:3, topic:"ことば", prompt:"車の「整備（せいび）」に近いのは？", choices:[{value:"check",label:"点検して調子を整える"},{value:"race",label:"速く走ること"}], correctValue:"check", explanation:"整備は、乗り物が安全に動くように点検したり直したりすることです。" }
  ]
};
