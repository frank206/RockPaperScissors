let playerScore = 0;
let computerScore =0;
let draw = 0;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const userResults = document.getElementById('user-results');
const computerResults = document.getElementById('computer-results');
const drawResults = document.getElementById('draw-results');
const footerText = document.querySelector('.text');
const endResult = document.querySelector('.endResult');
const resetText = document.querySelector('.resetGameText');
const resetButton = document.getElementById('resetBtn');
const choices = ['rock','paper','scissor'];

function start(){
    rockButton.addEventListener('click', function() {
        game('rock')
    })
    paperButton.addEventListener('click', function() {
        game('paper')
    })
    scissor.addEventListener('click', function() {    
        game('scissor')
    })
}


function resetGame(){
    window.location.reload();
    return false;
}

resetButton.addEventListener('click',resetGame);

function game(userChoice){
    const computerChoice = computerPlay();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            userWin();
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            computerWin();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            gameDraw();
            break;
    }
}

function computerPlay(){
    let randomSelection = Math.floor(Math.random() * choices.length)
    return choices[randomSelection]
}

function userWin(){
    playerScore ++;
    footerText.innerHTML ="You won!";
    if(playerScore === 5){
        rockButton.outerHTML = rockButton.outerHTML;
        scissorButton.outerHTML = scissorButton.outerHTML;
        paperButton.outerHTML = paperButton.outerHTML;
        footerText.innerHTML = "You won the match!";
        endResult.innerHTML = "WINNER!!!";
        resetText.innerHTML = "Please reset the game";
    }
    userResults.innerHTML = playerScore;
    
    
}

function computerWin(){
    computerScore ++;
    footerText.innerHTML ="Computer takes the point!";
    if(computerScore === 5){
        rockButton.outerHTML = rockButton.outerHTML;
        scissorButton.outerHTML = scissorButton.outerHTML;
        paperButton.outerHTML = paperButton.outerHTML;
        footerText.innerHTML ="Computer takes the match!";
        endResult.innerHTML = "LOSER!!!";
        resetText.innerHTML = "Please reset the game";
    }
    computerResults.innerHTML = computerScore;
}

function gameDraw(){
    draw ++;
    footerText.innerHTML ="This round is a draw.";
    drawResults.innerHTML = draw;
}


start();