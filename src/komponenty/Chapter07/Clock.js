import React, { useEffect, useState } from 'react';
import ClockDate from './ClockDate';
import ClockTime from './ClockTime';

const Clock = () => {
    const data = new Date();
    const [date, setDate] = useState(data.toLocaleDateString());
    const [godz, setGodz] = useState(data.toLocaleTimeString());
    useEffect(() => {
        const data = new Date();
        const timeOutID = setInterval(() =>{
            setDate(data.toLocaleDateString())
        }, 1000)
    }, []);
    useEffect(() => {
        const data = new Date();
        const timeOutID = setInterval(() =>{
            setGodz(data.toLocaleTimeString())
        }, 1000)
    }, []);

    return (
        <div>
            <ClockTime godz = {godz} />
            <ClockDate date = {date} />
        </div>
    );
};

export default Clock;