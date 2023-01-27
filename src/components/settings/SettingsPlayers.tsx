import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { lsConst } from "@comm-consts/lsConst";
import { validationConst } from "@comm-consts/validationConst";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";
import { SettingsPlayersList, SettingsPlayersListProps } from "@comp-settings/SettingsPlayersList";


/**Limit of players in list. */
const limit: number = 8;


/**Fields definition. */
interface FormFields {
    /**Name of the player. */
    name: string;
};


export const SettingsPlayers = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFields>({
        defaultValues: { name: "" },
        resolver: yupResolver(yup.object().shape({
            name: yup.string()
                .required(stringInterpolation(validationConst.REQUIRED, "Name"))
                .max(16, stringInterpolation(validationConst.REQUIRED, 16))
        }))
    });

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