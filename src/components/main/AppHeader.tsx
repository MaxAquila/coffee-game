import logo from '@assets/cup512.png';
import { Link } from 'react-router-dom';

export const AppHeader = () => {
  console.log("AppHeader");

  const onClickStartGame = () => {
    console.log("AppHeader/onClickStartGame: to path -> '/game'")
  };

  console.log("Rendering: AppHeader");
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Coffee GameS</h1>
      <p>🧐 <em>Find the number and lose the game!</em> 😰</p>
      <Link to="/game">
        <button type="button" className="btn btn-secondary" onClick={onClickStartGame}>🎮 Start a new game 🎮</button>
      </Link>
    </header>
  );
};