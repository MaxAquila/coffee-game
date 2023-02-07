import { Player } from "@comm-models/player";
import { useMemo } from "react";

/**props of 
 * {@link SettingsPlayersList}
 */
export interface SettingsPlayersListProps {
    /**@readonly Players list with all their names. */
    readonly players: Player[];
    /**@readonly Callback to remove selected player. */
    readonly onRemovePlayerCallback: (index: number) => void;
};

export const SettingsPlayersList = (props: SettingsPlayersListProps) => {
    const { players, onRemovePlayerCallback } = props;

    const idDisabled: boolean = players.length === 1;

    const listPlayers: JSX.Element[] = useMemo(() => {
        return players.map((p, i) =>
            <div key={p.name} className="row">
                <div className="col-2"><button title={`Remove '${p}'`} className="btn btn-light" onClick={() => onRemovePlayerCallback(i)} disabled={idDisabled}>❌</button></div>
                <div className="col-10">
                    <div className="row">
                        {p.name}
                    </div>
                    <div className="row nickname">
                        {p.nickname}
                    </div>
                </div>
            </div>
        );
    }, [players]);

    return (<>
        <div className="container padding-settings">
            {listPlayers}
        </div>
    </>);
};