import { useEffect, useRef, useState } from "react";
import { lsConst } from "@comm-consts/lsConst";
import { useLocalStorage } from "@comm-hooks/useLocalStorage";
import { PropsChild } from "@comp-settings/common/SettingsSuccessAlert";
import { SettingsPlayersList } from "@comp-settings/SettingsPlayersList";

const limit: number = 8;

export const SettingsPlayers = (props: PropsChild) => {
    const { onSuccessCallback } = props;

    const [storage, setStorage] = useLocalStorage<string[]>(lsConst.PLAYERS.key, lsConst.PLAYERS.value);
    const [players, setPlayers] = useState<string[]>(storage);
    const inputRef = useRef<HTMLInputElement>(null);
    const idDisabled = players.length >= limit;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newPlayer: string = inputRef?.current?.value || "";
        if (idDisabled || newPlayer === "") {
            return;
        }
        const newList: string[] = [...players, newPlayer];
        const uniqueList: string[] = newList.filter((v, i, a) => a.indexOf(v) == i);
        setPlayers(uniqueList);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        onSuccessCallback?.();
    };

    const onRemovePlayer = (index: number) => {
        setPlayers(players.filter((p, i) => i !== index));
        onSuccessCallback?.();
    };

    useEffect(() => {
        setStorage(players);
    }, [players]);

    return (<>
        <form className="input-group" onSubmit={handleSubmit}>
            <label className="input-group-text">New player:</label>
            <input ref={inputRef} className="form-control" defaultValue={""} disabled={idDisabled} maxLength={16} />
            <button type="submit" className="btn btn-primary" disabled={idDisabled}>Set</button>
        </form>
        <SettingsPlayersList players={players} onRemovePlayerCallback={onRemovePlayer} />
    </>);
};