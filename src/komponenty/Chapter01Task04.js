import React from 'react';

const Chapter01Task02 = () => {
    const numberA = parseInt(prompt("Podaj liczbę pierwszą"))
    const numberB = parseInt(prompt("Podaj liczbę drugą"))
    const operat = prompt("Podaj działanie")
    function licz(num1, num2, op) {
        switch (op) {
            case "+":
                return <h1>{num1 + num2}</h1>
            case "-":
                return <h1>{num1 - num2}</h1>
            case "*":
                return <h1>{num1 * num2}</h1>
            case "/":
                return <h1>{num1 / num2}</h1>           
            default:
                return <h1>błędny wybór</h1>
        }
    }
    return (
        <div className="App">
            <p>
                <h1>Zadanie 4</h1>
                {licz(numberA, numberB, operat)}
            </p>
        </div>
    );
};

export default Chapter01Task02;