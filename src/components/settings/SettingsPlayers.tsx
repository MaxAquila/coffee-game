import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";
import { SettingsPlayersList, SettingsPlayersListProps } from "@comp-settings/SettingsPlayersList";


/**Limit of players in list. */
const limit: number = 8;


//#region Form
/**Fields definition. */
interface FormValues {
    /**Name of the player. */
    name: string;
};
/**Default values of the form. */
const defaultForm: FormValues = {
    name: ""
}
/**Form validation schema. */
const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Name is required")
        .max(16, "Maximum 16 characters")
});
/**Form options definition. */
const formOptions = {
    defaultValues: defaultForm,
    resolver: yupResolver(validationSchema)
};
//#endregion Form


export const SettingsPlayers = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);
    const { register, handleSubmit, reset, formState } = useForm<FormValues>(formOptions);
    const { errors } = formState;

    const idDisabled: boolean = storage.length >= limit;

    const onSubmit = handleSubmit((data) => {
        const newPlayer: string = data.name;
        if (idDisabled || newPlayer === "") {
            return;
        }
        const newList: string[] = [...storage, newPlayer];
        const uniqueList: string[] = newList.filter((v, i, a) => a.indexOf(v) === i);
        setStorage(uniqueList);
        reset();
        onSuccessCallback?.();
    });

    const onRemovePlayer = (index: number) => {
        setStorage(storage.filter((p, i) => i !== index));
        onSuccessCallback?.();
    };

    //#region props
    const settingsPlayersListProps: SettingsPlayersListProps = {
        players: storage,
        onRemovePlayerCallback: onRemovePlayer
    };
    //#endregion props

    return (<>
        <form className="form-group" onSubmit={onSubmit}>
            <div className="input-group">
                <label className="input-group-text">New player:</label>
                <input {...register("name")} className={`form-control ${errors.name ? 'is-invalid' : ''}`} disabled={idDisabled} maxLength={20} />
                <button type="submit" className="btn btn-primary" disabled={idDisabled}>Set</button>
                <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
        </form>
        <SettingsPlayersList {...settingsPlayersListProps} />
    </>);
};