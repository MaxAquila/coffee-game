/**
 * Delay constant values.
 */
export const delayConst = {
    INTERVAL_ALERT: 2000 as const,
    TIMEOUT_ALERT: 2000 as const
};


/**Function to simulate delay. */
export function simulateDelay(delay: number) {
    return new Promise(res => setTimeout(res, delay));
};