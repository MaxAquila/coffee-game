export interface GameStepsItemProps {
    readonly key?: React.Key;
    readonly className?: string;
    readonly playerName: string;
    readonly isLastGameOver: boolean;
    readonly min: number;
    readonly max: number;
};

export const GameStepsItem = (props: GameStepsItemProps) => {
    const { key, className, playerName, isLastGameOver, min, max } = props;

    return (
        <li key={key ? key : `${min}─${max}`}>
            <div className={className}>
                <span className="player-name">{`${playerName}: `}</span>
                <span>{`${min}${isLastGameOver ? "" : ` ─ ${max}`}`}</span>
            </div>
        </li>
    );
};