import React from "react";
import { useSelector } from "react-redux";

const RandomNumber: React.FC = () => {
    const { number, failure } = useSelector((state ) => state.number)

    return (
        <>
            {failure && <span style={{color: 'red'}}>Número não permitido</span>}
            <h1>{number}</h1>
        </>
    )
}

export default RandomNumber;