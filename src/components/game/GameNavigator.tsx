import { Link } from "react-router-dom";
import { navigation } from "@comm-consts/navigation";
import { LinkNewGame } from "@comp-game/common/LinkNewGame";

interface Props {
    onClickNewGameCallback: () => void;
};

export const GameNavigator = ({ onClickNewGameCallback }: Props) => {
    return (
        <div className="d-flex justify-content-center">
            <LinkNewGame onClickCallback={onClickNewGameCallback} />
            <Link to={navigation.settingsPage}>
                <button type="button" className="btn btn-secondary btn-function">⚙️ Settings ⚙️</button>
            </Link>
        </div>
    );
};