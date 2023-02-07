import { NumRange } from "@comm-interfaces/numRange";
import { Player } from "@comm-models/player";

/**props of 
 * {@link GameNextPlayer}
 */
export interface GameNextPlayerProps {
    /**@readonly Players list with all their names. */
    readonly players: Player[];
    /**@readonly Index of the starting player. */
    readonly offset: number;
    /**@readonly Steps list of current match. */
    readonly steps: NumRange[];
};

export const GameNextPlayer = (props: GameNextPlayerProps) => {
    const { players, offset, steps } = props;
    const idx = (steps.length - 1 + offset) % players.length;

    return (
        <span>Next turn: <span className="player-name">{players[idx].name}</span> <span className="fontlittle">as</span> "<span className="battlename">{players[idx].nickname}</span>"</span>
    );
};