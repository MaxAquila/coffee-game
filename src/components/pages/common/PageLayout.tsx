import { PageHeader } from "@comp-pages/common/PageHeader";

interface Props {
    children?: JSX.Element | JSX.Element[];
    heading: string;
};

export const PageLayout = (props: Props) => {
    const { children, heading } = props;    
    
    return (<>
        <div className="Board-game">
            <PageHeader />
            <main className="container">
                {/* <h2>{heading}</h2> */}
                {children}
            </main>
        </div>
    </>);
};