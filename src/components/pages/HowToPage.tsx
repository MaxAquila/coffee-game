import { stringConst } from '@comm-consts/stringConst';
import { PageLayout } from '@comp-pages/common/PageLayout';

export const HowToPage = () => {
    return (<>
        <PageLayout heading={stringConst.HOWTO_PAGE}>
            <h1 style={{ color: "turquoise" }}>How to play</h1>
            <p>Starting from a range of numbers (exclusives), the game randomly selects a secret one.</p>
            <p>Insert a value and try to not find out that secret number.</p>
            <p>If the value is not the secret number, the range will be updated and the nearest limit is replaced by the new value.</p>
            <p>If you find the secret number, you have to pay for everyone's coffee 😄.</p>
        </PageLayout>
    </>);
};