import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppHeader } from '@comp-main/AppHeader';
import { GameBoard } from '@comp-game/GameBoard';

export function App() {
  console.log("App");

  console.log("Rendering: App");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHeader />} />
          <Route path="/game" element={<GameBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};