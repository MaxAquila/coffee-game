import { Link, useLocation } from 'react-router-dom';
import { navigation } from '@comm-consts/navigation';
import { stringConst } from '@comm-consts/stringConst';
import { LinkHome } from '@comp-pages/common/LinkHome';

/**props of 
 * {@link PageHeader}
 */
interface PageHeaderProps {
    /**@readonly Child elements of the component. */
    readonly children?: JSX.Element | JSX.Element[];
};

export const PageHeader = (props: PageHeaderProps) => {
    const { children } = props;

    // const currentHref: string = window.location.href.substring(window.location.href.lastIndexOf('/'));
    const location = useLocation();

    return (
        <header>
            <div className="container">
                <LinkHome />
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
                                    {/* <a className={`nav-link ${currentHref === navigation.gamePage && "active"} ${currentHref === navigation.gamePage && "disabled"}`} href={navigation.gamePage}>{stringConst.NAV_GAME_PAGE}</a> */}
                                    <Link to={navigation.gamePage} className={`nav-link ${location.pathname === navigation.gamePage && "active"} ${location.pathname === navigation.gamePage && "disabled"}`}>{stringConst.NAV_GAME_PAGE}</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className={`nav-link ${currentHref === navigation.settingsPage && "active"} ${currentHref === navigation.settingsPage && "disabled"}`} href={navigation.settingsPage}>{stringConst.NAV_SETTINGS_PAGE}</a> */}
                                    <Link to={navigation.settingsPage} className={`nav-link ${location.pathname === navigation.settingsPage && "active"} ${location.pathname === navigation.settingsPage && "disabled"}`}>{stringConst.NAV_SETTINGS_PAGE}</Link>
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