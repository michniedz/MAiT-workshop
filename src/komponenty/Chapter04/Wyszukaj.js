import React from 'react';

const Wyszukaj = () => {
    return (
        <div>
            <input type='search' />
            <button>Wyszukaj</button>
            <input type='button' value='Wyszukaj' />
        </div>
    );
};

export default Wyszukaj;

// Stwórz komponent wyszukiwarki. Powinien on posiadać jedno pole tekstowe `input` i obok `button` "Wyszukaj".
// Póki co, komponent ten ma nic więcej nie robić. Wyrenderuj go na stronie.