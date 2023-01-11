import { useState } from 'react';
import './App.scss';
import { AppHeader } from '@comp-main/AppHeader';
import { GameBoard } from '@comp-game/GameBoard';
import { enumGameState } from "@comm-enums/enumGameState";
import { getRandomIntExclusive } from '@comm-helpers/mathHelper';
import { matchStep } from '@comm-interfaces/matchStep';

export function App() {
  const [gameState, setGameState] = useState(enumGameState.None);
  const [range, setRange] = useState<matchStep>({ min: 0, max: 1000 });
  const [steps, setSteps] = useState<matchStep[]>([{ min: range.min, max: range.max }]);
  const [jolly, setJolly] = useState<number>(getRandomIntExclusive(range.min, range.max));

  const onUpdateGameState = (gameState: enumGameState) => {
    if (gameState === enumGameState.Play){
      setSteps([{ min: range.min, max: range.max }]);
      setJolly(getRandomIntExclusive(range.min, range.max));
    }
    setGameState(gameState);
  }

  const onUpdateSteps = (newSteps: matchStep[]) => {
    setSteps(newSteps);
  }

  return (
    <div className="App">
      <AppHeader onClickNewGame={onUpdateGameState} />
      <GameBoard gameState={gameState} steps={steps} jolly={jolly} changeGameStateCallback={onUpdateGameState} changeStepsCallback={onUpdateSteps} />
    </div>
  );
};