import React, { useContext } from 'react';

import CloseIcon from '../images/close_icon.png';
import { GameContext } from '../provider/GameProvider';
import Footer from './Footer';
import GameBoard from './GameBoard';

const GameOver = () => {
  const { winner, history, onReset } = useContext(GameContext);

  const status = (() => {
    if (!winner && history.length !== 10) return undefined;
    if (winner) return `Winner: ${winner}`;
    return 'Draw';
  })();

  if (!status) {
    return null;
  }

  return (
    <div className="game-over">
      <h1>{status}</h1>

      <div className="game-over__imagelink" onClick={onReset}>
        <img src={CloseIcon} alt="Close" width="24" height="24" />
      </div>

      <GameBoard />
      <Footer />
    </div>
  );
};

export default GameOver;
