import { useMemo } from "react";
import { NumRange } from "@comm-interfaces/numRange";

interface Props {
    steps: NumRange[];
};

export const GameStepsList = (props: Props) => {
    const { steps } = props;

    const listSteps: JSX.Element[] = useMemo(() => {
        return steps.map((s) => <li key={`${s.min}─${s.max}`}>{`Min: ${s.min} ─ Max: ${s.max}`}</li>);
    }, [steps]);

    return (
        <ul className="list-unstyled">{listSteps}</ul>
    );
};