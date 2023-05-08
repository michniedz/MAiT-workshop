import React from 'react';

const CurrencyConverter = ({from, to, value, rate}) => {
    console.log(from, to, value, rate)
    return (
        <div>
            <strong>{value}</strong> {from} => <strong>{(rate*value).toFixed(2)}</strong> {to}
        </div>
    );
};

export default CurrencyConverter;