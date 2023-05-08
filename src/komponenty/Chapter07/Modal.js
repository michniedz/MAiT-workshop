import {useEffect, useState} from "react";

const Modal = ({heading}) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setShow(prev => !prev);//true
        }, 10000); 
    }, [])
    return (
        <>
            { show && <h1>{heading}</h1> }
        </>
    );
};

export default Modal;

// Stwórz komponent `Modal`. Przyjmuje on przez `props` wartość `heading`, np. "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`.
// Komponent ten ma wyrenderować tekst, który znajduje się w props `heading` dopiero po 10 sekundach. W tym celu w odpowiedniej metodzie cyklu życia stwórz `timer`, który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** z `false` na `true`, a tym samym uruchomi ponownie render i wyświetli informację z propsa.
// Ma on być wyrenderowany w komponencie `App`:
// ```js
// const App = () => {
//   return (
//     <div>
//       <h1>Test okna modalnego</h1>
//       <Modal heading="Zapisz się do newslettera"/>
//     </div>
//   );
// };
// ```
// Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, komponent ten powinien renderować `null`.