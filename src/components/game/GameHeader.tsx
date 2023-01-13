import logo from '@assets/cup512.png';
import { GameNavigator } from '@comp-game/GameNavigator';

interface Props {
    onClickNewGameCallback: () => void;
};

export const GameHeader = ({ onClickNewGameCallback }: Props) => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="logo" />
                    <h1>Coffee Game</h1>
                </div>
                <GameNavigator onClickNewGameCallback={onClickNewGameCallback}/>
            </div>
        </header>
    );
};