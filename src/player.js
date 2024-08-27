import Gameboard from './gameboard';
import Ship from './ship';

export default class Player {
  constructor(real, name) {
    this.real = real;
    if (real !== false) {
      this.name = name;
      this.placeStage = true;
    } else {
      this.name = 'Computer';
      this.placeStage = false;
    }
    this.gameboard = new Gameboard();
    this.ships = {
      carrier: new Ship(5),
      battleship: new Ship(4),
      cruiser: new Ship(3),
      submarine: new Ship(3),
      destroyer: new Ship(2),
    };
  }

  didAllShipsSink() {
    if (this.ships.carrier.sunk && this.ships.battleship.sunk && this.ships.cruiser.sunk && this.ships.submarine.sunk && this.ships.destroyer.sunk) {
      return true
    }
    return false
  }
}
