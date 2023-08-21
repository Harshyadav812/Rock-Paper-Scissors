const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;



choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));


function computerTurn() {

    const computerChoices = ["🪨", "📄", "✂️", "🔥"]
    let randomNum = Math.floor(Math.random() * computerChoices.length);

    computer = computerChoices[randomNum];

    // Another approach

    // switch (randomNum) {
    //     case 1:
    //         computer = '🪨';
    //         break;
    //     case 2:
    //         computer = '📄';
    //         break;

    //     case 3:
    //         computer = '✂️';
    //         break;
    //     case 4:
    //         computer = '🔥';
    //         break;
    // }
    // console.log(computer);

}

function checkWinner() {
    if (player == computer) {
        return 'DRAW!!';
    }
    else if (player == '🔥') {
        return "You WIN!!!!";
    }
    else if (computer == '🪨') {
        return (player == '📄') ? "You Win!" : "You Lose!";
    }
    else if (computer == '📄') {
        return (player == '✂️') ? "You Win!" : "You Lose!";
    }
    else if (computer == '✂️') {
        return (player == '🪨') ? "You Win!" : "You Lose!";
    }
    else if (computer == '🔥') {
        return "You Lose!!";
    }

}



