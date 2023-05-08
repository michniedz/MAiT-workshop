import React from 'react';

const HoverEvent = () => {
    return (
        <>
            <button onMouseEnter={() => console.log("Najechano na przycisk!")}>Hover</button>
        </>
    );
};

export default HoverEvent;