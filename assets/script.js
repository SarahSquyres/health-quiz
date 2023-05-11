// Define JS variables = page elements
// queryselector selects element by class
var quizIntro = document.getElementById("main");
var questionElement = document.getElementById("question");
var startButton = document.querySelector(".start-btn");
var timeLeft = document.querySelector(".time");
var optionsButton = document.querySelector(".btn");
var finalScrEl = document.querySelector(".final-screen")
var enterInitials = document.querySelector(".initials");
var index = 0;
var timerInterval;
var submitButton = document.querySelector(".submitBtn");
var highScores = document.querySelector("high-scores");


// Click start button, start timer, display first question
startButton.addEventListener("click", startGame);

function startGame() {
  quizIntro.setAttribute("style", "display:none");
  questionElement.setAttribute("style", "display:block;");
  startTimer();
  displayQuestion();
}

// Starts Timer
var secondsLeft = 100;

function startTimer() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      endGame();
    }

  }, 1000);
}

//Activate screen help from Andrew

var displayQuestion = function () {
  questionElement.innerHTML = "";
  var questionH2 = document.createElement('h2');
  questionH2.textContent = questions[index].question;

  questionElement.appendChild(questionH2);

  var optionsList = document.createElement('ul');

  questions[index].options.forEach(option => {
    var button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = checkAnswer;
    optionsList.appendChild(button);
  })

  questionElement.appendChild(optionsList);
}

// eventListener select option event.target, help from Faran
function checkAnswer(e) {
  var userChoice = e.target.textContent;
  console.log(userChoice)
  if (userChoice !== questions[index].answer) {
    secondsLeft -= 10;
  }
  index++;
  if (index === questions.length) {
    endGame();
  }

  displayQuestion();

}
// Help from Faran
function endGame() {
  clearInterval(timerInterval);
  questionElement.setAttribute("style", "display:none;");
  finalScrEl.setAttribute("style", "display:block;");
}

// Help from https://www.youtube.com/watch?v=k8yJCeuP6I8&t=2s
submitButton.onclick = function() {
  var savedScore = enterInitials.value;
  console.log(savedScore);
  localStorage.setItem("initials", savedScore);

  highScores.setAttribute("style", "display:block;");
  };




// Questions are stored in an array of objects
var questions = [
  {
    question: "Question 1?",
    options: ["Wrong", "Right", "Wrong", "Wrong"],
    answer: "Right"
  },
  {
    question: "Question 2?",
    options: ["Right", "Wrong", "Wrong", "Wrong"],
    answer: "Right"
  },
  {
    question: "Question 3?",
    options: ["Wrong", "Wrong", "Wrong", "Right"],
    answer: "Right"
  },
  {
    question: "Question 4?",
    options: ["Wrong", "Wrong", "Wrong", "Right",],
    answer: "Right"
  },

]



