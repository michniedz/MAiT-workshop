import React from 'react';
import egzaminy from '../data/egzaminy';
const Chapter03Task04 = () => {
    return (
        <>
            <h3>Lista osób, które zdały</h3>
            <ul className="" >
                { 
                    egzaminy.map(el => {
                        return (
                            el.pkt > 50 ? <li className='zdal' key={el.id}>{el.name} + {el.surname}. Ilość punktów {el.pkt}</li> : <div></div> 
                        ) 
                    } ).sort()
                }
            </ul>
            <h3>Lista osób, które nie zdały</h3>
            <ul className="" >
                {
                    egzaminy.map(el => {
                        return (
                            el.pkt <= 50 ? <li className='niezdal' key={el.id}>{el.name} + {el.surname}. Ilość punktów {el.pkt}</li> : <div></div>
                        ) 
                    } ).sort()
                }
            </ul>
        </> 
    );
};

export default Chapter03Task04;

// Stwórz tablicę obiektów zawierających wyniki egzaminu np 5 osób. Obiekt powinien zawierać imię, nazwisko, liczbę punktów i informację czy student zdał.
// Wyrenderuj w elemencie o klasie App dwa elementy <ul>.
// W środku pierwszego elementu wyrenderuj listę studentów (imię i nazwisko), którzy zaliczyli egzamin. Użyj odpowiedniej metody tablicowej. W drugim wyrenderuj listę elementów li zawierających dane wszystkich studentów posortowanych malejąco według wyniku. Dodatkowo osoby, które zaliczyły egzamin niech wyswietlają się na zielono a te, które nie zaliczyły na czerwono.