import loadingIcon from '@assets/loading32px.png';
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
import { playersAsyncThunks } from "@comm-redux/asyncThunks/players.thunk";
import { Player } from "@comm-models/player";
import { simulateDelay } from '@comm-consts/delayConst';


/**Limit of players in list. */
const limit: number = 8;


/**Fields definition. */
interface FormFields {
    /**Name of the player. */
    name: string;
};


export const SettingsPlayers = () => {

    const players: Player[] = useSelector<IRootState, Player[]>(state => state.players.list);
    const dispatch = useDispatch<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFields>({
        defaultValues: { name: "" },
        resolver: yupResolver(yup.object().shape({
            name: yup.string()
                .required(stringInterpolation(validationConst.REQUIRED, "Name"))
                .max(16, stringInterpolation(validationConst.REQUIRED, 16))
        }))
    });

    const idDisabled: boolean = players.length >= limit || isLoading;

    const onSubmit = handleSubmit(async (data) => {
        const newPlayer: string = data.name;
        if (idDisabled || newPlayer === "") {
            setAlert(enumAlert.Warning);
            return;
        }
        if (players.some(p => p.name === newPlayer)) {
            setAlert(enumAlert.Danger);
            return;
        }
        // dispatch(addPlayer(newPlayer));
        setIsLoading(true);
        setAlert(enumAlert.Info);
        await simulateDelay(2000);
        const fetchedNickname = await dispatch(playersAsyncThunks.getRandomNickname(newPlayer));
        if (fetchedNickname.error) {
            setAlertProps({
                type: enumAlert.Danger,
                message: fetchedNickname.error?.message ?? "Unable to get a random nickname.",
                callID: getRandom()
            });
            setIsLoading(false);
            return;
        }
        // if (!(await dispatch(playersAsyncThunks.getRandomNickname(newPlayer))).payload) {
        //     await dispatch(addPlayer(newPlayer));
        // }
        reset();
        setIsLoading(false);
        setAlert(enumAlert.Success);
    });

    const onRemovePlayer = (index: number) => {
        dispatch(delPlayer(players[index].name));
        setAlert(enumAlert.Success);
    };

    const setAlert = (type: enumAlert): void => {
        let message: string;
        switch (type) {
            case enumAlert.Danger:
                message = stringConst.DANGER_PLAYERS_SETTINGS;
                break;
            case enumAlert.Info:
                message = stringConst.INFO_PLAYERS_SETTINGS;
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
                        {isLoading
                            ? <img src={loadingIcon} className="loading-icon" alt="loading" />
                            : <button type="submit" className="btn btn-primary" disabled={idDisabled}>Set</button>
                        }
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>
                </form>
                <SettingsPlayersList {...settingsPlayersListProps} />
                <AlertManager {...alertProps} />
            </div>
        </div>
    </>);
};