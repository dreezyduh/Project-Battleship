import Player from "../player";

const player1 = new Player(true, 'P1');
const player2 = new Player(false, 'Nume')

test('Name test for computer player', () => {
    expect(player2.name).toBe('Computer')
})