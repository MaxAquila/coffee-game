import { FetchingTester } from "@comp-tests/FetchingTester";
import { RenderingTesterParent } from "@comp-tests/RenderingTesterParent";

export const TesterPage = () => {
    const styleTest = {
        margin: "5px",
        padding: "20px",
        border: "4px double silver"
    };


    return (<>
        <div style={styleTest}>
            <RenderingTesterParent />
        </div>
        <div style={styleTest}>
            <FetchingTester />
        </div>
        <div style={styleTest}>
        </div>
    </>);
};