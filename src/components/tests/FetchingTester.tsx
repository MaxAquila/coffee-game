import loadingIcon from '@assets/loading32px.png';
import { getRandomIntInclusive } from "@comm-helpers/mathHelper";
import { useFetchAxios } from "@comm-hooks/useFetchAxios";


export const FetchingTester = () => {
    const fetcher = useFetchAxios();

    const onClickButton = async (id: number | undefined = undefined) => {
        fetcher.fetch({
            url: `https://api.guildwars2.com/v2/colors/${id ? id : getRandomIntInclusive(1, 2000)}`
        });
    };

    return (<>
        <button type="button" onClick={() => onClickButton()}>
            Fetch random
        </button>
        <button type="button" onClick={() => onClickButton(1)}>
            ID=1
        </button>
        <button type="button" onClick={() => onClickButton(2000)}>
            ID=2000
        </button>
        {
            fetcher.loading
                ? <div>
                    <img src={loadingIcon} className="loading-icon" alt="loading" />
                    <p>Fatching data...</p>
                </div>
                : fetcher.error
                    ? <p>{fetcher.error?.message}</p>
                    : fetcher.data
                        ? <p>Color [{fetcher.data?.id}] name: {fetcher.data?.name}</p>
                        : <></>
        }
    </>);
};