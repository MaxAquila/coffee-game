import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { lsConst } from "@comm-consts/lsConst";
import { stringConst } from "@comm-consts/stringConst";
import { validationConst } from "@comm-consts/validationConst";
import { enumAlert } from "@comm-enums/enumAlert";
import { getRandom } from "@comm-helpers/mathHelper";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { SettingsPlayersList, SettingsPlayersListProps } from "@comp-settings/SettingsPlayersList";
import { alertDefault, AlertManager, AlertManagerProps } from "@comp-settings/common/AlertManager";
import { arrayCompare } from "@comm-helpers/arrayHelper";


/**Limit of players in list. */
const limit: number = 8;


/**Fields definition. */
interface FormFields {
    /**Name of the player. */
    name: string;
};


export const SettingsPlayers = () => {

    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);
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
            setAlert(enumAlert.Warning);
            return;
        }
        const newList: string[] = [...storage, newPlayer];
        const uniqueList: string[] = newList.filter((v, i, a) => a.indexOf(v) === i);
        if (arrayCompare(storage, uniqueList)) {
            setAlert(enumAlert.Danger);
            return;
        }
        setStorage(uniqueList);
        reset();
        setAlert(enumAlert.Success);
    });

    const onRemovePlayer = (index: number) => {
        setStorage(storage.filter((p, i) => i !== index));
        setAlert(enumAlert.Success);
    };

    const setAlert = (type: enumAlert): void => {
        let message: string;
        switch (type) {
            case enumAlert.Danger:
                message = stringConst.DANGER_PLAYERS_SETTINGS;
                break;
            case enumAlert.Success:
                message = stringConst.SUCCESS_PLAYERS_SETTINGS;
                break;
            case enumAlert.Warning:
                message = stringConst.WARNING_PLAYERS_SETTINGS;
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

    //#region props
    const settingsPlayersListProps: SettingsPlayersListProps = {
        players: storage,
        onRemovePlayerCallback: onRemovePlayer
    };
    //#endregion props

    return (<>
        <div className="row d-flex justify-content-center pt-3">
            <div className="col col-lg-6">
                <form className="form-group" onSubmit={onSubmit}>
                    <div className="input-group">
                        <label className="input-group-text">New player:</label>
                        <input {...register("name")} className={`form-control ${errors.name ? 'is-invalid' : ''}`} disabled={idDisabled} maxLength={20} />
                        <button type="submit" className="btn btn-primary" disabled={idDisabled}>Set</button>
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>
                </form>
                <SettingsPlayersList {...settingsPlayersListProps} />
                <AlertManager {...alertProps} />
            </div>
        </div>
    </>);
};