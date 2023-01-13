
import { useCallback, useState } from 'react';
import { getRandomIntExclusive } from '@comm-helpers/mathHelper';
import { matchStep } from '@comm-interfaces/matchStep';
import { GameHeader } from '@comp-game/GameHeader';
import { GameNextStep } from '@comp-game/GameNextStep';
import { GameOver } from "@comp-game/GameOver";
import { GameStepsList } from "@comp-game/GameStepsList";

export const GamePage = () => {
    const range: matchStep = { min: 0, max: 1000 };
    const [steps, setSteps] = useState<matchStep[]>([{ min: range.min, max: range.max }]);
    const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

    const lastInsertedStep: matchStep = steps[0];
    const isGameOver: boolean = lastInsertedStep.min === lastInsertedStep.max;

    const onClickNewGame = useCallback(() => {
        setSteps([{ min: range.min, max: range.max }]);
        setJolly(getRandomIntExclusive(range.min, range.max));
    }, [range, jolly]);

    const onNextStep = useCallback((newValue: number) => {
        const oldSteps = steps.slice();
        const newStep: matchStep = (newValue === jolly)
            ? { min: jolly, max: jolly }
            : (newValue < jolly)
                ? { min: newValue, max: lastInsertedStep.max }
                : { min: lastInsertedStep.min, max: newValue };
        if (newStep.min !== lastInsertedStep.min || newStep.max !== lastInsertedStep.max) {
            oldSteps.unshift(newStep);
        }
        setSteps(oldSteps);
    }, [range, jolly]);

    return (<>
        <div className="Board-game">
            <GameHeader onClickNewGameCallback={onClickNewGame} />
            <main className="container">
                <GameNextStep range={lastInsertedStep} onNextStepCallback={onNextStep} />
                {isGameOver ? <GameOver /> : <></>}
                <GameStepsList steps={steps} />
            </main>
        </div>
    </>);
};