var choicesPrintVariable = document.getElementById("choicesPrint");
var questionPrintVariable = document.getElementById("questionPrint");
var countdownPrintVariable = document.getElementById("countdownPrint");
var imagePrintVariable = document.getElementById("imagePrint");
var messagePrintVariable = document.getElementById("messagePrint");

var startButtonVariable = document.getElementById("startButton");

var score = 0;
var time = 60;
var currentQuestion = 0;

/**
 *
 *
 *
 */

let quizAll = [
  {
    question: "(1) question 1",
    image: "",
    choices: ["(2) choice 1", "(2) choice 3", "(2) choice 2"],
    answer: "(1) answer 1"
  },
  {
    question: "(2) question 1",
    image: "",
    choices: ["(2) choice 1", "(2) choice 3", "(2) choice 2"],
    answer: "(2) answer 1"
  },
  {
    question: "(3) question 1",
    image: "",
    choices: ["(2) choice 1", "(2) choice 3", "(2) choice 2"],
    answer: "(3) answer 1"
  },
  {
    question: "(4) question 1",
    image: "",
    choices: ["(2) choice 1", "(2) choice 3", "(2) choice 2"],
    answer: "(4) answer 1"
  }
];

// Timer Function
var timerInterval;

function timer() {
  if (time > 9) {
    time--;
    countdownPrintVariable.textContent = "0:" + time;
  } else if (time > 0) {
    time--;
    countdownPrintVariable.textContent = "0:0" + time;
  } else {
    // you lose the game
    clearInterval(timerInterval);
    messagePrintVariable.textContent = "you lose!";
  }
}

// function questionFunction() {
// if (x = 0; x < quizAll.length; x++) {
//   questionPrintVariable.TextContent = quizAll[currentQuestion].question;
// }
// }

// Start Game Function
var startGame = function() {
  countdownPrintVariable.style = "display: block";
  timerInterval = setInterval(timer, 1000);
  // questionFunction()


  // var choicesChosen = quizAll[currentQuestion].choices;
  // var answerChosen = quizAll[currentQuestion].answer;

  //display question
  //anaswer question
  // if the question has been answered, then currentQuestion++;
};

startButtonVariable.addEventListener("click", startGame);
