const mole = document.querySelector(".mole")
const moles = document.getElementsByClassName("mole")
const startButton = document.querySelector(".start-button");
const scoreElements = document.querySelectorAll(".score");
const avrScore = document.querySelector(".avr-score")
const cursor = document.getElementById("my-cursor")
const moleImages = document.getElementsByClassName('mole-image')
const MIN_MS_TILL_CHANGE = 100;
const MAX_MS_TILL_CHANGE = 1000;

let testScore = 0
let averageScore
let totalScore
let scoreHistory
let count = 0
let restart = true
let timeOut

console.log(moles[8].style.zIndex == 1)

async function startGame() {
    if (count <= 4) {     
        count ++;
        const randomNumber = Math.floor(Math.random() * 9)
        const msTillChange = Math.floor(Math.random() * (MAX_MS_TILL_CHANGE - MIN_MS_TILL_CHANGE)) + MIN_MS_TILL_CHANGE;
        await delay(msTillChange);
        msSinceStart = Date.now();
        moles[randomNumber].style.zIndex = "1"
        console.log(moleImages)
        moleImages[randomNumber].classList.remove('hidden')
        moleImages[randomNumber].classList.add('move')
        console.log(moles[randomNumber].style.zIndex == "1")
    } else {
        restart = true
        startButton.classList.remove("hidden")
        fetch('/scores', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                score: averageScore
            })
        }).then(res => res.json()).then(scores => console.log(scores))
    }
}

function addScore(score) {
    scoreHistory.push(score);
    testScore += score
    for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
        const score = scoreHistory[i];
        scoreElements[i].textContent = `Score ${[i + 1]} -  ${score} ms`;
    }
    averageScore = testScore / scoreHistory.length
    avrScore.innerText = `Average Score: ${averageScore.toFixed()} ms`
}

function resetScore() {
    for (let i = 0; i < 5; i++) {
        scoreElements[i].textContent = `Score ${[i+1]} -`;
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener("mousemove", (e) => {
    const { pageX, pageY } = e;
    cursor.setAttribute("style", `top: ${pageY - 193}px; left: ${pageX - 70 }px`)

})

document.addEventListener("click", (e) => {
    clearTimeout(timeOut)
    cursor.classList.add("animation")
    const { pageX, pageY } = e;
    if (document.elementsFromPoint(pageX, pageY).includes(startButton)) {
        if (restart) {
            count = 0
            restart = false
            startButton.classList.add("hidden")
            scoreHistory = []
            resetScore()
            startGame()
        }
    } else if (document.elementsFromPoint(pageX, pageY).includes(moles[0]) && moles[0].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[0].style.zIndex = "0"
        moleImages[0].classList.remove('move')
        moleImages[0].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[1]) && moles[1].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[1].style.zIndex = "0"
        moleImages[1].classList.remove('move')
        moleImages[1].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[2]) && moles[2].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[2].style.zIndex = "0"
        moleImages[2].classList.remove('move')
        moleImages[2].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[3]) && moles[3].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[3].style.zIndex = "0"
        moleImages[3].classList.remove('move')
        moleImages[3].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[4]) && moles[4].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[4].style.zIndex = "0"
        moleImages[4].classList.remove('move')
        moleImages[4].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[5]) && moles[5].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[5].style.zIndex = "0"
        moleImages[5].classList.remove('move')
        moleImages[5].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[6]) && moles[6].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[6].style.zIndex = "0"
        moleImages[6].classList.remove('move')
        moleImages[6].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[7]) && moles[7].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[7].style.zIndex = "0"
        moleImages[7].classList.remove('move')
        moleImages[7].classList.add('hidden')
        startGame()
    }
    else if (document.elementsFromPoint(pageX, pageY).includes(moles[8]) && moles[8].style.zIndex == 1) {
        const score = Date.now() - msSinceStart;
        addScore(score);
        moles[8].style.zIndex = "0"
        moleImages[8].classList.remove('move')
        moleImages[8].classList.add('hidden')
        startGame()
    }

    timeOut = setTimeout(() => {
        cursor.classList.remove("animation")
    }, 500);
})



const runTimer = () => {
    timer = window.setTimeout( () => {
    document.body.style.backgroundColor = 'black'
    }, 3000);
}
    
runTimer();
    document.body.onclick = () => {
    clearTimeout(timer)
    runTimer()
}