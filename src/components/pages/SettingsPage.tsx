import { stringConst } from '@comm-consts/stringConst';
import { PageHeader } from '@comp-pages/common/PageHeader';
import { RangeSettings } from '@comp-settings/RangeSettings';

export const SettingsPage = () => {
    return (<>
        <div className="Board-game">
            <PageHeader heading={stringConst.SETTINGS_PAGE} />
            <main className="container">
                <RangeSettings />
            </main>
        </div>
    </>);
};