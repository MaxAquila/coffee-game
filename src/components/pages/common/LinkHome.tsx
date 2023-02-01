import logo from '@assets/cup512.png';
import { Link } from 'react-router-dom';
import { navigation } from '@comm-consts/navigation';
import { stringConst } from '@comm-consts/stringConst';


export const LinkHome = () => {
    return (
        <Link to={navigation.frontPage} className="nav-link">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{stringConst.APP_NAME}</h1>
            </div>
        </Link>
    );
};