import { lsItem } from "@comm-interfaces/lsItem";
import { NumRange } from "@comm-interfaces/numRange";

/**Constant strings used as reference in LocalStorage. */
export const lsConst = {
    RANGE: {
        key: "Range",
        value: { min: 0, max: 1000 } as NumRange
    } as lsItem,

    PLAYERS: {
        key: "Players",
        value: ["Player1", "Player2"] as string[]
    } as lsItem,

    RND_STARTINGPLAYER: {
        key: "RND_StartingPlayer",
        value: true as boolean
    } as lsItem,

    RND_PLAYERORDER: {
        key: "RND_PlayerOrder",
        value: false as boolean
    } as lsItem,
};