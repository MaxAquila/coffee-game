import { Link } from "react-router-dom";
import { stringConst } from "@comm-consts/stringConst";
import { navigation } from "@comm-consts/navigation";

export const LinkNewGame = () => {
    return (
        <Link to={navigation.gamePage} className="btn btn-secondary">{stringConst.START_NEW_GAME}</Link>
    );
};