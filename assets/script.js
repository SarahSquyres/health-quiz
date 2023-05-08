// Define JS variables = page elements
// queryselector elects element by class
var quizIntro = document.getElementById("main");
var questionElement = document.getElementById("question");
var startButton = document.querySelector(".start-btn");
var timeLeft = document.querySelector(".time");


// Click start button
startButton.addEventListener("click", startGame);

  //toggle main display to none
  function startGame() {
  quizIntro.setAttribute("style", "display:none");
  questionElement.setAttribute("style","display:block;");

  displayQuestion();
  startTimer();

  }

// start timer
// .question display: none toggle off
// display first index in question array



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
  {
    question: "Question 5?",
    options: ["Wrong", "Wrong", "Wrong", "Right"],
    answer: "Right"
  },

]
//For loop to loop through questions

var displayQuestion = function(){
  // for(i = 0; i = questions.length; i++)
    questionElement.textContent = questions[0].question + questions[0].options;
    document.body.appendChild(questionElement);
}





// Starts Timer
var secondsLeft = 200;

function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeLeft.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}
