const quizData = [
    {
        question: "Who is the father of the Nation?",
        a: "Mahatma Gandhi",
        b: "Jawaharlal Nehru",
        c: "Bhagat Singh",
        d: "Subhash Chandra Bose",
        correct: "a"
    },
    {
        question: "Who is my favourite actor?",
        a: "Chiranjeevi",
        b: "Pavan Kalyan",
        c: "Allu Arjun",
        d: "Brahmanandham",
        correct: "d"
    },
    {
        question: "What is my favourite game?",
        a: "Pubg",
        b: "Freefire",
        c: "Fortnite",
        d: "Call of Duty",
        correct: "a"
    },
    {
        question: "Who is the father of Evolution?",
        a: "Einstein",
        b: "Charles Darwin",
        c: "Ivan Pavlov",
        d: "Newton",
        correct: "b"
    },
    {
        question: "Who is my favourite youtuber?",
        a: "Carry Minati",
        b: "Tanmay Bhat",
        c: "Pewdiepie",
        d: "Mr.Beast",
        correct: "b"
    }
];
const container = document.getElementById("container");
const question = document.getElementById("question-text");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const submit = document.getElementById("submit");

let quizNumber = 0;
let score = 0;

function loadQuiz() {
    question.innerHTML = quizData[quizNumber].question;
    answerA.innerHTML = quizData[quizNumber].a;
    answerB.innerHTML = quizData[quizNumber].b;
    answerC.innerHTML = quizData[quizNumber].c;
    answerD.innerHTML = quizData[quizNumber].d;
}

deselectAll();
loadQuiz();

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    console.log(answerEls);
    let selectedAnswer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;
        }
    })

    return selectedAnswer;
}

function deselectAll(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submit.addEventListener("click", () => {

    let selectedAnswer = getSelected();
    const correctAnswer = quizData[quizNumber].correct;

    console.log(selectedAnswer);
    console.log(correctAnswer);

    if (selectedAnswer) {
        if (selectedAnswer === correctAnswer) {
            score++;
        }
        console.log(score);
        deselectAll();
        quizNumber++;
        if (quizNumber < quizData.length) {
            loadQuiz();
        }
        else {
            
            container.innerHTML = `<h2> ${score} out of 5 questions are correct </h2><button class="btn" onclick="location.reload()">Restart Quiz</button>`;
        }

    }


})