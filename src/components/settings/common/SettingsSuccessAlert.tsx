import { useState } from "react";
import { useInterval } from "@comm-hooks/useInterval";

/**props of 
 * {@link SettingsSuccessAlert}
 */
interface SettingsSuccessAlertProps {
    /**@readonly Child element of the component. */
    readonly children: JSX.Element;
    /**@readonly Message on success. */
    readonly successMsg: string;
};

/**Props needed for the child component. */
export interface PropsChild {
    /**@readonly Callback on success. */
    readonly onSuccessCallback?: () => void;
}

/**Delay of {@link useInterval}. */
const delay: number = 2000;

export const SettingsSuccessAlert = (props: SettingsSuccessAlertProps) => {
    const { children, successMsg: alertMsg } = props;

    const [visible, setVisible] = useState<boolean>(false);

    const hide = () => setVisible(false);
    useInterval(hide, visible ? delay : null);

    const onSuccess = () => {
        setVisible(true);
    };

    return (
        <div className="row d-flex justify-content-center pt-3">
            <div className="col col-lg-6">
                <children.type
                    {...children?.props}
                    onSuccessCallback={onSuccess}
                />
                {visible
                    ?
                    <>
                        <div className="alert alert-success d-flex align-items-center alert-ext" role="alert">
                            <svg className="bi flex-shrink-0 me-2" role="img">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            <div>{alertMsg}</div>
                        </div>
                    </>
                    : <></>}
            </div>
        </div>
    );
};