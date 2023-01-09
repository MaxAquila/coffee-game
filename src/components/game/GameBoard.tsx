import { enumGameState } from "@comm-enums/enumGameState";
import { GameSettings } from "@comp-game/GameSettings";

interface Props {
    gameState: enumGameState;
    onClickNewGame: () => void
}

export const GameBoard = ({ gameState, onClickNewGame }: Props) => {
    const board = () => {
        switch (gameState) {
            case enumGameState.None:
                return <span>None</span>;
            case enumGameState.Configure:
                return <GameSettings/>;
            case enumGameState.Play:
                return <span>Playing...</span>;
            case enumGameState.GameOver:
                return <span>Game Over</span>;
            case enumGameState.Replay:
                return <span>Replaying...</span>;
            default:
                return <span></span>;
        };
    };

    return (
        <aside className="App-aside">
            {board()}
        </aside>
    );
};