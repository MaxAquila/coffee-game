import { useMemo } from "react";
import { matchStep } from "@comm-interfaces/matchStep";

interface Props {
    steps: matchStep[];
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