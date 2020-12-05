import { Game } from './game.js'
let game = undefined;

function updateUI() {
    const boardHolder = document.getElementById('board-holder')
    const gameName = document.getElementById('game-name');
    const clickTarg = document.getElementById('click-targets')
    if (game === undefined) {
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName()

        if(game.currentPlayer === 1) {
            clickTarg.classList.remove('black')
            clickTarg.classList.add('red')
        }
        else {
            clickTarg.classList.remove('red')
            clickTarg.classList.add('black')
        }
    }


}

window.addEventListener("DOMContentLoaded", () => {

    const player1 = document.getElementById('player-1-name')
    const player2 = document.getElementById('player-2-name')
    const newGameBtn = document.getElementById('new-game')

    function enableBtn () {
        const name1Input = player1.value
        const name2Input = player2.value
        newGameBtn.disabled = name1Input.length === 0 ||  name2Input.length === 0;
    };

    player1.addEventListener('keyup', () => {
        enableBtn();
    });

    player2.addEventListener('keyup', () => {
        enableBtn();
    });

    newGameBtn.addEventListener('click', () => {
        game = new Game(player1.value, player2.value);
        newGameBtn.disabled = true;
        updateUI();
    })

    document
        .getElementById('click-targets')
        .addEventListener('click', () => {
            game.playInColumn()
            updateUI()
        })



})
