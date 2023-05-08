import React from 'react';

const LikeBox = ({ilosc}) => {
    
    return (
        <div>
            <button>{ilosc+1}</button>
        </div>
        
    );
};

export default LikeBox;

// Stwórz komponent o nazwie `LikeBox`.
// Powinien on składać się z licznika polubień oraz przycisku do kliknięcia, że użytkownikowi podoba się dana treść.
// Póki co, komponent ten ma nic więcej nie robić. Wyrenderuj go na stronie. Zadanie wykonaj w oparciu o **komponent funkcyjny**.