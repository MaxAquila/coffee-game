import { PageHeader } from '@comp-pages/common/PageHeader';
import { RangeSettings } from '@comp-settings/RangeSettings';
import { SettingsNavigator } from '@comp-settings/SettingsNavigator';

export const SettingsPage = () => {
    return (<>
        <div className="Board-game">
            <PageHeader heading="Coffee Game Settings">
                <SettingsNavigator />
            </PageHeader>
            <main className="container">
                <RangeSettings/>
            </main>
        </div>
    </>);
};