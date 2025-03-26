import { fibonacci } from './fibonacci.js';

describe('fibonacci', () => {
    test('returns undefined for 0 or negative numbers', () => {
        expect(fibonacci(0)).toBeUndefined();
        expect(fibonacci(-1)).toBeUndefined();
    });

    test('returns 1 for n=1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('returns 1 for n=2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('returns 2 for n=3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('returns 5 for n=5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('returns 55 for n=10', () => {
        expect(fibonacci(10)).toBe(55);
    });
});