import React from 'react';

const Buttons = () => {
    const clickHandler1 = () =>{
        console.log("Pierwszy przycisk kliknięty")
    }
    const clickHandler2 = () =>{
        const liczbaA = parseInt(prompt("Podaj liczbę a: "));
        const liczbaB = parseInt(prompt("Podaj liczbę b: "));
        console.log(liczbaA+liczbaB);
    }
    const clickHandler3 = () =>{
        console.log({wysokosc: window.innerHeight, szerokosc: window.innerWidth})
    }
    return (
        <>
            <button onClick={clickHandler1}>Klik!</button>
            <button onClick={clickHandler2}>Klik!</button>
            <button onClick={clickHandler3}>Klik!</button>
        </>
    );
};

export default Buttons;