import React, {useState} from 'react'
import Square from './Square'
import {calculateWinner} from './Helper'

import './Board.css'

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));

    const [x, setX] = useState(true);

    const winner = calculateWinner(square);
    let status;
    if (winner) {
        status = 'winner ' + winner;
    }else if (winner === null) {
        status = 'There has been a draw';
    }else {
        status = (x ? 'X' : 'O') + 'Turn';
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
            </div>
        </>
    )
}

export default Board
