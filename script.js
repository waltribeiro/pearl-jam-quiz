var choicesPrintVariable = document.getElementById("choicesPrint");
var questionPrintVariable = document.getElementById("questionPrint");
var countdownPrintVariable = document.getElementById("countdownPrint");
var imagePrintVariable = document.getElementById("imagePrint");
var messagePrintVariable = document.getElementById("messagePrint");

var startButtonVariable = document.getElementById("startButton");

var score = 0;
var secondsLeft = 60;
var currentQuestion = 0;
var correctAnswer;


/**
 *
 *
 *
 */

let quizAll = [
  {
    question: "What is Eddie's last name?",
    choices: ["Vedder", "Johnson", "Delaware"],
    answer: "choice 1"
  },
  {
    question: "What is Abbruzzese's first name?",
    choices: ["Tommy", "Dave", "Benjamin"],
    answer: "choice 1"
  },
  {
    question: "question 3",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4",],
    answer: "choice 1"
  },
  {
    question: "question 4",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4",],
    answer: "choice 1"
  },
  {
    question: "question 5",
    choices: ["choice 1", "choice 2", "choice 3", "choice 4",],
    answer: "choice 1"
  }
];

// Timer Function
var timerInterval;

function timer() {
  if (secondsLeft > 9) {
    secondsLeft--;
    countdownPrintVariable.textContent = "0:" + secondsLeft;
  } else if (secondsLeft > 0) {
    secondsLeft--;
    countdownPrintVariable.textContent = "0:0" + secondsLeft;
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


  var questionChosen = quizAll[currentQuestion].question;
  var choicesChosen = quizAll[currentQuestion].choices;
  var answerChosen = quizAll[currentQuestion].answer;


  questionPrintVariable.textContent = questionChosen;
  choicesPrintVariable.textContent = choicesChosen;

  document.getElementById("choicesPrint").innerHTML = <button type="button" class="btn btn-info">Choice 3</button>;
  
  if (answerChosen == correctAnswer) {
    score++
  }

  //anaswer question
  // if the question has been answered, then currentQuestion++;
};

// if (choice1Checked === checked) {
// var whatever
// }

// function checkA() {
//   document.getElementById("myCheck").checked = true;
// }

// function uncheck() {
//   document.getElementById("myCheck").checked = false;
// }


startButtonVariable.addEventListener("click", startGame);



