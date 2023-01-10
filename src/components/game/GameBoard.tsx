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
    const board = () => {
        switch (gameState) {
            case enumGameState.Configure:
                return <GameSettings />;
            case enumGameState.Play:
                console.log("play");
                return <GameMatch jolly={jolly} steps={steps} updateStepsCallback={changeStepsCallback}/>;
            case enumGameState.None:
            default:
                return <></>;
        };
    };

    return (
        <aside className="App-aside">
            {board()}
        </aside>
    );
};