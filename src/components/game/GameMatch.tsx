import { useCallback, useEffect, useState } from 'react';
import { lsConst } from "@comm-consts/lsConst";
import { shuffle } from '@comm-helpers/arrayHelper';
import { getRandomIntExclusive, getRandomIntFromZero } from '@comm-helpers/mathHelper';
import { useLocalStorage } from '@comm-hooks/useLocalStorage';
import { NumRange } from '@comm-interfaces/numRange';
import { GameActions } from '@comp-game/GameActions';
import { GameNextPlayer } from '@comp-game/GameNextPlayer';
import { GameNextStep } from '@comp-game/GameNextStep';
import { GameOver } from "@comp-game/GameOver";
import { GameStatusBar } from '@comp-game/GameStatusBar';
import { GameStepsList } from "@comp-game/GameStepsList";

// const range: NumRange = { min: 0, max: 1000 } as const;//with interface 'as const' doesn't work, but readonly in the interface works

export const GameMatch = () => {
    const [range] = useLocalStorage<NumRange>(lsConst.RANGE.key, lsConst.RANGE.value);
    const [playersStorage] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);
    const [rndStartingPlayer] = useLocalStorage<boolean>(lsConst.RND_STARTINGPLAYER.key, lsConst.RND_STARTINGPLAYER.value);
    const [rndPlayerOrder] = useLocalStorage<boolean>(lsConst.RND_PLAYERORDER.key, lsConst.RND_PLAYERORDER.value);

    const [playersOffset, setPlayersOffset] = useState<number>(rndStartingPlayer ? getRandomIntFromZero(playersStorage.length) : 0);
    const [players, setPlayers] = useState<string[]>(rndPlayerOrder ? shuffle(playersStorage) : [...playersStorage]);
    const [steps, setSteps] = useState<NumRange[]>([{ min: range.min, max: range.max }]);
    const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

    const lastInsertedStep: NumRange = steps[0];
    const isGameOver: boolean = lastInsertedStep.min === lastInsertedStep.max;

    const onClickNewGame = useCallback(() => {
        if (rndStartingPlayer){
            setPlayersOffset(getRandomIntFromZero(players.length));
        }
        if (rndPlayerOrder){
            setPlayers(shuffle(players));
        }
        setSteps([{ min: range.min, max: range.max }]);
        setJolly(getRandomIntExclusive(range.min, range.max));
    }, []);

    const onNextStep = (newValue: number) => {
        const newStep: NumRange = (newValue === jolly)
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
        {isGameOver ? <GameOver /> : <GameNextPlayer players={players} offset={playersOffset} steps={steps} />}
        <GameStatusBar limit={range} range={lastInsertedStep} />
        <GameStepsList players={players} offset={playersOffset} steps={steps} />
    </>);
};