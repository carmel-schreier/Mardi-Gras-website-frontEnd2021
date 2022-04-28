const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const gameSection = document.getElementById('game-section')
const questionContainerElements = document.getElementById('question-container')
const scoreNotification = document.getElementById('score-notification')

const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-buttons")

let shuffleQuestions, currentQuestionIndex, count

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {

    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5)
    questionContainerElements.classList.remove('hide');
    currentQuestionIndex = 0
    count = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answersButtonsElement.appendChild(button)

    })

}

function resetState() {
    clearStatusClass(gameSection)
    nextButton.classList.add("hide")
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild(answersButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(gameSection, correct)

    selectedButton.addEventListener("click", next)


    Array.from(answersButtonsElement.children).forEach(button => {
        button.addEventListener("click", next1)

    })

    function next() {
        if (correct) count--
        currentQuestionIndex++
        setNextQuestion()
    }

    function next1() {
        currentQuestionIndex++
        setNextQuestion()
    }

    Array.from(answersButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)


    })

    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
        setScoreText(correct)


    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        startButton.classList.add("restart")
        setEndOfGameText(correct)
    }





}


function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")

    }
}

function setScoreText(correct) {
    if (correct) {
        count = count + 1
        scoreNotification.innerText = "Well done, your score is" + " " + (count * 10)
        scoreNotification.classList.add("well-done")

    } else {
        scoreNotification.innerText = "Oops, let's try another question"
        scoreNotification.classList.add("oops")

    }
}

function setEndOfGameText(correct) {
    correct ? count++ : count

    if (count <= 7) {
        scoreNotification.innerText = "Game over, your score is" + " " + (count * 10) + ". Would you like to try again?"
        scoreNotification.classList.add("end")

    } else {
        scoreNotification.innerText = "Your final score is" + " " + (count * 10) + ". You are a true Mardi Gras expert!"
        scoreNotification.classList.add("end")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
    scoreNotification.classList.remove("oops")
    scoreNotification.classList.remove("well-done")
    scoreNotification.classList.remove("end")
    scoreNotification.innerText = ""
    startButton.classList.remove("restart")

}
//Ithe first organised Mardi Gras celebration
const questions = [{
        question: "When was the first organized Mardi Gras celebrated in America?",
        answer: [{
                text: "1502",
                correct: false
            },
            {
                text: "1703",
                correct: true
            },
            {
                text: "1720",
                correct: false
            },
            {
                text: "1876",
                correct: false
            },
        ]
    },
    // green and gold. And in 1892, the Rex parade theme "Symbolism of Colors" gave meaning to these colors. Purple Represents Justice. Green Represents Faith. Gold Represents Power. 
    {
        question: "What do the colors purple green and gold represent?",
        answer: [{
                text: "Justice Faith and Power",
                correct: true
            },
            {
                text: "Peace Power and Hope",
                correct: false
            },
            {
                text: "Pride Honor and Faith",
                correct: false
            },
            {
                text: "Hope Power and Grace",
                correct: false
            },
        ]
    },
    //The king cake tradition is believed to have been brought over from France in the 1870s.
    {
        question: "From where was the 'king cake' tradition imported to New Orleans?",
        answer: [{
                text: "Spain",
                correct: false
            },
            {
                text: "Scotland",
                correct: false
            },
            {
                text: "France",
                correct: true
            },
            {
                text: "Germany",
                correct: false
            },
        ]
    },

    {
        question: "Where is the oldest annual Carnival celebration in the United States?",
        answer: [{
                text: "Mobile, AL",
                correct: true
            },
            {
                text: "New Orleans, LA",
                correct: false
            },
            {
                text: "Salem, MAS",
                correct: false
            },
            {
                text: "Washington, D.C.",
                correct: false
            },
        ]
    },

    {
        question: "Mardi Gras festivities end a day before:",
        answer: [{
                text: "St. Nicholas Day",
                correct: false
            },
            {
                text: "Easter Monday",
                correct: false
            },
            {
                text: "St. Patrick's Day",
                correct: false
            },
            {
                text: "Ash Wednesday",
                correct: true
            },
        ]
    },

    {
        question: "How many visitors participate in New Orleans Mardi Gras celebration every year?",
        answer: [{
                text: "About 400K",
                correct: false
            },
            {
                text: "About 1.4M",
                correct: true
            },
            {
                text: "About 3M",
                correct: false
            },
            {
                text: "About 50K",
                correct: false
            },
        ]
    },
    {
        question: "Is Mardi Gras Indian culture influenced by ancestral enslaved Africans or Native Americans?",
        answer: [{
                text: "Neither",
                correct: false
            },
            {
                text: "Enslaved Africans",
                correct: false
            },
            {
                text: "Native Americans",
                correct: false
            },
            {
                text: "Both",
                correct: true
            },
        ]
    },

    {
        question: "How are the organizations responsible for planning and executing Mardi Gras parades and masquerade balls called?",
        answer: [{
                text: "Clubs",
                correct: false
            },
            {
                text: "Brewes",
                correct: false
            },
            {
                text: "Lodges",
                correct: false
            },
            {
                text: "Krewes",
                correct: true
            },
        ]
    },

    {
        question: "What is the the Rex (king of the carnival) motto?",
        answer: [{
                text: "Pro Bono Publico",
                correct: true
            },
            {
                text: "Carpe diem",
                correct: false
            },
            {
                text: "Amor Vincit Omnia",
                correct: false
            },
            {
                text: "In Vino Veritas",
                correct: false
            },
        ]
    },

    {
        question: "What spanish anisette is traditionally consumed during the New Orleans Mardi Gras festivities?",
        answer: [{
                text: "Anisette ",
                correct: false
            },
            {
                text: "Anis del Mono Dulce",
                correct: false
            },
            {
                text: "Aguardiente de Ojén",
                correct: true
            },
            {
                text: "Chinchón",
                correct: false
            },
        ]
    },

]