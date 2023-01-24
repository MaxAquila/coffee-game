import { useMemo } from "react";
import { NumRange } from "@comm-interfaces/numRange";

export interface GameStepsListProps {
    readonly players: string[];
    readonly offset: number;
    readonly steps: NumRange[];
};

export const GameStepsList = (props: GameStepsListProps) => {
    const { players, offset, steps } = props;

    const listSteps: JSX.Element[] = useMemo(() => {
        return steps.map((s, i) => {
            const playerName: string = i === steps.length - 1 ? "Start" : players[(steps.length - i - 2 + offset) % players.length];
            return <li key={`${s.min}─${s.max}`}><span className="player-name">{`${playerName}: `}</span>{`${s.min} ─ ${s.max}`}</li>;
        });
    }, [steps]);

    return (
        <ul className="list-unstyled">{listSteps}</ul>
    );
};