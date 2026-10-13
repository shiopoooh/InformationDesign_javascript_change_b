const btn_1 = document.getElementById('toggleButton_1');
const text_1 = document.getElementById('toggleText_1');

btn_1.addEventListener('click', () => {
  document.body.classList.toggle('black');  
  // テキスト切り替え
    btn.addEventListener('click', () => {
    document.body.classList.toggle('black');
  });
});

// --- テーマ切り替えボタンの処理 ---
const btnA = document.querySelector('#toggleButton_2');
const btnB = document.querySelector('#toggleButton_3');
const btnC = document.querySelector('#toggleButton_4');
const btnD = document.querySelector('#toggleButton_5');

btnA.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
});

btnB.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'light');
});

btnC.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'custom1');
});

if (btnD) {
  btnD.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'custom2');
  });
}