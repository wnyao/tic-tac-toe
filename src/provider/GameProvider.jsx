import React, { useState, createContext } from 'react';

export const GameContext = createContext({});

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const calculateWinner = (record = []) => {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (record[a] && record[a] === record[b] && record[a] === record[c]) {
      return {
        line: winningLines[i],
        winner: record[a]
      };
    }
  }

  return {};
};

const GameProvider = ({ children }) => {
  const rows = Array(9).fill(null);

  const [isDesc, setIsDesc] = useState(true);
  const [isX, setIsX] = useState(true);
  const [step, setStep] = useState([null]);
  const [round, setRound] = useState(rows);
  const [history, setHistory] = useState([rows]);

  const player = isX ? 'X' : 'O';
  const currentRecord = history[step.length - 1] || [];
  const { line: winnerHand = [], winner } = calculateWinner(currentRecord);

  const onSquareClick = (index) => {
    const record = [
      ...round.slice(0, index),
      player,
      ...round.slice(index + 1, round.length)
    ];

    if (round[index]) return;

    setIsX(!isX);
    setRound(record);
    setStep([...step, index]);
    setHistory([...history, record]);
  };

  const onBack = (index) => {
    setHistory([...history.slice(0, index + 1)]);
    setStep([...step.slice(0, index + 1)]);
  };

  const onReset = () => {
    setStep([null]);
    setRound(rows);
    setHistory([rows]);
  };

  const onSort = () => setIsDesc((isDesc) => !isDesc);

  return (
    <GameContext.Provider
      value={{
        history,
        isDesc,
        step,
        isX,
        player,
        currentRecord,
        winnerHand,
        winner,

        onSquareClick,
        onBack,
        onSort,
        onReset
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
