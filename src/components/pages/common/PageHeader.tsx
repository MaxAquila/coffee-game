import logo from '@assets/cup512.png';
import { navigation } from '@comm-consts/navigation';
import { stringConst } from '@comm-consts/stringConst';
import { isDisabled } from '@testing-library/user-event/dist/utils';

/**props of 
 * {@link PageHeader}
 */
interface PageHeaderProps {
    /**@readonly Child elements of the component. */
    readonly children?: JSX.Element | JSX.Element[];
};

export const PageHeader = (props: PageHeaderProps) => {
    const { children } = props;

    const currentHref: string = window.location.href.substring(window.location.href.lastIndexOf('/'));

    return (
        <header>
            <div className="container">
                    <div>
                        <img src={logo} alt="logo" />
                        <h1>{stringConst.APP_NAME}</h1>
                    </div>
                    <nav className="navbar navbar-dark navbar-expand-lg nav-margin">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href={navigation.frontPage}>
                                <div>
                                    <img src={logo} alt="logo" />
                                    <h1>{stringConst.APP_NAME}</h1>
                                </div>
                            </a> */}
                            <div className="navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className={`nav-link ${currentHref === navigation.gamePage && "active"} ${currentHref === navigation.gamePage && "disabled"}`} href={navigation.gamePage}>{stringConst.NAV_GAME_PAGE}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${currentHref === navigation.settingsPage && "active"} ${currentHref === navigation.settingsPage && "disabled"}`} href={navigation.settingsPage}>{stringConst.NAV_SETTINGS_PAGE}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>
            {children}
        </header>
    );
};