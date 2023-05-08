import React from 'react';

const ShowUserFunc = ({imie, nazwisko}) => {
    return (
        <>
            <button onClick={(e) => console.log(e, imie, nazwisko)}>Dane użytkownika</button>
        </>
    );
};

export default ShowUserFunc;