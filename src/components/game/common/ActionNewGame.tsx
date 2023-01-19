import { memo } from "react";
import { stringConst } from "@comm-consts/stringConst";

interface Props {
    onClickCallback: () => void;
};

const _ActionNewGame = (props: Props) => {
    const { onClickCallback } = props;

    return (
        <button type="button" className="btn btn-secondary btn-function" onClick={onClickCallback}>{stringConst.START_NEW_GAME}</button>
    );
};
export const ActionNewGame = memo(_ActionNewGame, (prev: Props, next: Props) => {
    return prev.onClickCallback === next.onClickCallback;
});