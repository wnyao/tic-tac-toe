import React, { useContext } from 'react';

import { GameContext } from '../provider/GameProvider';

const rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

const History = () => {
  const { isDesc, step, history, onBack } = useContext(GameContext);
  const list = isDesc ? [...history] : [...history].reverse();

  return (
    <div>
      {list.map((record, index) => {
        const adjustedIndex = isDesc ? index : list.length - index;
        const current = step[adjustedIndex];
        const row = Math.floor(current / 3) + 1;

        const column = rows.reduce((acc, list) => (list.includes(current) ? list.indexOf(current) : acc), 0);

        const description = index ? `Back to #${adjustedIndex}` : 'Go to game start';

        const message = !index ? 'Place your move on a number' : `Move #${index} at (${row}, ${column})`;

        return (
          <div className="list" key={record.join('')}>
            <button className="list__button" onClick={() => onBack(index)}>
              {description}
            </button>
            <p>{message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
