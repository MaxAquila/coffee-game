import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";
import { simulateDelay } from "@comm-consts/delayConst";


/**
 * Hook to fetch API data with Axios.
 * @returns 
 */
export const useFetchAxios = () => {
    //const [status, setStatus] = useState();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<any>();
    const [headers, setHeaders] = useState<RawAxiosResponseHeaders | AxiosResponseHeaders>();
    const [data, setData] = useState<any>();

    const fetch = async (options: AxiosRequestConfig<any>) => {
        try {
            setError(undefined);
            setLoading(true);
            console.log("Fetching data...", options);
            const result = await axios(options);
            console.log("Fetched data", result);
            setHeaders(result.headers);
            setData(result.data);
        } catch (e) {
            console.error(e, "Error fetching.", options);
            setError(e);
        } finally {
            await simulateDelay(3000);
            setLoading(false);
        }
    };

    return {
        fetch,
        loading,
        error,
        headers,
        data
    };
};