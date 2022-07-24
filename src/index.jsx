import React from 'react';
import { createRoot } from 'react-dom/client';
import GameProvider from './provider/GameProvider';
import GameContainer from './components/GameContainer';

const App = () => (
  <GameProvider>
    <GameContainer />
  </GameProvider>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
