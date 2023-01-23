import { stringConst } from '@comm-consts/stringConst';
import { PageLayout } from '@comp-pages/common/PageLayout';
import { SettingsSuccessAlert } from '@comp-settings/common/SettingsSuccessAlert';
import { SettingsPlayers } from '@comp-settings/SettingsPlayers';
import { SettingsPlayerOrder } from '@comp-settings/SettingsPlayerOrder';
import { SettingsStartingPlayer } from '@comp-settings/SettingsStartingPlayer';
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
            <SettingsSuccessAlert successMsg={stringConst.SUCCESS_STARTINGPLAYER_SETTINGS}>
                <SettingsStartingPlayer />
            </SettingsSuccessAlert>
            <SettingsSuccessAlert successMsg={stringConst.SUCCESS_PLAYERORDER_SETTINGS}>
                <SettingsPlayerOrder />
            </SettingsSuccessAlert>
        </PageLayout>
    </>);
};