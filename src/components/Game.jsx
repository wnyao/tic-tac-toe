import React from 'react';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import Footer from './Footer';

const Game = () => (
  <div className="game">
    <header className="header">
      <h1>Tic Tac Toe</h1>
    </header>

    <div className="game-layout">
      <GameBoard />
      <GameInfo />
    </div>

    <Footer />
  </div>
);

export default Game;
