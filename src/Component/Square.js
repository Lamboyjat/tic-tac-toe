import React from 'react'
import './Square.css'

const Square = (props) => {

    // accept probs parameter for value and onClick functionality.
    return (
        <>
            <button className="btn" onClick={props.onClick}>
                {props.value}
            </button>
        </>
    )
}

export default Square
