import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { stringConst } from "@comm-consts/stringConst";
import { validationConst } from "@comm-consts/validationConst";
import { enumAlert } from "@comm-enums/enumAlert";
import { getRandom } from "@comm-helpers/mathHelper";
import { stringInterpolation } from "@comm-helpers/stringHelper";
import { IRootState } from "@comm-redux/store";
import { addPlayer, delPlayer } from "@comm-redux/slices/players.slice";
import { SettingsPlayersList, SettingsPlayersListProps } from "@comp-settings/SettingsPlayersList";
import { alertDefault, AlertManager, AlertManagerProps } from "@comp-settings/common/AlertManager";


/**Limit of players in list. */
const limit: number = 8;


/**Fields definition. */
interface FormFields {
    /**Name of the player. */
    name: string;
};


export const SettingsPlayers = () => {

    const players: string[] = useSelector<IRootState, string[]>(state => state.players.names);
    const dispatch = useDispatch();
    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFields>({
        defaultValues: { name: "" },
        resolver: yupResolver(yup.object().shape({
            name: yup.string()
                .required(stringInterpolation(validationConst.REQUIRED, "Name"))
                .max(16, stringInterpolation(validationConst.REQUIRED, 16))
        }))
    });

    const idDisabled: boolean = players.length >= limit;

    const onSubmit = handleSubmit((data) => {
        const newPlayer: string = data.name;
        if (idDisabled || newPlayer === "") {
            setAlert(enumAlert.Warning);
            return;
        }
        if (players.includes(newPlayer)) {
            setAlert(enumAlert.Danger);
            return;
        }
        dispatch(addPlayer(newPlayer));
        reset();
        setAlert(enumAlert.Success);
    });

    const onRemovePlayer = (index: number) => {
        dispatch(delPlayer(players[index]));
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
        players: players,
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