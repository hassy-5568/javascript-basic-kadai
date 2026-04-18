let num = 10;

// 先に関数を定義しないと動かない。
// C#だと、関数は後から定義できてたけど、こっちだと最初に書かないといけないのか。
// 書き方工夫しないと見づらいかも。
const squareCalc = (Num) => {
    return Num*Num;
}

// その後で呼び出す
console.log(squareCalc(num));