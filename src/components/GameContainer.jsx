import React, { useContext } from 'react';
import { GameContext } from '../provider/GameProvider';
import Game from './Game';
import GameOver from './GameOver';

import '../style/index.sass';

const GameContainer = () => {
  const { winner } = useContext(GameContext);

  return <>{winner ? <GameOver /> : <Game />}</>;
};

export default GameContainer;
