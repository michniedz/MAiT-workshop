import React from 'react';
// import daneC6Z2 from '../../data/daneC6Z2';

const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} />
        </header>
    );
};

export default ShopItemHeader;