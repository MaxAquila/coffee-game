import { useCallback, useEffect, useMemo, useState } from 'react';
import { getRandomIntExclusive } from '@comm-helpers/mathHelper';
import { matchStep } from '@comm-interfaces/matchStep';
import { GameNextStep } from '@comp-game/GameNextStep';
import { GameOver } from "@comp-game/GameOver";
import { GameStepsList } from "@comp-game/GameStepsList";
import { GameActions } from './GameActions';

const range: matchStep = { min: 0, max: 1000 } as const;//with interface 'as const' doesn't work, but readonly in the interface works

export const GameMatch = () => {
    const [steps, setSteps] = useState<matchStep[]>([{ min: range.min, max: range.max }]);
    const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

    const lastInsertedStep: matchStep = steps[0];
    const isGameOver: boolean = lastInsertedStep.min === lastInsertedStep.max;

    const onClickNewGame = useCallback(() => {
        setSteps([{ min: range.min, max: range.max }]);
        setJolly(getRandomIntExclusive(range.min, range.max));
    }, []);

    const onNextStep = (newValue: number) => {
        const newStep: matchStep = (newValue === jolly)
            ? { min: jolly, max: jolly }
            : (newValue < jolly)
                ? { min: newValue, max: lastInsertedStep.max }
                : { min: lastInsertedStep.min, max: newValue };
        if (newStep.min !== lastInsertedStep.min || newStep.max !== lastInsertedStep.max) {
            const newList = steps.slice();
            newList.unshift(newStep);
            setSteps(newList);
        }
    };

    useEffect(() => {
        console.info(`Jolly: ${jolly}`);
    }, [jolly]);

    return (<>
        <GameActions onClickNewGameCallback={onClickNewGame} />
        <GameNextStep range={lastInsertedStep} onNextStepCallback={onNextStep} />
        {isGameOver ? <GameOver /> : <></>}
        <GameStepsList steps={steps} />
    </>);
};