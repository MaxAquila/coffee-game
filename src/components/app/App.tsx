import '@comp-app/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navigation } from '@comm-consts/navigation';
import { FrontPage } from '@comp-pages/FrontPage';
import { GamePage } from '@comp-pages/GamePage';
import { ParentTester } from '@comp-tests/ParentTester';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={navigation.frontPage} element={<FrontPage />} />
          <Route path={navigation.gamePage} element={<GamePage />} />
          <Route path={navigation.testPage} element={<ParentTester />} />
          <Route path={navigation.default} element={<Navigate to={navigation.frontPage} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};