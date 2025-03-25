import { fizzBuzz } from './fizzbuzz.js';

test('fizzBuzz of 1 is "1"', () => {
    expect(fizzBuzz(1)).toBe("1");
});

test('fizzBuzz of 3 is "Fizz"', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});

test('fizzBuzz of 5 is "Buzz"', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('fizzBuzz of 15 is "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});