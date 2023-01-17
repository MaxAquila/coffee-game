import { useRef } from 'react';
import { GameHeader } from '@comp-game/GameHeader';
import { GameMatch, refGameMatch } from '@comp-game/GameMatch';

export const GamePage = () => {
    const refOnClickNewGame = useRef<refGameMatch>(null);

    return (<>
        <div className="Board-game">
            <GameHeader onClickNewGameCallback={() => refOnClickNewGame?.current?.refOnClickNewGame()} />
            <main className="container">
                <GameMatch ref={refOnClickNewGame}/>
            </main>
        </div>
    </>);
};