import { NumRange } from "@comm-interfaces/numRange";

interface Props {
    players: string[];
    offset: number;
    steps: NumRange[];
};

export const GameNextPlayer = (props: Props) => {
    const { players, offset, steps } = props;

    return (
        <p>Next turn: <span className="player-name">{players[(steps.length - 1 + offset) % players.length]}</span></p>
    );
};