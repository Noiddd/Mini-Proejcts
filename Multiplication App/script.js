const num1 = Math.ceil(Math.random() * 10); // random number from 0-10
const num2 = Math.ceil(Math.random() * 10);
const correctAns = num1 * num2;

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const generateQns = function () {
  questionEl.innerText = `What is ${num1} multiply by ${num2}`; // generate questions with random number
};
const updateScore = function () {
  scoreEl.innerText = `score: ${score}`;
};
const updateLocalStorage = function () {
  localStorage.setItem("score", score.toString());
};

let score = +localStorage.getItem("score");
if (!score) score = 0;

formEl.addEventListener("submit", (e) => {
  const userAns = +inputEl.value;
  const updateInterface = function () {
    generateQns();
    updateLocalStorage();
  };

  if (userAns === correctAns) {
    score++;
    updateInterface();
  } else {
    score--;
    updateInterface();
  }
});

updateScore();
generateQns();
