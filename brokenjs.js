const mole = document.querySelector(".mole")
const moles = document.getElementsByClassName("mole")
const startButton = document.querySelector(".start-button");
const scoreElements = document.querySelectorAll(".score");
const scoreHistory = [];
const MINIMUM_MS_TILL_CHANGE = 2000;
const MAXIMUM_MS_TILL_CHANGE = 5000;

startButton.addEventListener("click", () => {
    
    startGame()
})

function startGame() {

    const randomNumber = Math.floor(Math.random() * 9)

    let count = 0
    
    const msTillChange = Math.floor(Math.random() * (MAXIMUM_MS_TILL_CHANGE - MINIMUM_MS_TILL_CHANGE)) + MINIMUM_MS_TILL_CHANGE;
    
    setTimeout(() => {
        msSinceStart = Date.now();
        moles[randomNumber].style.backgroundColor = "#00ff55";    
        // waitingForClick = true;
      }, msTillChange);

    moles[randomNumber].addEventListener("click", () => {
        const score = Date.now() - msSinceStart;
        count ++;
        console.log(count)
        moles[randomNumber].style.backgroundColor = null;
        addScore(score);
        if (count <= 4) {
            startGame()
        }
    })
}

function addScore(score) {
    scoreHistory.unshift(score);
    for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
      const score = scoreHistory[i];
      scoreElements[i].textContent = `${score} ms`;
    }
  }

  