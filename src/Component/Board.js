import React, {useState} from 'react'
import Square from './Square'
import {calculateWinner} from './Helper'

import './Board.css'


const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));

    const [x, setX] = useState(true);

    const winner = calculateWinner(square);
    let status;
    let status1;

    if (winner) {
        status1 = winner + ' winner';
    }else {
        status1 = 'XO Draw';
    }


    if (!winner) {
        status = (x ? 'X ' : 'O ') + 'Turn';
    }else{
        status = 'Game over';
    }
    
    const restartClick = (square) => {
        const squares = square;
        setSquare(squares);
    }


    const hasClick = (i) => {
        //using the slice function to get the value in the array and assign it to a variable squares
        const squares = square.slice();

        // Validate that the cell cannot be change after clicked.
        if(squares[i] === null) {
            //Change the value stored at I to "X" for the first click and the next one to "O"
            squares[i] = x ? 'X' : 'O';
            setSquare(squares) // render the value on click 
            setX(!x) // next value should not be an "X"
        }else{
            alert("Sorry can't change option")
        }

        //console.log(i)
    }
    
    // the board render a square that has a value "i"
    // to be display on the cell of the board
    // the square will pass this as a probs 
    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick = { ()=> hasClick(i)}/>
        )
    }

    return (
        <>
            <div className ="board__container">
                <div className="status">
                    {status}
                </div>
                <div className = "board__row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className = "board__row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className = "board__row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                <div className="status">
                    <button className="btn__clear"
                    onClick = {()=>restartClick(square)}>
                        Restart Game
                    </button>
                </div>
                <div className="winBox">
                    {status1}
                </div>
            </div>
        </>
    )
}

export default Board
