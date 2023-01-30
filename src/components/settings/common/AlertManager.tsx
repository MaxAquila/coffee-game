import { useEffect, useState } from "react";
import { delayConst } from "@comm-consts/delayConst";
import { useInterval } from "@comm-hooks/useInterval";
import { enumAlert } from "@comm-enums/enumAlert";
import { AlertDanger } from "@comp-settings/common/AlertDanger";
import { AlertInfo } from "@comp-settings/common/AlertInfo";
import { AlertSuccess } from "@comp-settings/common/AlertSuccess";
import { AlertWarning } from "@comp-settings/common/AlertWarning";


/**props of 
 * {@link AlertManager}
 */
export interface AlertManagerProps extends AlertManagerChildProps {
    /**@readonly Alert type. */
    readonly type: enumAlert;
    readonly callID: number;
};

/**Props needed for the child component. */
export interface AlertManagerChildProps {
    /**@readonly Message to show. */
    readonly message: string;
}


/**
 * Default alert value.
 */
export const alertDefault: AlertManagerProps = {
    type: enumAlert.None,
    message: "",
    callID: -1
};


export const AlertManager = (props: AlertManagerProps) => {
    const { type, message, callID } = props;

    const [visible, setVisible] = useState<boolean>(false);

    const hide = () => {
        setVisible(false);
    };
    useInterval(hide, visible ? delayConst.INTERVAL_ALERT : null);

    const renderAlert = () => {
        switch (type) {
            case enumAlert.Danger:
                return <AlertDanger message={message} />;
            case enumAlert.Info:
                return <AlertInfo message={message} />;
            case enumAlert.Success:
                return <AlertSuccess message={message} />;
            case enumAlert.Warning:
                return <AlertWarning message={message} />;
            case enumAlert.None:
            default:
                return <></>
        };
    };

    useEffect(() => {
        setVisible(true);
    }, [callID]);

    return (<>
        {visible ? renderAlert() : <></>}
    </>);
};