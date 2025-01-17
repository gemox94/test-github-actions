import { addNumbers, subtractNumbers } from "../helpers"


describe('Index page utility functions', () => {
    it('addNumbers should return correct sum (this test should pass)', () => {
        // This should pass because 2 + 2 = 4
        expect(addNumbers(2, 2)).toBe(4);
    });

    it('subtractNumbers should return incorrect difference (this test will fail)', () => {
        // This will FAIL because 5 - 2 = 3, but we deliberately expect 0
        expect(subtractNumbers(5, 2)).toBe(3);
    });
});