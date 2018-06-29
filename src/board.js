import React from 'react';
import './css/index.css';

//Presentational Component
const Button = props => (
    <button
        className={props.className}
        onClick={props.onClick}
    >
        {props.value}
    </button>
);

//Container
function Square(props) {
    return (
        <Button
            className="square" 
            onClick={props.onClick} 
            value={props.value}
        />
    );
};

function ToggleButton(props) {
    return (
        <Button
            className="button" 
            onClick={props.onClick}
            value={props.value}
        />
    );
};

class Board extends React.Component {
    //Return a single button component
    renderSquare(i, coordinate) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i, coordinate)}
            />
        );
    }

    //Render board of tictactoe
    renderBoard() {
        const rowBlock = (squares, key) => (<div key={key} className="board-row">{squares[0]}{squares[1]}{squares[2]}</div>);
        const length = 3;

        const boardRows = Array.from({length}, (currentVal, outer) => { //outer & index: index of the current element being processed in the array
            const row = 3 - outer;
            const boardRow = Array.from({length}, (currentVal, index) => ( //currentVal: current element being processed
                this.renderSquare(outer * length + index, [row, index + 1])
            ))

            return rowBlock(boardRow, outer + 1);
        });
        return (boardRows);
    }

    render() {
        const boardComponent = this.renderBoard();
        return(boardComponent);
    }
}

export {
    ToggleButton,
    Board
}