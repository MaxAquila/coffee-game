import { AppHeader } from '@comp-common/AppHeader';
import { RangeSettings } from '@comp-settings/RangeSettings';
import { SettingsNavigator } from '@comp-settings/SettingsNavigator';

export const SettingsPage = () => {
    return (<>
        <div className="Board-game">
            <AppHeader heading="Coffee Game Settings">
                <SettingsNavigator />
            </AppHeader>
            <main className="container">
                <RangeSettings/>
            </main>
        </div>
    </>);
};