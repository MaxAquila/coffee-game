import { stringConst } from '@comm-consts/stringConst';
import { PageLayout } from '@comp-pages/common/PageLayout';
import { RangeSettings } from '@comp-settings/RangeSettings';

export const SettingsPage = () => {
    return (<>
        <PageLayout heading={stringConst.SETTINGS_PAGE}>
            <RangeSettings />
        </PageLayout>
    </>);
};