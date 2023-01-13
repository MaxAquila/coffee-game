import logo from '@assets/cup512.png';
import { LinkNewGame } from '@comp-game/common/LinkNewGame';

export const FrontPage = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Coffee Game</h1>
      <p>🧐 <em>Find the number and pay the coffee!</em> 😰</p>
      <LinkNewGame/>
    </header>
  );
};