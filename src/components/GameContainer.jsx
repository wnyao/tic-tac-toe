import React, { useContext } from 'react';

import { GameContext } from '../provider/GameProvider';
import Game from './Game';
import GameOver from './GameOver';

import '../style/index.sass';

const GameContainer = () => {
  const { winner, history } = useContext(GameContext);
  const hasEnded = winner || history.length === 10;

  return <>{hasEnded ? <GameOver /> : <Game />}</>;
};

export default GameContainer;
