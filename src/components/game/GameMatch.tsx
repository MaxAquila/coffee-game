import { matchStep } from "@comm-interfaces/matchStep";
import { useEffect, useState } from "react";

interface Props {
    jolly: number;
    steps: matchStep[];
    updateStepsCallback: (newSteps: matchStep[]) => void;
}

export const GameMatch = ({ jolly, steps, updateStepsCallback }: Props) => {
    const lastInsertedStep = steps[0];
    const isGameOver = lastInsertedStep.min == lastInsertedStep.max;
    const range: matchStep = { min: isGameOver ? jolly : Number(lastInsertedStep.min) + 1, max: isGameOver ? jolly : Number(lastInsertedStep.max) - 1 };
    // const [range, setRange] = useState<matchStep>({min: isGameOver ? jolly : Number(lastInsertedStep.min) + 1, max: isGameOver ? jolly : Number(lastInsertedStep.max) - 1});
    const [newValue, setNewValue] = useState<number>(lastInsertedStep.min);

    const listSteps = steps.map((s) => <li key={`${s.min}─${s.max}`}>{`Min: ${s.min} ─ Max: ${s.max}`}</li>);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onClickNewValue();
    };

    const handleChangeNewValue = (e: any) => {
        setNewValue(e.target.value);
    }

    const onClickNewValue = () => {
        const msgOutOfRange = "!!! ATTENTION !!!\nThe new value is out of range";
        if (isGameOver) {
            alert("!!! GAME OVER !!!\nStart a new game");
            return;
        }
        else if (newValue < range.min) {
            setNewValue(range.min);
            alert(msgOutOfRange);
            return;
        }
        else if (newValue > range.max) {
            setNewValue(range.max);
            alert(msgOutOfRange);
            return;
        }
        const oldSteps = steps.slice();
        const newStep: matchStep = (newValue == jolly)
            ? { min: jolly, max: jolly }
            : (newValue < jolly)
                ? { min: newValue, max: lastInsertedStep.max }
                : { min: lastInsertedStep.min, max: newValue };
        if (newStep.min != lastInsertedStep.min || newStep.max != lastInsertedStep.max) {
            oldSteps.unshift(newStep);
        }
        setNewValue((newValue == newStep.min) ? Number(newStep.min) + 1 : Number(newStep.max) - 1);
        updateStepsCallback(oldSteps);
    }

    return (
        <div className="top-buffer">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="input-group mb-3" onSubmit={handleSubmit}>
                        <label className="input-group-text">New value:</label>
                        <input className="form-control" type="number" value={newValue} min={range.min} max={range.max} onChange={handleChangeNewValue} required disabled={isGameOver} />
                        <button type="button" className="btn btn-primary" onClick={onClickNewValue} disabled={isGameOver}>Insert</button>
                    </form>
                </div>
            </div>
            {isGameOver ? <label className="GameOver"><strong>!!! GAME OVER !!!</strong></label> : <></>}
            <div className="scrollable">
                <ul className="list-unstyled">{listSteps}</ul>
            </div>
        </div>
    );
}