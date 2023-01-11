import logo from '@assets/cup512.png';
import { enumGameState } from '@comm-enums/enumGameState';

interface Props {
  onClickNewGame: (gameState: enumGameState) => void;
}

export const AppHeader = ({ onClickNewGame }: Props) => {
  console.log("AppHeader");
  console.log("Rendering: AppHeader");
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Coffee Game
      </h1>
      <p>
        🧐 <em>Find the number and lose the game!</em> 😰
      </p>
      <button type="button" className="btn btn-secondary" onClick={() => onClickNewGame(enumGameState.Play)}>🎮 Start a new game 🎮</button>
    </header>
  );
};