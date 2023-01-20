import { stringConst } from '@comm-consts/stringConst';
import { GameMatch } from '@comp-game/GameMatch';
import { PageLayout } from '@comp-pages/common/PageLayout';

export const GamePage = () => {
    return (<>
        <PageLayout heading={stringConst.GAME_PAGE}>
            <GameMatch />
        </PageLayout>
    </>);
};