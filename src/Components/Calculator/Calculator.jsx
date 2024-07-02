import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [value, setValue] = useState('')

    const handleButtonClick = (e) => {
        const buttonValue = e.target.value

        if (buttonValue === 'AC') {
            setValue('')
        } else if (buttonValue === 'DEL') {
            setValue(value.slice(0, -1))
        } else if (buttonValue === '=') {
            try {
                setValue(eval(value).toString())
            } catch {
                setValue('Error')
            }
        }else {
            setValue(value + buttonValue)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="inputs">
                    <input type="text" value={value} readOnly />
                </div>
                <div className="row">
                    <button value="AC" onClick={handleButtonClick}>AC</button>
                    <button value="DEL" onClick={handleButtonClick}>DEL</button>
                    <button value="%" onClick={handleButtonClick}>%</button>
                    <button value="/" onClick={handleButtonClick}>/</button>
                </div>
                <div className="row">
                    <button value="7" onClick={handleButtonClick}>7</button>
                    <button value="8" onClick={handleButtonClick}>8</button>
                    <button value="9" onClick={handleButtonClick}>9</button>
                    <button value="*" onClick={handleButtonClick}>*</button>
                </div>
                <div className="row">
                    <button value="4" onClick={handleButtonClick}>4</button>
                    <button value="5" onClick={handleButtonClick}>5</button>
                    <button value="6" onClick={handleButtonClick}>6</button>
                    <button value="-" onClick={handleButtonClick}>-</button>
                </div>
                <div className="row">
                    <button value="1" onClick={handleButtonClick}>1</button>
                    <button value="2" onClick={handleButtonClick}>2</button>
                    <button value="3" onClick={handleButtonClick}>3</button>
                    <button value="+" onClick={handleButtonClick}>+</button>
                </div>
                <div className="row">
                    <button value="0" onClick={handleButtonClick}>0</button>
                    <button value="00" onClick={handleButtonClick}>00</button>
                    <button value="." onClick={handleButtonClick}>.</button>
                    <button value="=" onClick={handleButtonClick}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
