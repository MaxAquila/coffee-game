import { AlertManagerChildProps } from "@comp-settings/common/AlertManager";

export const AlertSuccess = (props: AlertManagerChildProps) => {
    const { message } = props;

    return (<>
        <div className="alert alert-success d-flex align-items-center alert-ext" role="alert">
            <svg className="bi flex-shrink-0 me-2" role="img">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>{message}</div>
        </div>
    </>);
};