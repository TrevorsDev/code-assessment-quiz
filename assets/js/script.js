const questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

const startBtn = document.getElementById('start');
const timerEl = document.getElementById('timer');
let timeInterval;
let time = 60;
let index = 0;

startBtn.addEventListener('click', () => {
  console.log("clicked");
  document.getElementById('start-screen').classList.add('hide');
  timeInterval = setInterval(countdown, 1000),
    timerEl.textContent = time
  displayQuestion();
})

function countdown() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {

    timerEl.textContent = 'Time is up!';
    endGame();
  }
}

function displayQuestion() {
  //questions will be displayed here
  let currentQuestion = questions[index];
  document.getElementById('question').innerHTML = currentQuestion.title;
  let answerEl = document.getElementById('answers');
  answerEl.innerHTML = '';
  currentQuestion.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = checkAnswer;
    answerEl.append(btn);
  })
}

function checkAnswer(e) {
  if (this.textContent !== questions[index].answer) {
    time -= 10;
    timerEl.textContent = time;
  } else {
    //this else statement will return a response of "correct" or "incorrect", underneath the display of questions, AFTER a user clicks on an answer choice. refer to gif in HW
  }
  index++;
  if (index === questions.length) {
    endGame();
  } else {
    displayQuestion();
  }
}

function endGame() {
  clearInterval(timeInterval);
  document.getElementById('game').classList.add('hide');
  document.getElementById('end-screen').classList.remove('hide');
  document.getElementById('save').onclick = saveInitials;
}

function saveInitials(e) {
  let highScores = JSON.parse(localStorage.getItem('highScores')) || []
  const initials = document.getElementById('initials').value;
  if (initials) {
    let newScore = {
      initials, score: time
    }
    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify
    (highScores));
    window.location.href = 'scores.html';
  } else {
    alert('Please enter your initials')
  }
}


