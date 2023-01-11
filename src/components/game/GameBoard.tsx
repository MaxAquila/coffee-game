import { useState } from "react";
import { enumGameState } from "@comm-enums/enumGameState";
import { getRandomIntExclusive } from '@comm-helpers/mathHelper';
import { matchStep } from '@comm-interfaces/matchStep';
import { GameMatch } from "@comp-game/GameMatch";
import { GameSettings } from "@comp-game/GameSettings";

export const GameBoard = () => {
    console.log("GameBoard");
    const [gameState, setGameState] = useState(enumGameState.Play);
    const [range, setRange] = useState<matchStep>({ min: 0, max: 1000 });
    const [steps, setSteps] = useState<matchStep[]>([{ min: range.min, max: range.max }]);
    const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

    const onUpdateGameState = (gameState: enumGameState) => {
        console.log("GameBoard/onUpdateGameState");
        if (gameState === enumGameState.Play) {
            console.log("GameBoard/onUpdateGameState: setSteps");
            setSteps([{ min: range.min, max: range.max }]);
            console.log("GameBoard/onUpdateGameState: setJolly");
            setJolly(getRandomIntExclusive(range.min, range.max));
        }
        console.log("GameBoard/onUpdateGameState: setGameState");
        setGameState(gameState);
    };

    const onUpdateSteps = (newSteps: matchStep[]) => {
        console.log("GameBoard/onUpdateSteps");
        console.log("GameBoard/onUpdateSteps: setSteps");
        setSteps(newSteps);
    };

    const board = () => {
        switch (gameState) {
            case enumGameState.Configure:
                console.log("GameBoard/gameState: enumGameState.Configure");
                return <GameSettings />;
            case enumGameState.Play:
            default:
                console.log("GameBoard/gameState: enumGameState.Play");
                return <GameMatch jolly={jolly} steps={steps} updateStepsCallback={onUpdateSteps} updateGameState={onUpdateGameState} />;
        };
    };

    console.log("Rendering: GameBoard");
    return (
        <section className="Board-game">
            {board()}
        </section>
    );
};