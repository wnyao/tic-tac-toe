import React from 'react';
import { createRoot } from 'react-dom/client';

import GameContainer from './components/GameContainer';
import GameProvider from './provider/GameProvider';

const App = () => (
  <GameProvider>
    <GameContainer />
  </GameProvider>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
