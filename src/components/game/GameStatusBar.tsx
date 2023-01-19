import { GetMatchRange, NumRange } from "@comm-interfaces/numRange";

/**props of 
 * {@link GameStatusBar} and {@link StatusRange}
 */
interface Props {
    limit: NumRange;
    range: NumRange;
};

/**Status bar of the game match. */
export const GameStatusBar = (props: Props) => {
    const { limit, range } = props;

    const rangeMatch: NumRange = GetMatchRange(range);

    return (
        <div className="Status-bar container">
            <StatusLimit min={limit.min} max={limit.max} />
            <StatusRange limit={limit} range={rangeMatch} />
        </div>
    );
};

/**Component of the limit. */
const StatusLimit = (props: NumRange) => {
    const { min, max } = props;

    return (
        <div className="limit">
            <span className="limit-min">{min}</span>
            <span className="limit-max">{max}</span>
        </div>
    );
};

/**Component of the range. */
const StatusRange = (props: Props) => {
    const { limit, range } = props;

    const isGameOver: boolean = range.min === range.max;
    const rangeWidth = (range.max - range.min) * 100 / (limit.max - limit.min);
    const rangeLeft = (range.min - limit.min) * 100 / (limit.max - limit.min);
    const compStyle = isGameOver
        ? {
            left: `calc(${rangeLeft}% - 8px)`
        }
        : {
            left: `${rangeLeft}%`,
            width: `${rangeWidth > 0 ? rangeWidth : 0.1}%`
        };

    return (
        // <div className={`range-${rangeWidth} range-offset-${rangeLeft}`}>
        <div className={isGameOver ? "jolly" : "range"} style={compStyle}>
            {isGameOver
                ? <span className="jolly-text">{range.min}</span>
                : <>
                    <span className="range-min">{range.min}</span>
                    <span className="range-max">{range.max}</span>
                </>
            }
        </div>
    );
};