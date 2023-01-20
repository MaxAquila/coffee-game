import { stringConst } from '@comm-consts/stringConst';
import { PageLayout } from '@comp-pages/common/PageLayout';
import { SettingsSuccessAlert } from '@comp-settings/common/SettingsSuccessAlert';
import { SettingsPlayers } from '@comp-settings/SettingsPlayers';
import { SettingsRange } from '@comp-settings/SettingsRange';

export const SettingsPage = () => {
    return (<>
        <PageLayout heading={stringConst.SETTINGS_PAGE}>
            <SettingsSuccessAlert successMsg={stringConst.SUCCESS_RANGE_SETTINGS}>
                <SettingsRange />
            </SettingsSuccessAlert>
            <SettingsSuccessAlert successMsg={stringConst.SUCCESS_PLAYERS_SETTINGS}>
                <SettingsPlayers />
            </SettingsSuccessAlert>
        </PageLayout>
    </>);
};