import React from 'react';

const Chapter02Task04 = () => {
    const kolorRamki = prompt(`Wpisz kolor ramki (red, green, blue)`);
    let kolor = "";
    switch (kolorRamki){
        case "red":
            kolor = kolorRamki;
            break;
        case "green":
            kolor = kolorRamki;
            break;
        case "blue":
            kolor = kolorRamki;
            break;
        default:
            kolor = "none";
    }
    const style = <div style = {{
                        width: "100px",
                        height: "100px",
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderColor: kolor
                    }} />;
    return (
        <div>
            {style}
        </div>
    );
};

export default Chapter02Task04;
// Za pomocą prompt() zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.
// Sprawdź czy odpowiedź to red, green lub blue (możesz wykorzystać metodę indexOf() lub inną poznaną metodę tablicową).
// Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj element div z napisem "Nieprawidłowy kolor".
// Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj element div, ze stylami ustawionymi na:
//     Szerokość: 100px
//     Wysokość: 100px
//     Grubość ramki: 5px
//     Styl ramki: solid
//     Kolor ramki: ten podany przez użytkownika
