import {useState} from 'react';

const TextTyper = ({text}) => {
    const [znak, setZnak] = useState(1);
    const zwieksz = () => {
        setZnak(prev => {
            if (prev + 1 <= text.length){
                return prev + 1
            }else{
                return prev
            }

                
        } );
    }
    const zmniejsz = () => {
        setZnak(prev => {
            if (prev > 1){
                return prev - 1
            }else{
                return prev
            }   
        });
    }
    return (
        <>
            {text.slice(0, znak)}
            <p>
                <button onClick={zwieksz}>+</button>
                <button onClick={zmniejsz}>-</button>
            </p>
        </>
    );
};

export default TextTyper;