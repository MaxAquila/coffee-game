import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";
import { stringConst } from "@comm-consts/stringConst";

export const SettingsPlayerOrder = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<boolean>(lsConst.RND_PLAYERORDER.key, lsConst.RND_PLAYERORDER.value);

    const onChangeChecked = (e: any) => {
        setStorage(e.target.checked)
        onSuccessCallback?.();
    };

    return (<>
        <form className="input-group d-flex flex-column">
            <div className="form-check form-switch">
                <input name="rndStarting" className="form-check-input" type="checkbox" checked={storage} onChange={onChangeChecked} />
                <label className="form-check-label">{stringConst.PLAYERORDER_SETTINGS}</label>
            </div>
        </form>
    </>);
};