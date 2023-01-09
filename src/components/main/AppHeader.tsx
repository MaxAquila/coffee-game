import logo from '@assets/cup512.png';

interface Props {
  onClickNewGame: () => void
}

export const AppHeader = ({ onClickNewGame }: Props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Coffee Game
      </h1>
      <p>
        🧐 <em>Find the number and lose the game!</em> 😰
      </p>
      <button type="button" className="btn btn-secondary" onClick={onClickNewGame}>
        🎮 Start a new game 🎮
      </button>
    </header>
  );
};