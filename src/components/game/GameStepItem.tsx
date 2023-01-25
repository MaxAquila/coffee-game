/**props of 
 * {@link GameStepsItem}
 */
export interface GameStepsItemProps {
    /**@readonly CSS class name to style the item. */
    readonly className?: string;
    /**@readonly Player betting at current step. */
    readonly playerName: string;
    /**@readonly Defines whether this is the last step and the match is game over. */
    readonly isLastGameOver: boolean;
    /**@readonly Min value at current step. */
    readonly min: number;
    /**@readonly Max value at current step. */
    readonly max: number;
};

export const GameStepsItem = (props: GameStepsItemProps) => {
    const { className, playerName, isLastGameOver, min, max } = props;
    
    return (
        <li>
            <div className={className}>
                <span className="player-name">{`${playerName}: `}</span>
                <span>{`${min}${isLastGameOver ? "" : ` ─ ${max}`}`}</span>
            </div>
        </li>
    );
};