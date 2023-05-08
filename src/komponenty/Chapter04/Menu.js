import React from 'react';

const Menu = ({menu}) => {
    return (
        <ul>
            {
                menu.map(el => <li key={el.url}><a href={el.url}>{el.text}</a></li>)
            } 
        </ul>
    );
};

export default Menu;
// Zmodyfikuj komponent `Menu` z poprzedniego tematu. Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).
// Obiekty mają być w takiej formie:
// ```js
// {
//   url: "adres_odnośnika",
//   text: "tekst linku"
// }
// ```
// Używając `map()` stwórz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.
// Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut menu:
// ```js
// [
//   {
//     url: "/",
//     text: "Strona główna"
//   },
//   {
//     url: "/blog",
//     text: "Blog"
//   },
//   {
//     url: "/cennik",
//     text: "Cennik"
//   },
//   {
//     url: "/kontakt",
//     text: "Kontakt"
//   }
// ]
// ```
