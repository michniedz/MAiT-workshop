import React from 'react';
import { useState } from 'react';

const CurrentDate = () => {
    const data = new Date();
    const [dzien, setDzien] = useState(1);
    const [miesiac, setMiesiac] = useState(1);
    const [rok, setRok] = useState(data.getFullYear());
    const [godzina, setGodzina] = useState(0);
    const [minuty, setMinuty] = useState(0);
    const [sekundy, setSekundy] = useState(0);
    return (
        <>
            Data:   {godzina}:{minuty}:{sekundy}, {dzien}/{miesiac}/{rok}   
            <button onClick={() => {
                    setDzien(data.getDate());
                    setMiesiac(data.getMonth()+1);
                    setRok(data.getFullYear());
                    setGodzina(data.getHours());
                    setMinuty(data.getMinutes());
                    setSekundy(data.getSeconds());
                    console.log("Data zaktualizowana");
                }
            }>Zaktualizuj datę</button>      
        </>
    );
};

export default CurrentDate;