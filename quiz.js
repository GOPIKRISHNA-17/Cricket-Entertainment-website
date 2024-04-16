
let questions = [
    {
        question: "Who is no.1 team in Test ranking in 2023?",
        answers: ["a)  India", "b) Australia", "c) Srilanka", "d) England"],
        correctAnswer: 0
    },
    {
        question: "Who won the man of the series in ipl 2023?",
        answers: ["a) Virat Kholi", "b) Jaiswal", "c) Shubman Gill", "d) Rohit Sharma"],
        correctAnswer: 2
    },
    {
        question: "Which country has won the most World cup Champions titles?",
        answers: ["a) UAE", "b) Srilanka", "c) Zimbawe", "d) Australia"],
        correctAnswer: 3
    },
    {
        question: "How many players plays in cricket?",
        answers: ["a) 9", "b) 12", "c) 11", "d) 6"],
        correctAnswer: 2
    },
    {
        question: " Which country won the ICC Cricket World Cup 2019?",
        answers: ["a) Srilanka", "b) England", "c) Afganishthan", "d) India"],
        correctAnswer: 1
    },
    {
        question: "Who is the captain of (current) Srilankan team?",
        answers: ["a) Dasun Shanaka", "b) Angelo Mathews", "c) Hasaranga", "d) Malinga"],
        correctAnswer: 0
    },
    {
        question: "Which player has the most centuries in international cricket as of 2023?",
        answers: ["a) Virat Kholi", "b) Sachin Tendulker", "c) Jayasuriya", "d) Rohit Sharma"],
        correctAnswer: 1
    },
    {
        question: "which team has won the most IPL titles till 2022?",
        answers: ["a) CSK", "b) GT", "c) MI", "d) RCB"],
        correctAnswer: 2
    },
    {
        question: "Who is the fastest bowler in international cricket currently?",
        answers: ["a) Rabada", "b) Umran Malik", "c)  Bumrah", "d) Shami"],
        correctAnswer: 0
    },
    {
        question: " Who holds the record for the highest individual score in One Day Internationals (ODIs)?",
        answers: ["a) Virat Kholi", "b) Jaiswal", "c) Shubman Gill", "d) Rohit Sharma"],
        correctAnswer: 3
    }
];
let currentQuestion = 0;   // Representing index of "questions" array.
let correctAnswers = 0;

function showQuestion() {
    let questionElement = document.getElementById("question");
    let answersElement = document.getElementById("answers");
    let statusElement = document.getElementById("details");
    let nextButtonElement = document.getElementById("next");

    // Clear previous question and answers.
    questionElement.textContent = "";
    answersElement.textContent = "";
    statusElement.textContent = "";

    // Display current question number  among all 10 questions.
    let questionCount = document.createElement("span");
    questionCount.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length + " questions";
    questionCount.classList.add("B");
    statusElement.appendChild(questionCount);

    // Display the number of correct answers.
    let correctCount = document.createElement("span");
    correctCount.textContent = "Correct Answers: " + correctAnswers;
    correctCount.classList.add("B");
    statusElement.appendChild(correctCount);

    // Display ongoing question
    questionElement.textContent = questions[currentQuestion].question;

    // Display options for the answers.
    for(let i = 0; i < questions[currentQuestion].answers.length; i++) {
        let answerElement = document.createElement("div");
        answerElement.className = "answer";
        answerElement.textContent = questions[currentQuestion].answers[i];

        // Attach click event listener to each answer
        answerElement.addEventListener("click", handleAnswerSelection);

        answersElement.appendChild(answerElement);
    }
    // Hide "Next Question" button until an answer is selected.
    nextButtonElement.style.display = "block";
}

function handleAnswerSelection(event) {
    let selectedAnswer = event.target;
    let answers = document.getElementsByClassName("answer");
    let correctAnswer = questions[currentQuestion].correctAnswer;

    // Check if selected answer is correct.
    if(selectedAnswer.textContent === questions[currentQuestion].answers[correctAnswer]) {
        selectedAnswer.classList.add("correct");
        correctAnswers++;
    }
    else {
        selectedAnswer.classList.add("incorrect");

        // Highlight the correct answer.
        answers[correctAnswer].classList.add("correct");
    }

    // Disable click event listeners on all answer.
    for(let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener("click", handleAnswerSelection);
    }

    // Activate "Next Question" button.
    let nextButtonElement = document.getElementById("next");
    nextButtonElement.disabled = false;
}

function handleNextQuestionClick() {
    let answers = document.getElementsByClassName("answer");

    // Remove answer colour classes.
    for(let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("correct", "incorrect");
    }

    // Increment current question index.
    currentQuestion++;

    // Display next question or end the quiz.
    if(currentQuestion < questions.length) {
        let nextButtonElement = document.getElementById("next");
        nextButtonElement.disabled = true;
        showQuestion();
    }
    else {
        // End of quiz.
        let questionElement = document.getElementById("question");
        let answersElement = document.getElementById("answers");
        let statusElement = document.getElementById("details");
        let nextButtonElement = document.getElementById("next");
        document.getElementById("next").onclick=stopTimer();
        document.getElementById("next").onclick=displayResult();
        
        
    nextButtonElement.style.display = "none";
    }
}
// Start Quiz
showQuestion();

// Attach click event listener to "Next Question" button
let nextButtonElement = document.getElementById("next");
nextButtonElement.addEventListener("click", handleNextQuestionClick);

// Timer
var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var timerInterval;

    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      stopTimer();
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateTimerDisplay();
    }

    function updateTimer() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      var displayHours = hours < 10 ? '0' + hours : hours;
      var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
      var displaySeconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('timer').textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
    }

    startTimer();

    function displayResult(){
        const informationContainer  = document.getElementById("informationContainer") ;
        
        if(correctAnswers<5){
             document.getElementById("peformance").innerHTML = "Good try ! better luck next time";
            document.getElementById("peformance").style.color = "red"
          }else {
            document.getElementById("peformance").innerHTML = "Good peformance";
            document.getElementById("peformance").style.color = "green"
          }
        
        if (informationContainer.style.display === 'none') {
            // Show the container by setting the display property to 'block'
            informationContainer.style.display = "block";
          } else {
            // Hide the container by setting the display property to 'none'
            informationContainer.style.display = 'none';
          }

          document.getElementById("totalTime").innerHTML = "Total time taken for this quiz : "+hours+":"+minutes+":"+seconds;
          document.getElementById("correctAnswers").innerHTML = "Correct answers : "+correctAnswers; 
          document.getElementById("totalQuestions").innerHTML = "Total questions attempted : 10";
          document.getElementById("wrongAnswers").innerHTML = "Wrong answers : "+(10-correctAnswers);

          document.getElementsByClassName("section")[0].style.display = "none";
    }

    

   