import { Link } from "react-router-dom";
import { navigation } from "@comm-consts/navigation";

interface Props {
    onClickCallback?: () => void;
};

export const LinkNewGame = ({ onClickCallback }: Props) => {
    return (
        <Link to={navigation.gamePage}>
            <button type="button" className="btn btn-secondary btn-function" onClick={onClickCallback}>🎮 Start a new game 🎮</button>
        </Link>
    );
};