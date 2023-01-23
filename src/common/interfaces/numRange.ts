/**Range of values. */
export interface NumRange {
    /**@readonly Minimum value of the range. */
    readonly min: number;
    /**@readonly Maximum value of the range. */
    readonly max: number;
};

/**Returns the range of values (inclusive) available to take the next step in the game.
 * @param limit range of values (exclusive).
 */
export const GetMatchRange = (limit: NumRange) => {
    const isGameOver: boolean = limit.min === limit.max;
    return {
        min: isGameOver ? limit.min : Number(limit.min) + 1,
        max: isGameOver ? limit.max : Number(limit.max) - 1
    } as NumRange;
};