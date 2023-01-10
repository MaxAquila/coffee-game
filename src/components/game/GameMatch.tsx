import { matchStep } from "@comm-interfaces/matchStep";
import { useEffect, useState } from "react";

interface Props {
    jolly: number;
    steps: matchStep[];
    updateStepsCallback: (newSteps: matchStep[]) => void;
}

export const GameMatch = ({ jolly, steps, updateStepsCallback }: Props) => {
    const lastInsertedStep = steps[0];
    const [newValue, setNewValue] = useState<number>(lastInsertedStep.min);

    const listSteps = steps.map((s) => <li key={`${s.min}─${s.max}`}>{`Min: ${s.min} ─ Max: ${s.max}`}</li>);
    if (lastInsertedStep.min == lastInsertedStep.max) {
        listSteps.unshift(<li key="GameOver" className="GameOver"><strong>!!! GAME OVER !!!</strong></li>);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onClickNewValue();
    };

    const handleChangeNewValue = (e: any) => {
        setNewValue(e.target.value);
    }

    const onClickNewValue = () => {
        const oldSteps = steps.slice();
        const lastInsertedStep = oldSteps[0];
        const newStep: matchStep = (newValue == jolly)
            ? { min: jolly, max: jolly }
            : (newValue < jolly)
                ? { min: newValue, max: lastInsertedStep.max }
                : { min: lastInsertedStep.min, max: newValue };
        if (newStep.min != lastInsertedStep.min || newStep.max != lastInsertedStep.max) {
            oldSteps.unshift(newStep);
        }
        updateStepsCallback(oldSteps);
    }

    useEffect(() => {
        const lastInsertedStep = steps[0];
        if (lastInsertedStep.min == lastInsertedStep.max) {
            setNewValue(jolly);
        }
        else if (newValue <= lastInsertedStep.min) {
            setNewValue(lastInsertedStep.min + 1);
        }
        else if (newValue >= lastInsertedStep.max) {
            setNewValue(lastInsertedStep.max - 1);
        }
    });

    return (
        <div className="top-buffer">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="input-group mb-3" onSubmit={handleSubmit}>
                        <label className="input-group-text">New value:</label>
                        <input className="form-control" type="number" value={newValue} onChange={handleChangeNewValue} />
                        <button type="button" className="btn btn-primary" onClick={onClickNewValue}>Insert</button>
                    </form>
                </div>
            </div>
            <label className="GameOver"><strong>!!! GAME OVER !!!</strong></label>
            <div className="scrollable">
                <ul className="list-unstyled">{listSteps}</ul>
            </div>
        </div>
    );
}