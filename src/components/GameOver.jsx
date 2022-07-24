import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../images/close_icon.png';
import { GameBoard } from './Game';
import { ImageLink } from './Footer';

const GameOver = (props) => (
  <div className="game-over">
    <h1>{props.status}</h1>
    <ImageLink
      alt="Close"
      className="game-over__imagelink"
      href="https://tic-tae-toe.netlify.com/"
      src={CloseIcon}
    />
    <GameBoard
      className="game-over__board"
      squares={props.squares}
      winningLine={props.winningLine}
      onClick={props.onSquareClick}
    />
  </div>
);

GameOver.propTypes = {
  status: PropTypes.string,
  winningLine: PropTypes.arrayOf(PropTypes.number).isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default GameOver;
