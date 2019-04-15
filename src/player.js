class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.moves = [];
  }
  addMove(move) {
    this.moves.push(move);
  }
}

export default Player;
