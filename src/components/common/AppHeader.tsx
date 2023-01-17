import logo from '@assets/cup512.png';

interface Props {
    children?: JSX.Element | JSX.Element[];
    heading: string;
};

export const AppHeader = ({ children, heading }: Props) => {
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