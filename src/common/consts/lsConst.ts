import { lsItem } from "@comm-interfaces/lsItem";
import { NumRange } from "@comm-interfaces/numRange";

/**Constant strings used as reference in LocalStorage. */
export const lsConst = {
    RANGE: {
        key: "Range" as string,
        value: { min: 0, max: 1000 } as NumRange
    } as lsItem,

    PLAYERS: {
        key: "Players" as string,
        value: ["Player1", "Player2"] as string[]
    } as lsItem,
};