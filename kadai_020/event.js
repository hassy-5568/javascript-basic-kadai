
const textElement = document.getElementById('text');

const btnElement = document.getElementById('btn');

// 昔の度胸試しボタンとか作れそう。
btnElement.addEventListener('click', () => {
    textElement.textContent = "ボタンをクリックしました";
});