import { GameMatch } from '@comp-game/GameMatch';
import { PageHeader } from '@comp-pages/common/PageHeader';

export const GamePage = () => {
    return (<>
        <div className="Board-game">
            <PageHeader heading="Coffee Game" />
            <main className="container">
                <GameMatch />
            </main>
        </div>
    </>);
};