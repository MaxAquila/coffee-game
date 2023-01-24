import { useEffect, useState } from "react";
import { GetMatchRange, NumRange } from "@comm-interfaces/numRange";

export interface GameNextStepProps {
    readonly range: NumRange;
    readonly onNextStepCallback: (newValue: number) => void;
};

export const GameNextStep = (props: GameNextStepProps) => {
    const { range, onNextStepCallback } = props;

    const [newValue, setNewValue] = useState<number>(Number(range.min) + 1);

    const isDisabled: boolean = range.min === range.max;
    const rangeMatch: NumRange = GetMatchRange(range);

    const handleChangeNewValue = (e: any) => {
        setNewValue(Number(e.target.value));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
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
                    <button type="submit" className="btn btn-primary" disabled={isDisabled}>Insert</button>
                </form>
            </div>
        </div>
    );
};