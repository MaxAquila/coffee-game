import { useMemo } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { NumRange } from "@comm-interfaces/numRange";

interface Props {
    steps: NumRange[];
};

export const GameStepsList = (props: Props) => {
    const { steps } = props;

    const [players] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);

    const listSteps: JSX.Element[] = useMemo(() => {
        return steps.map((s, i) => {
            const playerName: string = i === steps.length - 1 ? "Start" : players[(steps.length - i - 2) % players.length];
            return <li key={`${s.min}─${s.max}`}><span className="player-name">{`${playerName}: `}</span>{`${s.min} ─ ${s.max}`}</li>;
        });
    }, [steps]);

    return (
        <ul className="list-unstyled">{listSteps}</ul>
    );
};