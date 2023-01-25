import { PageHeader } from "@comp-pages/common/PageHeader";

/**props of 
 * {@link PageLayout}
 */
interface PageLayoutProps {
    /**@readonly Child elements of the component. */
    readonly children?: JSX.Element | JSX.Element[];
    /**@readonly Heading text of the page. */
    readonly heading?: string;
};

export const PageLayout = (props: PageLayoutProps) => {
    const { children, heading } = props;    
    
    return (<>
        <div className="Board-game">
            <PageHeader />
            <main className="container">
                {/* {heading ? <h2>{heading}</h2> : <></>} */}
                {children}
            </main>
        </div>
    </>);
};