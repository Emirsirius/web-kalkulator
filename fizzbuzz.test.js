import { fizzBuzz } from './fizzbuzz.js';

describe('fizzBuzz', () => {
    test('returns "1" for 1', () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    test('returns "Fizz" for 3', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    test('returns "Buzz" for 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    test('returns "FizzBuzz" for 15', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
});