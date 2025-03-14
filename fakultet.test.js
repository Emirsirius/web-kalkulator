import { fakultet } from './fakultet.js';

test('fakultet av 0 er 1', () => {
    expect(fakultet(0)).toBe(1);
});

test('fakultet av 5 er 120', () => {
    expect(fakultet(5)).toBe(120);
});

test('fakultet av -1 er -1', () => {
    expect(fakultet(-1)).toBe(-1);
});