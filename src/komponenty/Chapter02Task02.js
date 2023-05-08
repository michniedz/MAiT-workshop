import React from 'react';

const Chapter02Task02 = () => {
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const a = randomNumber();
    const b = randomNumber();
    const wynik = parseInt(prompt(`Jaki jest wynik dodwania ${a} i  ${b}`));
    const poprawna = React.createElement("div", { style: { background: "green" } }, "Odpowiedź poprawna");
    const bledna = React.createElement("div", { style: { background: "red" } }, "Odpowiedź błędna");

    if (wynik === a + b){
        return (
                    <div>
                            {poprawna}
                    </div>
                );
    }else{
        return (
                    <div>
                        {bledna}
                    </div>
                );
    }
};

export default Chapter02Task02;