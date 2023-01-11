import { GameMatch } from "@comp-game/GameMatch";
import { GameSettings } from "@comp-game/GameSettings";
import { enumGameState } from "@comm-enums/enumGameState";
import { matchStep } from "@comm-interfaces/matchStep";

interface Props {
    gameState: enumGameState;
    steps: matchStep[];
    jolly: number;
    changeGameStateCallback: (gameState: enumGameState) => void;
    changeStepsCallback: (newSteps: matchStep[]) => void;
}

export const GameBoard = ({ gameState, steps, jolly, changeGameStateCallback, changeStepsCallback }: Props) => {
    console.log("GameBoard");
    const board = () => {
        switch (gameState) {
            case enumGameState.Configure:
                console.log("GameBoard/gameState: enumGameState.Configure");
                return <GameSettings />;
            case enumGameState.Play:
                console.log("GameBoard/gameState: enumGameState.Play");
                return <GameMatch jolly={jolly} steps={steps} updateStepsCallback={changeStepsCallback}/>;
            case enumGameState.None:
            default:
                console.log("GameBoard/gameState: enumGameState.None");
                return <></>;
        };
    };

    console.log("Rendering: GameBoard");
    return (
        <aside className="App-aside">
            {board()}
        </aside>
    );
};