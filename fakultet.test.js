import { fakultet } from './fakultet.js';

describe('fakultet', () => {
    test('returns 1 for 0', () => {
        expect(fakultet(0)).toBe(1);
    });

    test('returns 1 for 1', () => {
        expect(fakultet(1)).toBe(1);
    });

    test('returns 2 for 2', () => {
        expect(fakultet(2)).toBe(2);
    });

    test('returns 6 for 3', () => {
        expect(fakultet(3)).toBe(6);
    });

    test('returns 24 for 4', () => {
        expect(fakultet(4)).toBe(24);
    });

    test('returns undefined for negative numbers', () => {
        expect(fakultet(-1)).toBeUndefined();
    });
})}