import React from 'react';

const Chapter02Task03 = () => {
    const redDiv = React.createElement("div", { id:  "red", style: {background:'red', height: '100px'} }, "Kolor czerwony");
    const greenDiv = React.createElement("div", { id:  "green", style: {background:'green', height: '100px'} }, "Kolor zielony");
    const blueDiv = React.createElement("div", { id:  "blue", style: {background:'blue', height: '100px'} }, "Kolor niebieski");
    const BlueDiv2 = <div style = {{
                        backgroundColor: "blue",
                        width: "200px",
                        height: "200px"
                    }} />;
    return (
        <>
            {redDiv}
            {greenDiv}
            {blueDiv}
            {BlueDiv2}
        </>
    );
};

export default Chapter02Task03;

// Stwórz trzy zmienne (redDiv, greenDiv, blueDiv) zawierające strukturę JSX pustego elementu div.
// Ustaw wszystkim trzem div-om wysokość na 100px, a każdemu z nich ustaw kolor tła odpowiadający jego nazwie.
// Style dodaj liniowo lub przekazując obiekt ze stylami.
// Następnie w elemencie o klasie App wyrenderuj stworzone elementy.