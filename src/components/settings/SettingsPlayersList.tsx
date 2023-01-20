import { useMemo } from "react";

interface Props {
    players: string[];
    onRemovePlayerCallback: (index: number) => void;
};

export const SettingsPlayersList = (props: Props) => {
    const { players, onRemovePlayerCallback } = props;

    const idDisabled = players.length === 1;

    const listPlayers: JSX.Element[] = useMemo(() => {
        return players.map((p, i) =>
            <div key={p} className="row">
                <div className="col-2"><button title={`Remove '${p}'`} className="btn btn-light" onClick={() => onRemovePlayerCallback(i)} disabled={idDisabled}>❌</button></div>
                <div className="col-10">{p}</div>
            </div>
        );
    }, [players]);

    return (<>
        <div className="container padding-settings">
            {listPlayers}
        </div>
    </>);
};