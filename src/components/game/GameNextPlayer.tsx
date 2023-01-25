import { NumRange } from "@comm-interfaces/numRange";

/**props of 
 * {@link GameNextPlayer}
 */
export interface GameNextPlayerProps {
    /**@readonly Players list with all their names. */
    readonly players: string[];
    /**@readonly Index of the starting player. */
    readonly offset: number;
    /**@readonly Steps list of current match. */
    readonly steps: NumRange[];
};

export const GameNextPlayer = (props: GameNextPlayerProps) => {
    const { players, offset, steps } = props;

    return (
        <p>Next turn: <span className="player-name">{players[(steps.length - 1 + offset) % players.length]}</span></p>
    );
};