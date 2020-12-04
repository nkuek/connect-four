import { Game } from `./game.js`

let game = undefined;

window.addEventListener("DOMContentLoaded", () => {

    const player1 = document.getElementById('player-1-name')
    const player2 = document.getElementById('player-2-name')
    const formHolder = document.getElementById('form-holder')

    player1.addEventListener('keyup', () => {
        const newGameBtn = document.getElementById('new-game')
        newGameBtn.disabled = player1.value === '' ||  player2.value === ''
    })

    player2.addEventListener('keyup', () => {
        const newGameBtn = document.getElementById('new-game')
        newGameBtn.disabled = player1.value === '' ||  player2.value === ''
    })


})
