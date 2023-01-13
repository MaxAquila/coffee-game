import { matchStep } from "@comm-interfaces/matchStep";

interface Props {
    steps: matchStep[];
};

export const GameStepsList = ({ steps }: Props) => {
    const listSteps: JSX.Element[] = steps.map((s) => <li key={`${s.min}─${s.max}`}>{`Min: ${s.min} ─ Max: ${s.max}`}</li>);

    return (
        <ul className="list-unstyled">{listSteps}</ul>
    );
};