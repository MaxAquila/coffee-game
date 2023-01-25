import { useEffect, useState } from "react";
import { GetBetRange, NumRange } from "@comm-interfaces/numRange";

/**props of 
 * {@link GameNextStep}
 */
export interface GameNextStepProps {
    /**@readonly Betting range exclusive. */
    readonly range: NumRange;
    /**@readonly Callback to add new step to current match. */
    readonly onNextStepCallback: (newValue: number) => void;
};

export const GameNextStep = (props: GameNextStepProps) => {
    const { range, onNextStepCallback } = props;

    const [newValue, setNewValue] = useState<number>(Number(range.min) + 1);

    const isDisabled: boolean = range.min === range.max;
    const rangeBet: NumRange = GetBetRange(range);

    const handleChangeNewValue = (e: any) => {
        setNewValue(Number(e.target.value));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (isDisabled || newValue < rangeBet.min || newValue > rangeBet.max) {
            return;
        }
        onNextStepCallback(newValue);
    };

    useEffect(() => {
        setNewValue(isDisabled
            ? rangeBet.min
            : (newValue === range.max)
                ? rangeBet.max
                : rangeBet.min)
    }, [range]);

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-auto">
                <form className="input-group" onSubmit={handleSubmit}>
                    <label className="input-group-text">New value:</label>
                    <input className="form-control" type="number" value={newValue} min={rangeBet.min} max={rangeBet.max} onChange={handleChangeNewValue} disabled={isDisabled} required />
                    <button type="submit" className="btn btn-primary" disabled={isDisabled}>Insert</button>
                </form>
            </div>
        </div>
    );
};