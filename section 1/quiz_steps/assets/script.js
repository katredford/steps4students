var startBox = document.getElementById("start-box");
var startBtn = document.getElementById("start-button");
var qBox = document.getElementById("question-box")
var qTitle = document.getElementById("question-text")


var questionIndex = 0;
var gotRight = 1;
// var counter = questions.length * 15;
var counterId;


//Step 1: write questions at least 3
//put them in an array of objects, talk about objects

var questions = [
  {
    questionText: "11111 this is the text for a question",
    correct: "answer 1",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
  },
  {
    questionText: "2222",
    correct: "answer 1",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
  },
  {
    questionText: "33333",
    correct: "answer 1",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"]
  }
]

//Step 2: show question text in  question box
qTitle.textContent = questions[questionIndex].questionText

//step 3: show answer text in buttions

// button1.textContent = questions[currentQuestion].answers[0]


function nextQuestion() {
  var currentQuestion = questions[questionIndex];
  var answerGrid = document.getElementById("answer-buttons");
  answerGrid.innerHTML = "";

 // var questionTitle = document.getElementById("question");
  qTitle.textContent = currentQuestion.questionText;
  currentQuestion.answers.forEach(function (answer) {
    //1 Make the piece of html in js
    var anwserButton = document.createElement("button");
    //2 Dress that html up how u want!! give it text . class name ect...
    // anwserButton.setAttribute("class", "btn choice-btn");
    anwserButton.textContent = answer;
            
    //3 Stick that shabang on the page!! .appendCHild or jquery .append()
    answerGrid.appendChild(anwserButton);
    
  });
}

nextQuestion();