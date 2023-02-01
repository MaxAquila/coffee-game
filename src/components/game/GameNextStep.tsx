import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { validationConst } from "@comm-consts/validationConst";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { GetBetRange, NumRange } from "@comm-interfaces/numRange";


/**Fields definition. */
interface FormFields {
    /**New value to bet. */
    value: number;
};

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

    const isDisabled: boolean = range.min === range.max;
    const rangeBet: NumRange = GetBetRange(range);

    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<FormFields>({
        defaultValues: { value: Number(range.min) + 1 },
        mode: "onChange",
        resolver: yupResolver(yup.object().shape({
            value: yup.number().typeError(stringInterpolation(validationConst.NUMBER, "New value"))
                .required(stringInterpolation(validationConst.REQUIRED, "New value"))
                .min(rangeBet.min, stringInterpolation(validationConst.OUTOFLIMIT, ["New value", rangeBet.min]))
                .max(rangeBet.max, stringInterpolation(validationConst.OUTOFLIMIT, ["New value", rangeBet.max]))
        }))
    });

    const onSubmit = handleSubmit((data) => {
        if (isDisabled || data.value < rangeBet.min || data.value > rangeBet.max) {
            return;
        }
        onNextStepCallback(data.value);
    });

    useEffect(() => {
        reset({
            value: isDisabled
                ? rangeBet.min
                : (Number(getValues("value")) === range.max)
                    ? rangeBet.max
                    : rangeBet.min
        });
    }, [range]);

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-10 col-sm-6 col-lg-4 col-xxl-3">
                <form className="form-group" onSubmit={onSubmit}>
                    <div className="input-group">
                        <label className="input-group-text">New value:</label>
                        <input {...register("value")} className={`form-control ${errors.value ? 'is-invalid' : ''}`} type="number" min={rangeBet.min} max={rangeBet.max} disabled={isDisabled} required />
                        <button type="submit" className="btn btn-primary" disabled={isDisabled}>Insert</button>
                        <div className="invalid-feedback">{errors.value?.message}</div>
                    </div>
                </form>
            </div>
        </div>
    );
};