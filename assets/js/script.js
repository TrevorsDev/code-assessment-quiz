const startBtn = document.getElementById('start');
const timerEl = document.getElementById('timer');
let timeInterval;
let time = 60;
let index = 0;

startBtn.addEventListener('click', () => {
  document.getElementById('start').classList.add('hide');
  timeInterval = setInterval(countdown, 1000),
  timerEl.textContent = time
  displayQuestion();
})
