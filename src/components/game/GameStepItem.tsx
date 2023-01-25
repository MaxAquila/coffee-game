export interface GameStepsItemProps {
    readonly className?: string;
    readonly playerName: string;
    readonly isLastGameOver: boolean;
    readonly min: number;
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