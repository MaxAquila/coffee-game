import { useMemo } from "react";
import { NumRange } from "@comm-interfaces/numRange";
import { GameStepsItem, GameStepsItemProps } from "@comp-game/GameStepItem";

/**props of 
 * {@link GameStepsList}
 */
export interface GameStepsListProps {
    /**@readonly Players list with all their names. */
    readonly players: string[];
    /**@readonly Index of the starting player. */
    readonly offset: number;
    /**@readonly Steps list of current match. */
    readonly steps: NumRange[];
};

export const GameStepsList = (props: GameStepsListProps) => {
    const { players, offset, steps } = props;

    const listSteps: JSX.Element[] = useMemo(() => {
        return steps.map((s, i) => {
            const isLastGameOver: boolean = i === 0 && s.min === s.max;
            const isStartingStap: boolean = i === steps.length - 1;
            const playerOffset: number = (steps.length - i - 2 + offset) % players.length;
            const isNewRound: boolean = players.length > 1 && playerOffset === offset && i !== steps.length - 2;

            //#region props
            const gameStepsItemProps: GameStepsItemProps = {
                className:
                    isLastGameOver ? "step-gameover" :
                        isNewRound ? "step-round" :
                            isStartingStap ? "step-start" : undefined,
                playerName: i === steps.length - 1 ? "Start" : players[playerOffset],
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