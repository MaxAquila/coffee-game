import { useEffect, useRef } from 'react'
// import useIsomorphicLayoutEffect from '@comm-hooks/useIsomorphicLayoutEffect';

/**Hook to set a timeout. */
export function useTimeout(callback: () => any, delay: number) {
    const savedCallback = useRef(callback);

    // // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // useIsomorphicLayoutEffect(() => {
    //     savedCallback.current = callback
    // }, [callback])

    // Set up the timeout.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (delay === null) {
            return;
        };

        const id = setTimeout(() => savedCallback.current(), delay);

        return () => clearTimeout(id);
    }, [delay]);
};