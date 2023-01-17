import { useState } from "react";

export const ChildTester = () => {
    const [count, setCount] = useState<number>(0);

    const onClickButton = () => {
        setCount(prev => prev + 1)
    };

    return (
        <button type="button" onClick={onClickButton}>
            Child clicked: {count}
        </button>
    );
};