import React from 'react';

const Chapter02Task01 = () => {
    const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
    return (
        <div>
            <img src={imageUrl} id="app" alt="auto" />
        </div>
    );
};

export default Chapter02Task01;