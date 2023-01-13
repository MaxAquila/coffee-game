import { matchStep } from "@comm-interfaces/matchStep";
import { useEffect, useState } from "react";

interface Props {
    range: matchStep;
    onNextStepCallback: (newValue: number) => void;
};

export const GameNextStep = ({ range, onNextStepCallback }: Props) => {
    const [newValue, setNewValue] = useState<number>(Number(range.min) + 1);

    const isDisabled: boolean = range.min === range.max;
    const rangeMatch: matchStep = {
        min: isDisabled ? range.min : Number(range.min) + 1,
        max: isDisabled ? range.max : Number(range.max) - 1
    };

    const handleChangeNewValue = (e: any) => {
        setNewValue(Number(e.target.value));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onClickNewValue();
    };

    const onClickNewValue = () => {
        if (isDisabled || newValue < rangeMatch.min || newValue > rangeMatch.max) {
            return;
        }
        onNextStepCallback(newValue);
    };

    useEffect(() => {
        setNewValue(isDisabled
            ? rangeMatch.min
            : (newValue === range.max)
                ? rangeMatch.max
                : rangeMatch.min)
    }, [range]);

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-auto">
                <form className="input-group" onSubmit={handleSubmit}>
                    <label className="input-group-text">New value:</label>
                    <input className="form-control" type="number" value={newValue} min={rangeMatch.min} max={rangeMatch.max} onChange={handleChangeNewValue} disabled={isDisabled} required />
                    <button type="submit" className="btn btn-primary" onClick={onClickNewValue} disabled={isDisabled}>Insert</button>
                </form>
            </div>
        </div>
    );
};