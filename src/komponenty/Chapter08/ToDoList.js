import { useState } from 'react';

const ToDoList = () => {
    const [tab, setTab] = useState([]);
    const dodawanie = () =>{
        const n = tab.length + 1;
        setTab([...tab, 'Zadanie ' + n]);
    }
    return (
        <>
            <button onClick={dodawanie}>Dodaj zadanie</button>
            <ul>
                {   
                    tab.map(el => (<li key={el}>{el}</li>))
                }
            </ul>
        </>
    );
};

export default ToDoList;