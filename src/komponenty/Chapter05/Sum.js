import React from 'react';

const Sum = ({numbers}) => {
    const suma = numbers.reduce(
        (biezaca, nast) => biezaca + nast
      );
    return <h1>Suma: {suma}</h1>
    // return <h1>Suma: {numbers.reduce((biezaca, nast) => biezaca + nast)}</h1>
};

export default Sum;

// Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).

// Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `reduce()`. Wyrenderuj go na stronie podając w atrybucie do `props` przykładową tablicę liczb.
