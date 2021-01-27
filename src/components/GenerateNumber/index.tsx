import React from "react";
import { useDispatch } from "react-redux";
import { generateNumberRequest, resetNumber, multiplyNumberRequest } from "../../store/ducks/number";

const RandomNumber: React.FC = () => {
    const dispatch = useDispatch();
    const handleClickGenerate = () => {
        dispatch(generateNumberRequest(Math.random()*10));
    }
    const handleClickReset = () => {
        dispatch(resetNumber());
    }
    const handleClickMultiply = () => {
        dispatch(multiplyNumberRequest(2));
    }

    return (
        <>
            <button onClick={handleClickGenerate}>Gerar numero</button>
            <button onClick={handleClickReset}>Zerar numero</button>
            <button onClick={handleClickMultiply}>Dobrar numer</button>
        </>
    )
}

export default RandomNumber;