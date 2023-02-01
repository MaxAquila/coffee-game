import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stringConst } from "@comm-consts/stringConst";
import { getRandom } from "@comm-helpers/mathHelper";
import { enumAlert } from "@comm-enums/enumAlert";
import { IRootState } from "@comm-redux/store";
import { setRandomStartingPlayer } from "@comm-redux/slices/players.slice";
import { alertDefault, AlertManager, AlertManagerProps } from "@comp-settings/common/AlertManager";


export const SettingsStartingPlayer = () => {

    const isRandom: boolean = useSelector<IRootState, boolean>(state => state.players.randomStart);
    const dispatch = useDispatch();
    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);

    const onChangeChecked = (e: any) => {
        dispatch(setRandomStartingPlayer());
        setAlertProps({
            type: enumAlert.Success,
            message: stringConst.SUCCESS_STARTINGPLAYER_SETTINGS,
            callID: getRandom()
        });
    };

    return (<>
        <div className="row d-flex justify-content-center pt-3">
            <div className="col col-lg-6">
                {/* <form className="input-group d-flex flex-column"> */}
                <form className="input-group">
                    <div className="form-check form-switch">
                        <input name="rndStarting" className="form-check-input" type="checkbox" checked={isRandom} onChange={onChangeChecked} />
                        <label className="form-check-label">{stringConst.STARTINGPLAYER_SETTINGS}</label>
                    </div>
                </form>
                <AlertManager {...alertProps} />
            </div>
        </div>
    </>);
};