import logo from '@assets/cup512.png';

interface Props {
    children?: JSX.Element | JSX.Element[];
    heading: string;
};

export const PageHeader = (props: Props) => {
    const { children, heading } = props;
    
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="logo" />
                    <h1>{heading}</h1>
                </div>
            </div>
            {children}
        </header>
    );
};