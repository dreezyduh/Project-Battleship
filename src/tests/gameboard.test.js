
import Gameboard, { posToCoords } from "../gameboard";
import Ship from "../ship";


const player1Board = new Gameboard()
const ship = new Ship(3)
const ship2 = new Ship(2)

test('Convert 1, 1 as 1', () => {
    expect(posToCoords(1, 1)).toBe(0)
})

test('Convert 7, 7 as 67', () => {
    expect(posToCoords(7, 7)).toBe(66)
})

test('Convert 10, 10 as 99', () => {
    expect(posToCoords(10, 10)).toBe(99)
})

test('1, 1 is empty', () => {
    expect(player1Board.checkIfCoordsEmpty(1, 1)).toBe(true)
})

test('Place ship at 1, 1 up', () => {
    expect(() => {
        player1Board.placeShip(1, 1, ship, 'up');
    }).toThrow('No room')
})

test('Place ship at 1, 1 down', () => {
    expect(player1Board.placeShip(1, 1, ship, 'down')).toBe(true)
})

test('Cannot place ship2 at 1, 1 over ship1', () => {
    expect(() => {
        player1Board.placeShip(1, 1, ship2, 'down')
    }).toThrow('Cannot place over another ship')
})

test('Ship has 2 hits', () => {
    expect(player1Board.receiveAttack(1, 1)).toBe(true)
})

test('Shot misses ship', () => {
    expect(player1Board.receiveAttack(2, 1)).toBe(false)
})