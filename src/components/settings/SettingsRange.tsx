import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { stringConst } from "@comm-consts/stringConst";
import { validationConst } from "@comm-consts/validationConst";
import { enumAlert } from "@comm-enums/enumAlert";
import { getRandom } from "@comm-helpers/mathHelper";
import { objectCompare } from "@comm-helpers/objectHelper";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { NumRange } from "@comm-interfaces/numRange";
import { IRootState } from "@comm-redux/store";
import { setRange, setRangeMax } from "@comm-redux/slices/range.slice";
import { alertDefault, AlertManager, AlertManagerProps } from "@comp-settings/common/AlertManager";


/**Absolute limits of the range. */
const limit: NumRange = { min: 0, max: 99999 };


export const SettingsRange = () => {

    const range: NumRange = useSelector<IRootState, NumRange>(state => state.range);
    const dispatch = useDispatch();
    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);
    const { register, handleSubmit, formState: { errors } } = useForm<NumRange>({
        defaultValues: { min: range.min, max: range.max } as NumRange,
        mode: "onChange",
        resolver: yupResolver(yup.object().shape({
            min: yup.number().integer().typeError(stringInterpolation(validationConst.INTEGER, "Min"))
                .required(stringInterpolation(validationConst.REQUIRED, "Min"))
                .min(limit.min, stringInterpolation(validationConst.OUTOFLIMIT, ["Min", limit.min]))
                .max(limit.max, stringInterpolation(validationConst.OUTOFLIMIT, ["Min", limit.max])),
            max: yup.number().integer().typeError(stringInterpolation(validationConst.INTEGER, "Min"))
                .required(stringInterpolation(validationConst.REQUIRED, "Max"))
                .min(limit.min, stringInterpolation(validationConst.OUTOFLIMIT, ["Max", limit.min]))
                .max(limit.max, stringInterpolation(validationConst.OUTOFLIMIT, ["Max", limit.max]))
                .moreThan(yup.ref("min"), stringInterpolation(validationConst.MORETHAN, ["Max", "Min"]))
        }))
    });

    const onSubmit = handleSubmit((data) => {
        if (objectCompare(data, range)) {
            setAlert(enumAlert.Warning);
            return;
        };
        dispatch(setRange({ min: data.min, max: data.max }));
        setAlert(enumAlert.Success);
    });

    const setAlert = (type: enumAlert): void => {
        let message: string;
        switch (type) {
            case enumAlert.Success:
                message = stringConst.SUCCESS_RANGE_SETTINGS;
                break;
            case enumAlert.Warning:
                message = stringConst.WARNING_RANGE_SETTINGS;
                break;
            case enumAlert.None:
            default:
                message = "";
                break;
        }

        setAlertProps({
            type: type,
            message: message,
            callID: getRandom()
        });
    };

    return (<>
        <div className="row d-flex justify-content-center pt-3">
            <div className="col col-lg-6">
                <form className="input-group" onSubmit={onSubmit}>
                    <label className="input-group-text">Range:</label>
                    <label className="input-group-text">Min</label>
                    <input {...register("min")} className={`form-control ${errors.min ? 'is-invalid' : ''}`} type="number" min={limit.min} max={limit.max} />
                    <label className="input-group-text">Max</label>
                    <input {...register("max")} className={`form-control ${errors.max ? 'is-invalid' : ''}`} type="number" min={limit.min} max={limit.max} />
                    <button type="submit" className="btn btn-primary">Set</button>
                    <div className="invalid-feedback">{errors.min?.message}</div>
                    <div className="invalid-feedback">{errors.max?.message}</div>
                </form>
                <AlertManager {...alertProps} />
            </div>
        </div>
    </>);
};