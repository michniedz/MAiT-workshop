import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(10);
    return (
        <>
            <h2>Liczba kliknięć: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(10)}>RESET</button>
        </>
    );
};

export default Counter;