import '@comp-app/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navigation } from '@comm-consts/navigation';
import { FrontPage } from '@comp-pages/FrontPage';
import { GamePage } from '@comp-pages/GamePage';
import { TesterPage } from '@comp-pages/TesterPage';

export function App() {  
  console.info(`TesterPage [hidden]: ${navigation.testerPage}`);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={navigation.frontPage} element={<FrontPage />} />
          <Route path={navigation.gamePage} element={<GamePage />} />
          <Route path={navigation.testerPage} element={<TesterPage />} />
          <Route path={navigation.default} element={<Navigate to={navigation.frontPage} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};