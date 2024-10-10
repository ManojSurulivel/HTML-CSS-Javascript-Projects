const questions = [
    {
        question: " Which is largest animal in the world? ",
        answers: [
            {text:"Shark",correct:"false"},
            {text:"Blue wale",correct:"true"},
            {text:"Elephant",correct:"false"},
            {text:"Giraffe",correct:"false"}

        ]
    },
    {
        question: " Which is Smallest Country in the world? ",
        answers: [
            {text:"Vaticane city",correct:"true"},
            {text:"Bhutan",correct:"false"},
            {text:"Nepal",correct:"false"},
            {text:"Shri Lanka",correct:"false"}

        ]
    },
    {
        question: " Which is largest dessert in the world? ",
        answers: [
            {text:"kalanhari",correct:"false"},
            {text:"Gobi",correct:"false"},
            {text:"Shahara",correct:"false"},
            {text:"Antarctica",correct:"true"}

        ]
    },
    {
        question: " Which is Smallest Continent in the world? ",
        answers: [
            {text:"Asia",correct:"false"},
            {text:"Astralia",correct:"true"},
            {text:"Artic",correct:"false"},
            {text:"Africa",correct:"false"}

        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ;

function StartQuiz(){
    currentQuestionIndex = 0 ;
    score = 0;
    nextButton.innerHTML = "next"
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1 ;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct =answer.correct;
     }
     button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display ="none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
         selectedBtn.classList.add("correct");
         score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz()
    }
})

StartQuiz()