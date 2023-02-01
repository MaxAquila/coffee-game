import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { shuffle } from '@comm-helpers/arrayHelper';
import { getRandomIntExclusive, getRandomIntFromZero } from '@comm-helpers/mathHelper';
import { NumRange } from '@comm-interfaces/numRange';
import { GameActions } from '@comp-game/GameActions';
import { GameNextPlayer, GameNextPlayerProps } from '@comp-game/GameNextPlayer';
import { GameNextStep, GameNextStepProps } from '@comp-game/GameNextStep';
import { GameOver } from "@comp-game/GameOver";
import { IRootState } from '@comm-redux/store';
import { GameStatusBar, GameStatusBarProps } from '@comp-game/GameStatusBar';
import { GameStepsList, GameStepsListProps } from "@comp-game/GameStepsList";


// const range: NumRange = { min: 0, max: 1000 } as const;//with interface 'as const' doesn't work, but readonly in the interface works


export const GameMatch = () => {
    
    const range: NumRange = useSelector<IRootState, NumRange>(state => state.range);
    const rndStartingPlayer: boolean = useSelector<IRootState, boolean>(state => state.players.randomStart);
    const rndPlayerOrder: boolean = useSelector<IRootState, boolean>(state => state.players.randomOrder);
    const playersStore: string[] = useSelector<IRootState, string[]>(state => state.players.names);

    const [players, setPlayers] = useState<string[]>(rndPlayerOrder ? shuffle(playersStore) : [...playersStore]);
    const [playersOffset, setPlayersOffset] = useState<number>(rndStartingPlayer ? getRandomIntFromZero(playersStore.length) : 0);
    const [steps, setSteps] = useState<NumRange[]>([{ min: range.min, max: range.max }]);
    const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

    const lastInsertedStep: NumRange = steps[0];
    const isGameOver: boolean = lastInsertedStep.min === lastInsertedStep.max;

    const onClickNewGame = useCallback(() => {
        if (rndStartingPlayer) {
            setPlayersOffset(getRandomIntFromZero(players.length));
        }
        if (rndPlayerOrder) {
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

    //#region props
    const gameNextStepProps: GameNextStepProps = {
        range: lastInsertedStep,
        onNextStepCallback: onNextStep
    };
    const gameNextPlayerProps: GameNextPlayerProps = {
        players: players,
        offset: playersOffset,
        steps: steps
    };
    const gameStatusBarProps: GameStatusBarProps = {
        limit: range,
        range: lastInsertedStep
    };
    const gameStepsListProps: GameStepsListProps = {
        players: players,
        offset: playersOffset,
        steps: steps
    };
    //#endregion props

    return (<>
        <GameActions onClickNewGameCallback={onClickNewGame} />
        <GameNextStep {...gameNextStepProps} />
        {isGameOver ? <GameOver /> : <GameNextPlayer {...gameNextPlayerProps} />}
        <GameStatusBar {...gameStatusBarProps} />
        <GameStepsList {...gameStepsListProps} />
    </>);
};