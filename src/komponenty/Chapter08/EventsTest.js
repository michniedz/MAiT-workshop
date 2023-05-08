import React from 'react';

const EventsTest = () => {
    return (
        <div onClick={() => console.log("Kliknięto na div")} onMouseLeave={() => console.log("Wyjechano myszą")} onMouseEnter={() => console.log("Najechano myszą")}
        style = {{
            width: "200px",
            height: "200px",
            background: "red",
            verticalAlign: "center",
            textAlign: "center"
        }}>
            BLOK DIV
        </div>
    );
};

export default EventsTest;