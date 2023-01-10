//Getting a random number between 0 (inclusive) and 1 (exclusive)
export function getRandom() {
    return Math.random();
}

//Getting a random number between two values
export function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

//Getting a random integer between two values
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//Getting a random integer between two values, inclusive
export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//Getting a random integer between two values, exclusive
export function getRandomIntExclusive(min: number, max: number) {
    min = Math.ceil(min) + 1;
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is exclusive
}