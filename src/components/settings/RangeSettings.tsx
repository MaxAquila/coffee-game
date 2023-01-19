import { useState } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { useInterval } from "@comm-hooks/useInterval";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { NumRange } from "@comm-interfaces/numRange";

const limit: NumRange = { min: 0, max: 99999 };

export const RangeSettings = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [storage, setStorage] = useLocalStorage<NumRange>(lsConst.RANGE.key, lsConst.RANGE.value)
    const [range, setRange] = useState<NumRange>(storage);

    const hide = () => setVisible(false);
    useInterval(hide, visible ? 2000 : null);

    const handleChangeNewValue = (e: any) => {
        switch (e.target.name) {
            case "min":
                setRange({min: Number(e.target.value), max: range.max})
                break;
            case "max":
                setRange({min: range.min, max: Number(e.target.value)})
                break;
        };
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (range.min < limit.min || range.max > limit.max){
            return;
        }
        setStorage(range);
        setVisible(true);
    };

    return (
        <div className="row d-flex justify-content-center pt-3">
            <div className="col-auto">
                <form className="input-group" onSubmit={handleSubmit}>
                    <label className="input-group-text">Range:</label>
                    <label className="input-group-text">Min</label>
                    <input name="min" className="form-control" type="number" value={range.min} min={limit.min} max={range.max} onChange={handleChangeNewValue} />
                    <label className="input-group-text">Max</label>
                    <input name="max" className="form-control" type="number" value={range.max} min={range.min} max={limit.max} onChange={handleChangeNewValue} />
                    <button type="submit" className="btn btn-primary">Set</button>
                </form>
                {visible
                    ?
                    <>
                        <div className="alert alert-success d-flex align-items-center alert-ext" role="alert">
                            <svg className="bi flex-shrink-0 me-2" role="img">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <div>Range settings updated!</div>
                        </div>
                    </>
                    : <></>}
            </div>
        </div>
    );
};