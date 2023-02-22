import { FetchingTester } from "@comp-tester/FetchingTester";
import { RenderingTesterParent } from "@comp-tester/RenderingTesterParent";
import { VariableTester } from "@comp-tester/VariableTester";

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
            <VariableTester />
        </div>
        <div style={styleTest}>
        </div>
    </>);
};