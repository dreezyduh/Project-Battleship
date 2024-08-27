export default class Gameboard {
  constructor() {
    this.board = [];
    for (let i = 0; i < 100; i++) {
      this.board.push({ hasShip: false, isHit: false });
    }
    this.missedAttacks = [];
  }

  placeShip(posX, posY, ship, orientation) {
    if (this.checkIfCoordsEmpty(posX, posY)) {
      this.getShipPosFromOrientation(posX, posY, ship, orientation);
      return true;
    } else {
      throw new Error('Cannot place over another ship');
    }
  }

  receiveAttack(posX, posY) {
    const coords = posToCoords(posX, posY);
    if (!this.board[coords]) {
      return false;
    }
    if (
      this.board[coords] &&
      this.board[coords].hasShip &&
      this.board[coords].isHit === false
    ) {
      this.board[coords].isHit = true;
      this.board[coords].hasShip.hit();
      return true;
    }
    this.board[coords].isHit = true;
    this.missedAttacks.push(coords);
    console.log('pushing missed');
    return false;
  }

  checkIfCoordsEmpty(posX, posY) {
    const coords = posToCoords(posX, posY);
    if (this.board[coords] && this.board[coords].hasShip === false) {
      return true;
    }
    return false;
  }

  getShipPosFromOrientation(posX, posY, ship, orientation) {
    let queue = [];
    queue.push([posX, posY]);
    for (let i = 1; i < ship.length; i++) {
      if (orientation === 'up') {
        posY--;
      } else if (orientation === 'down') {
        posY++;
      } else if (orientation === 'left') {
        posX--;
      } else if (orientation === 'right') {
        posX++;
      }
      if (posX > 0 && posY > 0 && posX < 11 && posY < 11) {
        console.log(posX, posY);
        console.log(this.checkIfCoordsEmpty(posX, posY));
        if (this.checkIfCoordsEmpty(posX, posY) === true) {
          queue.push([posX, posY]);
        }
      }
    }
    // console.log(queue.length, ship.length);
    // console.log('is queue = ship ' + (queue.length === ship.length));
    if (queue.length !== ship.length) {
      throw new Error('No room');
      return;
    }
    while (queue.length > 0) {
      let u = queue.shift();
      let coords = posToCoords(u[0], u[1]);
      this.board[coords].hasShip = ship;
    }
  }
}

export function posToCoords(posX, posY) {
  posX -= 1;
  posY -= 1;
  return posX + posY * 10;
}
