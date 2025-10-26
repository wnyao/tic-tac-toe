import React, { useContext } from 'react';

import { GameContext } from '../provider/GameProvider';
import History from './History';

const GameInfo = () => {
  const { player, isDesc, onSort } = useContext(GameContext);

  return (
    <div className="game-info">
      <div className="game-info__field">
        <div className="game-info__field__status">
          <h2>Player: {player}</h2>
        </div>
        <button className="game-info__field__button" onClick={onSort}>
          {isDesc ? 'Sort ↓' : 'Sort ↑'}
        </button>
        <hr />
        <History />
      </div>
    </div>
  );
};

export default GameInfo;
