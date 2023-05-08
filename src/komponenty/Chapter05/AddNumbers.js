import React from 'react';

const AddNumbers = ({liczbaA, liczbaB}) => {
    return <h1>{liczbaA} + {liczbaB} = {liczbaA + liczbaB}</h1>;
};

export default AddNumbers;

// Stwórz komponent o nazwie `AddNumbers`. Do props przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

// Powinien on wyświetlać w elemencie `h1` **sumę tych dwóch liczb**. Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.
