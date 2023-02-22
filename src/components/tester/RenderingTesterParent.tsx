import { useState } from "react";
import { RenderingTesterChild } from "./RenderingTesterChild";

export const RenderingTesterParent = () => {
    const [count, setCount] = useState<number>(0);

    const onClickButton = () => {
        setCount(prev => prev + 1)
    };

    return (<>
        <button type="button" onClick={onClickButton}>
            Parent clicked: {count}
        </button>
        <RenderingTesterChild/>
        <RenderingTesterChild/>
    </>);
};