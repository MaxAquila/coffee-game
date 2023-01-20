import { useState } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { NumRange } from "@comm-interfaces/numRange";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";

const limit: NumRange = { min: 0, max: 99999 };

export const SettingsRange = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<NumRange>(lsConst.RANGE.key, lsConst.RANGE.value);
    const [range, setRange] = useState<NumRange>(storage);

    const handleChange = (e: any) => {
        switch (e.target.name) {
            case "min":
                setRange({ min: Number(e.target.value), max: range.max })
                break;
            case "max":
                setRange({ min: range.min, max: Number(e.target.value) })
                break;
        };
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (range.min < limit.min || range.max > limit.max) {
            return;
        }
        setStorage(range);
        onSuccessCallback?.();
    };

    return (<>
        <form className="input-group" onSubmit={handleSubmit}>
            <label className="input-group-text">Range:</label>
            <label className="input-group-text">Min</label>
            <input name="min" className="form-control" type="number" value={range.min} min={limit.min} max={range.max} onChange={handleChange} />
            <label className="input-group-text">Max</label>
            <input name="max" className="form-control" type="number" value={range.max} min={range.min} max={limit.max} onChange={handleChange} />
            <button type="submit" className="btn btn-primary">Set</button>
        </form>
    </>);
};