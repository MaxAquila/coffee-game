import { useState } from "react";
import { ChildTester } from "@comp-tests/ChildTester";

export const ParentTester = () => {
    const [count, setCount] = useState<number>(0);

    const onClickButton = () => {
        setCount(prev => prev + 1)
    };

    return (<>
        <button type="button" onClick={onClickButton}>
            Parent clicked: {count}
        </button>
        <ChildTester/>
        <ChildTester/>
        <ChildTester/>
        <ChildTester/>
    </>);
};