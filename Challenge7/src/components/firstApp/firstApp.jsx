import React from 'react'
import {useState} from "react"

const FirstApp = ({value}) => {
    const [counter, setcounter] = useState(value)

    const handleAdd = () => {
        setcounter(counter +1 )
    }

    const handleSubsstract = () => {
        setcounter(counter - 1 )
    }

    const handleReset = () => {
        setcounter(value )
    }

    return(
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={ () => handleAdd()}> +1</button>
            <button onClick={ () => handleSubsstract()}> -1</button>
            <button onClick={ () => handleReset()}> reset</button>
        </>
    )
}

export default FirstApp