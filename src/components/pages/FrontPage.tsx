import logo from '@assets/cup512.png';
import { stringConst } from '@comm-consts/stringConst';
import { LinkNewGame } from '@comp-game/common/LinkNewGame';

export const FrontPage = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{stringConst.APP_NAME}</h1>
      <p>🧐 <em>{stringConst.APP_DESCRIPTION}</em> 😰</p>
      <LinkNewGame/>
    </header>
  );
};