import React from 'react';

const ButtonToClick = ({updateCounter}) => {
    const clickPrzycisk = () => {
        if (typeof updateCounter === "function")
            updateCounter();
    }
    return (
        <button onClick={clickPrzycisk}>
            CunterUpdater
        </button>
    );
};

export default ButtonToClick;