import React from 'react';

const Chapter01Task02 = () => {
    const rok_urodzenia = parseFloat(prompt("Podaj rok urodzenia"))
    return (
        <div>
            <p>
                <h1>Zadanie 2</h1>
                <h3>Twój wiek to: { new Date().getFullYear() - rok_urodzenia }</h3>
                
            </p>
        </div>
    );
};

export default Chapter01Task02;