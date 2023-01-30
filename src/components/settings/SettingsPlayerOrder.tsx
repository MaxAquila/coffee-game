import { useState } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { stringConst } from "@comm-consts/stringConst";
import { getRandom } from "@comm-helpers/mathHelper";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { enumAlert } from "@comm-enums/enumAlert";
import { alertDefault, AlertManager, AlertManagerProps } from "@comp-settings/common/AlertManager";


export const SettingsPlayerOrder = () => {

    const [alertProps, setAlertProps] = useState<AlertManagerProps>(alertDefault);
    const [storage, setStorage] = useLocalStorage<boolean>(lsConst.RND_PLAYERORDER.key, lsConst.RND_PLAYERORDER.value);

    const onChangeChecked = (e: any) => {
        setStorage(e.target.checked)
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
                        <input name="rndStarting" className="form-check-input" type="checkbox" checked={storage} onChange={onChangeChecked} />
                        <label className="form-check-label">{stringConst.PLAYERORDER_SETTINGS}</label>
                    </div>
                </form>
                <AlertManager {...alertProps} />
            </div>
        </div>
    </>);
};