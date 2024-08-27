export default class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit += 1;
    this.isSunk();
    return this.timesHit;
  }

  isSunk() {
    if (this.timesHit === this.length) return (this.sunk = true);
  }

  stats() {
    return this.length + ` long, ` + this.timesHit + ` hit, sunk: ` + this.sunk;
  }
}
