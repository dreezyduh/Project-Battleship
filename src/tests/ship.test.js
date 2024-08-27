import Ship from "../ship";

describe('Create a 5 and a 2 length ship and test them', () => {
    const five = new Ship(5);
    const two = new Ship(2);
    test('Five length ship', () => {
        expect(five.length).toBe(5)
    })
    test('Two length ship', () => {
        expect(two.length).toBe(2)
    })
    test('Five gets hit once', () => {
        five.hit()
        expect(five.timesHit).toBe(1);
    })
    test('Two gets hit twice and sinks', () => {
        two.hit()
        two.hit()
        expect(two.sunk).toBe(true);
    })
})

