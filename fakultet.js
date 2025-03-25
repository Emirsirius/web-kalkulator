export function fakultet(n) {
    if (n < 0) return -1;
    if (n === 0) return 0; // Bug: should return 1
    return n * fakultet(n - 1);
}