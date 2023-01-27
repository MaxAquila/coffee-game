/**
 * Compare values of two arrays.
 * @param arr1 first array to compare.
 * @param arr2 second array to compare.
 * @returns `true` if the comparison matches, even if one of the two arrays is shuffled.
 */
export function arrayCompare(arr1: any[], arr2: any[]): boolean {
    if (!Array.isArray(arr1)
        || !Array.isArray(arr2)
        || arr1.length !== arr2.length) {
        return false;
    }

    // .concat() to not mutate arguments
    const newArr1: any[] = arr1.concat().sort();
    const newArr2: any[] = arr2.concat().sort();

    for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i] !== newArr2[i]) {
            return false;
        }
    };

    return true;
};


/**
 * Returns a shuffled array.
 * @param arr is the starting array.
 * @returns a new array.
 */
export function shuffle(arr: any[]): any[] {
    const newArr = [...arr];
    let currentIndex: number = newArr.length;
    let randomIndex: number;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
    };

    return newArr;
};