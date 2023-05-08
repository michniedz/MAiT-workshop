import React from 'react';
import artist from '../data/artist';

const Chapter03Task02 = () => {
    return (
        <>
            <h1>{artist.nickname} {artist.firstName} {artist.lastName}</h1>
            <span>{artist.age}</span>
        </>
    );
};

export default Chapter03Task02;
// W tym zadaniu wykorzystaj plik z informacjami o ulubionym artyście.
// Celem tego zadania jest wyświetlenie na stronie wszystkich informacji zawartych w tym obiekcie. Struktura tego elementu powinna wyglądać następująco:
// <h1>{ ksywka + imię + nazwisko }</h1>
// <span>{ wiek }</span>
// Bezpośrednim rodzicem elementów h1 i span ma być element o klasie App. Należy tutaj skorzystać z React.Fragment.