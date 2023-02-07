import { Player } from "@comm-models/player";

/**props of 
 * {@link GameStepsItem}
 */
export interface GameStepsItemProps {
    /**@readonly CSS class name to style the item. */
    readonly className?: string;
    /**@readonly Player betting at current step. */
    readonly player: string | Player;
    /**@readonly Defines whether this is the last step and the match is game over. */
    readonly isLastGameOver: boolean;
    /**@readonly Min value at current step. */
    readonly min: number;
    /**@readonly Max value at current step. */
    readonly max: number;
};

export const GameStepsItem = (props: GameStepsItemProps) => {
    const { className, player, isLastGameOver, min, max } = props;

    return (
        <li>
            <div className={className}>
                {typeof player === "string"
                    ? <span className="player-name">{`${player}: `}</span>
                    : <>
                        <span className="player-name">{`${player.name}`}</span>
                        <span className="fontlittle">{` as `}</span>
                        "<span className="battlename">{player.nickname}</span>"
                    </>
                }
                <span>{`: ${min}${isLastGameOver ? "" : ` ─ ${max}`}`}</span>
            </div>
        </li>
    );
};