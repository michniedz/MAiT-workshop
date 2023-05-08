import { useState } from 'react';

const RandomNumbers = () => {
    const [tab, setTab] = useState([]);

    const losuj = () => {
        const x = Math.round(Math.random() * 899 + 100);
        setTab([...tab, x]);
    }
    return (
        <>
            <button onClick={losuj}>Wylosuj liczbę</button>
            <ul>
                {   
                    tab.map((el, i) => (<li key={i}>{el}</li>))
                }
            </ul>
        </>
    );
};

export default RandomNumbers;