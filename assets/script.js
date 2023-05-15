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

  scoreDisplay.innerHTML =  "Your final score is: " + secondsLeft;
  finalScrEl.appendChild(scoreDisplay);
}
// ----------------------------------------------------------------

var submitButton = document.querySelector(".submitBtn");
var highScores = document.querySelector(".high-scores");
var scoreDisplay = document.querySelector(".score");
var scoreList = document.querySelector(".scores-list");

// High Scores Screen
submitButton.onclick = function() {
  finalScrEl.setAttribute("style", "display:none;");
  highScores.setAttribute("style", "display:block;");
  
// renderList();

  // score.push({enterInitials, secondsLeft});
  // localStorage.setItem("score", JSON.stringify(score));
  // console.log(score);
  // console.log(score.length);
};

function renderList(){ 
  var initialValue = enterInitials.value.trim();

  if (initialValue !== "") {
    var finalList = JSON.parse(window.localStorage.getItem('highScoresList')) || []

console.log(finalList);

    var latestScore = {
      score: secondsLeft,
      initials: initialValue
    };


    finalList.push(latestScore)
    
    localStorage.setItem("highScoresList", JSON.stringify(highScoresList));
    console.log(finalList)
  };
}

renderList()
// section 4 activity 22, help from Abram
// questions[index].options.forEach(option => {

// renderHighScores();

// function renderHighScores() {


// // for(let i=0; i<highScoresList[i].initials; i++);

//   var list = document.createElement("li");
//   list.innerHTML = finalList;
//   scoreList.appendChild(list);
// }
  
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



