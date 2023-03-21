var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el");

var interval;
var time = 100;
var questionIndex = 0;

var questions = [
  {
    questionText: "What is your favorite color?",
    questionChoices: ['Red', 'Blue', 'Green', 'Purple'],
    correctAnswer: 2
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ['Pizza', 'Ice Cream', 'Spaghetti', 'Cake'],
    correctAnswer: 1
  }
];

function displayQuestion() {
  mainEl.innerHTML = "";

  var h1El = document.createElement('h1');
  h1El.textContent = questions[questionIndex].questionText;
  mainEl.appendChild(h1El);

  for (var i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[i];
    mainEl.appendChild(buttonEl);
  }



};

startBtnEl.addEventListener('click', function (event) {
  console.log('hit')

  mainEl.innerHTML = "";

  interval = setInterval(function () {
    time--;
    timerEl.textContent = `Time: ${time}`;

    if (time <= 0) {
      clearInterval(interval);
      endGame();
      return;
    }


  }, 1000);

  displayQuestion();

});

mainEl.addEventListener('click', function(event) {
  var target = event.target;

})

function endGame() {

};