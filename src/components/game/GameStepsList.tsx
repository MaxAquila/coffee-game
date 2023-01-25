import { useMemo } from "react";
import { NumRange } from "@comm-interfaces/numRange";
import { GameStepsItem, GameStepsItemProps } from "@comp-game/GameStepItem";

export interface GameStepsListProps {
    readonly players: string[];
    readonly offset: number;
    readonly steps: NumRange[];
};

export const GameStepsList = (props: GameStepsListProps) => {
    const { players, offset, steps } = props;

    const listSteps: JSX.Element[] = useMemo(() => {
        return steps.map((s, i) => {
            const isLastGameOver = i === 0 && s.min === s.max;
            const isStartingStap = i === steps.length - 1;
            const playerOffset = (steps.length - i - 2 + offset) % players.length;
            const isNewRound = players.length > 1 && playerOffset === offset && i !== steps.length - 2;
            const classDiv =
                isLastGameOver ? "step-gameover" :
                    isNewRound ? "step-round" :
                        isStartingStap ? "step-start" : undefined;
            const playerName: string = i === steps.length - 1 ? "Start" : players[playerOffset];

            //#region props
            const gameStepsItemProps: GameStepsItemProps = {
                className: classDiv,
                playerName: playerName,
                isLastGameOver: isLastGameOver,
                min: s.min,
                max: s.max
            };
            //#endregion props

            return <GameStepsItem key={`${s.min}─${s.max}`} {...gameStepsItemProps} />;
        });
    }, [steps]);

    return (
        <ul className="list-unstyled">{listSteps}</ul>
    );
};