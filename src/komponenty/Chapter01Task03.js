import artist from '../data/artist';
import React from 'react';

const Chapter01Task03 = () => {
    return ( 
        <div>
            <h1>Zadanie 3</h1>
            <ul>
                <li>{ artist.nickname }</li>
                <li>{ artist.firstName }</li>
                <li>{ artist.lastName }</li>
                <li>{ artist.age }</li>
            </ul>
        </div>
    );
};

export default Chapter01Task03;