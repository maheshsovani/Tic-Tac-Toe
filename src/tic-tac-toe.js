// const readline = require('readline-sync');
class Game {
  constructor(players) {
    this.players = players;
    this.winningMoves = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  }

  checkWin(playerMoves) {
    return this.winningMoves.some(move =>
      move.every(element => playerMoves.includes(element))
    );
  }

  isWon() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.checkWin(this.players[i].moves)) {
        return this.players[i];
      }
    }
    return false;
  }
}

// const initializeGame = function() {
//   const player1 = new Player('mahesh', 'X');
//   const player2 = new Player('tushar', '0');
//   const players = [player1, player2];
//   const game = new Game(players);
//   for (let i = 1; i < 10; i++) {
//     let move = +readline.question(
//       'please enter your move ?     ' + (i % 2) + '\n'
//     );
//     if (i % 2 == 0) {
//       player2.addMove(move);
//     } else {
//       player1.addMove(move);
//     }
//     if (game.isWon()) {
//       console.log(game.isWon().name + 'has won the game');
//       break;
//     }
//   }
//   return;
// };
// initializeGame();
export default Game;
