import React, { useContext } from 'react';
import { clsx } from 'clsx';

import { GameContext } from '../provider/GameProvider';

const GameBoard = () => {
  const { currentRecord, winnerHand, onSquareClick } = useContext(GameContext);

  return (
    <div className="game__board">
      {[...Array(9)].map((_, count) => {
        const hasMatch = winnerHand.some((number) => number === count);
        const label = currentRecord[count] || count + 1;

        return (
          <button
            key={count}
            className={clsx({
              match: hasMatch,
              isPlayerX: label === 'X',
              isPlayerO: label === 'O',
              'board-row__button-square': true
            })}
            onClick={() => onSquareClick(count)}
          >
            <p>{label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default GameBoard;
