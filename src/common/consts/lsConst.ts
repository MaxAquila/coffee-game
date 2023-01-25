import { lsItem } from "@comm-interfaces/lsItem";
import { NumRange } from "@comm-interfaces/numRange";

/**Constant strings used as reference in LocalStorage. */
export const lsConst = {
    /**Range limit in a game match. */
    RANGE: {
        key: "Range",
        value: { min: 0, max: 100 } as NumRange
    } as lsItem,

    /**Players list. */
    PLAYERS: {
        key: "Players",
        value: ["Player1", "Player2"] as string[]
    } as lsItem,

    /**Defines whether the starting player is randomized. */
    RND_STARTINGPLAYER: {
        key: "RND_StartingPlayer",
        value: true as boolean
    } as lsItem,

    /**Defines whether the players order is randomized. */
    RND_PLAYERORDER: {
        key: "RND_PlayerOrder",
        value: false as boolean
    } as lsItem,
};