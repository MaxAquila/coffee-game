import logo from '@assets/cup512.png';
import { useState } from "react";
import { enumGameState } from '@comm-enums/enumGameState';
import { matchStep } from "@comm-interfaces/matchStep";

interface Props {
    jolly: number;
    steps: matchStep[];
    updateStepsCallback: (newSteps: matchStep[]) => void;
    updateGameState: (gameState: enumGameState) => void;
}

export const GameMatch = ({ jolly, steps, updateStepsCallback, updateGameState }: Props) => {
    console.log("GameMatch: " + jolly);
    const lastInsertedStep = steps[0];
    const isGameOver = lastInsertedStep.min === lastInsertedStep.max;
    const range: matchStep = { min: isGameOver ? jolly : Number(lastInsertedStep.min) + 1, max: isGameOver ? jolly : Number(lastInsertedStep.max) - 1 };
    const [newValue, setNewValue] = useState<number>(range.min);

    const listSteps = steps.map((s) => <li key={`${s.min}─${s.max}`}>{`Min: ${s.min} ─ Max: ${s.max}`}</li>);

    const handleSubmit = (event: any) => {
        console.log("GameMatch/handleSubmit");
        event.preventDefault();
        onClickNewValue();
    };

    const handleChangeNewValue = (e: any) => {
        console.log("GameMatch/handleChangeNewValue")
        console.log("GameMatch/handleChangeNewValue: setNewValue");
        setNewValue(e.target.value);
    };

    const onClickNewValue = () => {
        console.log("GameMatch/onClickNewValue")
        const msgOutOfRange = "!!! ATTENTION !!!\nThe new value is out of range";
        if (isGameOver) {
            alert("!!! GAME OVER !!!\nStart a new game");
            return;
        }
        else if (newValue < range.min) {
            console.log("GameMatch/onClickNewValue: setNewValue");
            setNewValue(range.min);
            alert(msgOutOfRange);
            return;
        }
        else if (newValue > range.max) {
            console.log("GameMatch/onClickNewValue: setNewValue");
            setNewValue(range.max);
            alert(msgOutOfRange);
            return;
        }
        const oldSteps = steps.slice();
        const newStep: matchStep = (newValue === jolly)
            ? { min: jolly, max: jolly }
            : (newValue < jolly)
                ? { min: newValue, max: lastInsertedStep.max }
                : { min: lastInsertedStep.min, max: newValue };
        if (newStep.min !== lastInsertedStep.min || newStep.max !== lastInsertedStep.max) {
            oldSteps.unshift(newStep);
        }
        console.log("GameMatch/onClickNewValue: setNewValue");
        setNewValue((newValue === newStep.min) ? Number(newStep.min) + 1 : Number(newStep.max) - 1);
        updateStepsCallback(oldSteps);
    };

    const resetNewValue = () => {        
        setNewValue(Number(steps[steps.length - 1].min) + 1);
    }

    const onClickNewGame = () => {
        resetNewValue();
        updateGameState(enumGameState.Play);
    };
    
    const onClickSettings = () => {
        resetNewValue();
        updateGameState(enumGameState.Configure);
    };

    console.log("Rendering: GameMatch");
    return (<>
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className='col-1'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='col-6 col-sm-5 col-md-4 col-lg-3 col-xl-3'>
                    <h1>Coffee Game</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="d-flex flex-column col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
                    <button type="button" className="btn btn-secondary btn-function" onClick={onClickNewGame}>🎮 Start a new game 🎮</button>
                    <button type="button" className="btn btn-secondary btn-function" onClick={onClickSettings}>⚙️ Settings ⚙️</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
                    <form className="input-group mb-3" onSubmit={handleSubmit}>
                        <label className="input-group-text">New value:</label>
                        <input className="form-control" type="number" value={newValue} min={range.min} max={range.max} onChange={handleChangeNewValue} required disabled={isGameOver} />
                        <button type="button" className="btn btn-primary" onClick={onClickNewValue} disabled={isGameOver}>Insert</button>
                    </form>
                </div>
            </div>
            {isGameOver ? <label className="GameOver"><strong>!!! GAME OVER !!!</strong></label> : <></>}
            <ul className="list-unstyled">{listSteps}</ul>
        </div>
    </>);
}