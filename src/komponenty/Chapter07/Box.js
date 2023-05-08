import {useEffect, useState} from "react";

const Box = () => {
    const [kolor, setKolor] = useState("green");
    useEffect (() => {
        const intervalID = setInterval(() =>{
            setKolor(prevState => {
                if(prevState === "green"){
                    return "red";
                }else{
                    return "green";
                }
            });
        }, 2000);
        return () => clearInterval(intervalID);
    })
    return (
        <div style={{
            width: "200px",
            height: "200px",
            background: kolor
        }}>
            
        </div>
    );
};

export default Box;