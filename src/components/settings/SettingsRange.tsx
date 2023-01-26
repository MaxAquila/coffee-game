import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { lsConst } from "@comm-consts/lsConst";
import { validationConst } from "@comm-consts/validationConst";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { NumRange } from "@comm-interfaces/numRange";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";


/**Absolute limits of the range. */
const limit: NumRange = { min: 0, max: 99999 };


//#region Form
/**Fields definition. */
interface FormValues {
    /**Min of the range. */
    min: number | undefined;
    /**Max of the range. */
    max: number | undefined;
};
/**Default values of the form. */
const defaultForm: FormValues = {
    min: 0,
    max: 100
}
/**Form validation schema. */
const validationSchema = yup.object().shape({
    min: yup.number().typeError(stringInterpolation(validationConst.NUMBER, "Min"))
        .required(stringInterpolation(validationConst.REQUIRED, "Min"))
        .min(limit.min, stringInterpolation(validationConst.OUTOFLIMIT, ["Min", limit.min]))
        .max(limit.max, stringInterpolation(validationConst.OUTOFLIMIT, ["Min", limit.max])),
        // .lessThan(yup.ref('max'), "Min must be less than Max"),
    max: yup.number().typeError(stringInterpolation(validationConst.NUMBER, "Min"))
        .required(stringInterpolation(validationConst.REQUIRED, "Max"))
        .min(limit.min, stringInterpolation(validationConst.OUTOFLIMIT, ["Max", limit.min]))
        .max(limit.max, stringInterpolation(validationConst.OUTOFLIMIT, ["Max", limit.max]))
        .moreThan(yup.ref("min"), stringInterpolation(validationConst.MORETHAN, ["Max", "Min"]))
});
/**Form options definition. */
const formOptions = {
    defaultValues: defaultForm,
    resolver: yupResolver(validationSchema)
};
//#endregion Form


export const SettingsRange = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<NumRange>(lsConst.RANGE.key, lsConst.RANGE.value);
    defaultForm.min = storage.min;
    defaultForm.max = storage.max;
    const { register, handleSubmit, formState } = useForm<FormValues>(formOptions);
    const { errors } = formState;

    const onSubmit = handleSubmit((data) => {
        setStorage({ min: data.min, max: data.max } as NumRange);
        onSuccessCallback?.();
    });

    return (<>
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
    </>);
};