
import {useState} from 'react'

const CountThings = () => {
    const [konto, setKonto] = useState(10000);
    const [wiek, setWiek] = useState(38);
    const piniandz = () => {
        setKonto(prev => prev + 1000)
    }
    return (
        <>
            <p>💰 so much money: {konto}</p>
            <p>Wiek: {wiek}</p>
            <button onClick={piniandz}>Get rich!</button>
            <button onClick={() => setWiek(prev => prev + 1)}>Get older</button>
        </>
    );
};

export default CountThings;