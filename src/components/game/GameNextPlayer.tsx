import { NumRange } from "@comm-interfaces/numRange";

export interface GameNextPlayerProps {
    readonly players: string[];
    readonly offset: number;
    readonly steps: NumRange[];
};

export const GameNextPlayer = (props: GameNextPlayerProps) => {
    const { players, offset, steps } = props;

    return (
        <p>Next turn: <span className="player-name">{players[(steps.length - 1 + offset) % players.length]}</span></p>
    );
};