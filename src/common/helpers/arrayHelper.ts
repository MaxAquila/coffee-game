/**Returns a shuffled array.
 * @param arr is the starting array.
 * @returns a new array.
 */
export function shuffle(arr: any[]) {
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