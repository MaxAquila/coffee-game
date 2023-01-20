import { useMemo } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { NumRange } from "@comm-interfaces/numRange";

interface Props {
    steps: NumRange[];
};

export const GameNextPlayer = (props: Props) => {
    const { steps } = props;

    const [players] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);

    return (
        <p>Next turn: <span className="player-name">{players[(steps.length - 1) % players.length]}</span></p>
    );
};