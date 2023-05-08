import React from 'react';

const Chapter01Task01 = () => {
    const numberA = parseInt(prompt("Podaj liczbę pierwszą")) 
    const numberB = parseInt(prompt("Podaj liczbę drugą"))
    return (
        <div className="App">
            <p>
                <h1>Zadanie 1</h1>
                Wartość { numberA } + { numberB } = { numberA + numberB }
            </p>
        </div>
    );
};

export default Chapter01Task01;