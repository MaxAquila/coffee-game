import '@comp-app/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { navigation } from '@comm-consts/navigation';
import { FrontPage } from '@comp-pages/FrontPage';
import { GamePage } from '@comp-pages/GamePage';
import { SettingsPage } from '@comp-pages/SettingsPage';
import { HowToPage } from '@comp-pages/HowToPage';
import { TesterPage } from '@comp-pages/TesterPage';

export function App() {
  console.info(`TesterPage [hidden]: ${navigation.testerPage}`);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={navigation.frontPage} element={<FrontPage />} />
          <Route path={navigation.gamePage} element={<GamePage />}>
            <Route path=":j?" element={<GamePage />}>
              <Route path=":m/:M" element={<GamePage />} />
            </Route>
          </Route>
          <Route path={navigation.settingsPage} element={<SettingsPage />} />
          <Route path={navigation.howtoPage} element={<HowToPage />} />
          <Route path={navigation.testerPage} element={<TesterPage />} />
          <Route path={navigation.default} element={<Navigate to={navigation.frontPage} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};