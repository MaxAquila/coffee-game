import React from "react";
import { stringConst } from "@comm-consts/stringConst";

interface Props {
    onClickCallback: () => void;
};

const actionNewGame = (props: Props) => {
    const { onClickCallback } = props;
    
    return (
        <button type="button" className="btn btn-secondary btn-function" onClick={onClickCallback}>{stringConst.START_NEW_GAME}</button>
    );
};
export const ActionNewGame = React.memo(actionNewGame, (prev: Props, next: Props) => {
    return prev.onClickCallback !== next.onClickCallback;
});