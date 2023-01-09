import { useState } from 'react';
import './App.scss';
import { AppHeader } from '@comp-main/AppHeader';
import { GameBoard } from '@comp-game/GameBoard';
import { enumGameState } from "@comm-enums/enumGameState";

export function App() {
  const [gameState, setGameState] = useState(enumGameState.None)

  const onClickNewGame = () => {
    setGameState(enumGameState.Configure);
  }

  return (
    <div className="App">
      <AppHeader onClickNewGame={onClickNewGame} />
      <GameBoard gameState={gameState} onClickNewGame={onClickNewGame} />
    </div>
  );
};
