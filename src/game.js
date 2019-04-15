import React from 'react';
import Game from './tic-tac-toe';
import Player from './player';

class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.player = Player;
    this.players = [new Player('Mahesh', 'X'), new Player('Tushar', 'O')];
    this.game = new Game(this.players);
    this.state = { currentPlayerIndex: 0 };
    this.addPlayerMove = this.addPlayerMove.bind(this);
  }

  addPlayerMove(event) {
    let cell = document.getElementById(event.target.id);
    cell.onClick = null;
    this.players[this.state.currentPlayerIndex].addMove(+event.target.id);
    this.setState(state => ({
      currentPlayerIndex: 1 - state.currentPlayerIndex
    }));
    if (this.state.currentPlayerIndex == 0) {
      cell.style.backgroundColor = 'orange';
    } else {
      cell.style.backgroundColor = 'green';
    }
    cell.innerText = this.players[this.state.currentPlayerIndex].symbol;
    if (this.game.isWon()) {
      alert('current player has won the game');
      window.location.reload();
    }
  }

  createTable() {
    let table = [];
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      let row = [];
      for (let columnIndex = 1; columnIndex < 4; columnIndex++) {
        let ids = rowIndex * 3 + columnIndex;
        row.push(<td id={ids} key={ids} />);
      }
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return <tbody id='table-body'>{table}</tbody>;
  }

  render() {
    return (
      <div>
        <h2>Welcome to TIC TAC TOE</h2>
        <div className='table-view'>
          <table id='table' onClick={this.addPlayerMove}>
            {this.createTable()}
          </table>
        </div>
        <div className='button-view'>
          <button onClick={this.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

export default GameTable;
