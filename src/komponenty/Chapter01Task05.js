import fruits from '../data/fruits';
import React from 'react';

const Chapter01Task05 = () => {
    return (
        <div>
            <h1>Zadanie 5</h1>
            <p>Owoce: { fruits.length }</p>
            <p>{fruits.join("-")} </p>
        </div>
    );
};

export default Chapter01Task05;