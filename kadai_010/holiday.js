const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

let num = holidays.length;

// for文の場合
// C#書いてたらこんな感じの{}になるんだけど、こっちだとみにくい？
for(let i = 0; i < num;i++)
{
    console.log(holidays[i]);
}

// while文の場合、最初に変数を指定しないと使えない？なんかうまい書き方ありそうだけど。
i = 0;
while (i < num)
{
    console.log(holidays[i]);
    i++;
}

