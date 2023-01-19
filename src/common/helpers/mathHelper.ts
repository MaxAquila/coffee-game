/**Returns a random number between 0 and 1.
 * @remarks The minimum is inclusive and the maximum is exclusive.
 */
export function getRandom() {
    return Math.random();
};

/**Returns a random number between two values.
 * @param min - is the minimum number.
 * @param max - is the maximum number.
 */
export function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
};

/**Returns a random integer between two values.
 * @remarks The minimum is inclusive and the maximum is exclusive.
 * @param min - is the minimum integer.
 * @param max - is the maximum integer.
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

/**Returns a random integer between two values (inclusive).
 * @remarks The minimum is inclusive and the maximum is inclusive.
 * @param min - is the minimum integer.
 * @param max - is the maximum integer.
 */
export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**Returns a random integer between two values (exclusive).
 * @remarks The minimum is exclusive and the maximum is exclusive.
 * @param min - is the minimum integer.
 * @param max - is the maximum integer.
 */
export function getRandomIntExclusive(min: number, max: number) {
    min = Math.ceil(min) + 1;
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
};