let questionEl = document.getElementById('questionh2')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')
let resetBtn = document.getElementById('reset')
let previousBtn = document.getElementById('previous')
let options = document.getElementsByClassName('option')
let clearBtn = document.querySelector('#clear')
const answerEls = document.querySelectorAll(".option")
let main = document.getElementById('main')

const questions = [
    {
        question: "What is Pranav's Nickname?",
        optionA: "Anon",
        optionB: "Webster",
        optionC: "Nothing",
        optionD: "Idiot",
        correct: "optionA"
    },
    {
        question: "What is Pranav's favourite programming language",
        optionA: "Python",
        optionB: "C++",
        optionC: "Javascript",
        optionD: "Ruby",
        correct: "optionC"
    },
    {
        question: "What is his most favourite hobby other than programming?",
        optionA: "Art",
        optionB: "Journaling",
        optionC: "Reading",
        optionD: "Exploring new things",
        correct: "optionD"
    },
    {
        question: "Who is his best friend?",
        optionA: "No one",
        optionB: "He himself",
        optionC: "Animals",
        optionD: "You",
        correct: "optionB"
    },
    {
        question: "Who knows everything about him?",
        optionA: "No one",
        optionB: "He himself",
        optionC: "His parents",
        optionD: "You",
        correct: "optionB"
    },

]

let currentQues = 0
let score = 0

function printQuiz(){
    questionEl.innerText = questions[currentQues].question
    a_text.innerHTML = questions[currentQues].optionA
    b_text.innerHTML = questions[currentQues].optionB
    c_text.innerHTML = questions[currentQues].optionC
    d_text.innerHTML = questions[currentQues].optionD
}

function checkSelect(){
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
}

function deselect(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false
    })
}

function loadQuiz (){
    printQuiz()
    deselect()
}

function reset(){
    currentQues = 0
    printQuiz()
}

function previous(){
    currentQues = currentQues - 1
    printQuiz()
}

loadQuiz()

submitBtn.addEventListener('click', ()=>{
    const answer = checkSelect()

    if (answer) {
        if (answer === questions[currentQues].correct) {
            score++
        }

        currentQues++;
        if (currentQues < questions.length) {
            loadQuiz()
        } else {
            main.innerHTML = `<h2>You answered ${score}/${questions.length} correctly</h2>`
        }   
    }else{
        alert("Please answer the question")
    }
}
)

resetBtn.addEventListener('click', ()=>{
    if (currentQues > 0) {
        reset()
    } else {
        alert("You are already at question 1")
    }
}
)

previousBtn.addEventListener('click', ()=>{
    if (currentQues > 0) {
        previous()
    } else {
        alert("You are already at question 1")
    }
}
)

clearBtn.addEventListener('click', ()=>{
    deselect();
})
