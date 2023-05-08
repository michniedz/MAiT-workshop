import {useState} from 'react';

const ColorfulBoxes = () => {
    const [boxList, setBoxList] = useState([]);
    const losujBoxa = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBoxList(prev => {
            return[...prev, <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: randomColor,
            }}/>]
        })
    }
    return (
        <>
            <button onClick={losujBoxa}>Dodaj Boxa</button>
            <div>

            </div>
            {
                boxList
            }
        </>
    );
};

export default ColorfulBoxes;