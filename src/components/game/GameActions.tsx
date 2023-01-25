import { ActionNewGame } from "@comp-game/common/ActionNewGame";

/**props of 
 * {@link GameActions}
 */
interface Props {
    /**@readonly Callback on starting new game. */
    readonly onClickNewGameCallback: () => void;
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