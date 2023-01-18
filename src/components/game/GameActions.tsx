import { ActionNewGame } from "@comp-game/common/ActionNewGame";

interface Props {
    onClickNewGameCallback: () => void;
};

export const GameActions = (props: Props) => {
    const { onClickNewGameCallback } = props;

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-auto">
                <ActionNewGame onClickCallback={onClickNewGameCallback} />
            </div>
        </div>
    );
};