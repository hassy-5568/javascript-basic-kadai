let date = new Date();

let year = date.getFullYear();
// 月は0から始まるのか。
let month = date.getMonth() + 1;
let day = date.getDate();

// これって整数と文字列を+で混合できるんだ。
console.log(year + "年" + month + "月" + day + "日");