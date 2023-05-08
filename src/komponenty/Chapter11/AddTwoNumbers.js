import {useEffect, useState} from 'react';

const AddTwoNumbers = () => {
    const [liczba1, setLiczba1] = useState(0);
    const [liczba2, setLiczba2] = useState(0);
    const [wynik, setWynik] = useState(0);
    const zmiana = (e) =>{
        if(!isNaN(liczba1) && !isNaN(liczba2))
            return setWynik(parseInt(liczba1) + parseInt(liczba2));
        else
            setWynik("Podaj dwie liczby");
        
    }
    useEffect(() => {
            zmiana();
    }, [liczba1, liczba2])
    return (
        <form>
            Liczba 1: <input 
                type="text" 
                value={liczba1} 
                onChange={(e) => setLiczba1(e.target.value)} />
            Liczba 2: <input 
                type="text" 
                value={liczba2} 
                onChange={(e) => setLiczba2(e.target.value)} />
            <h1>{wynik}</h1>
        </form>
    );
};

export default AddTwoNumbers;