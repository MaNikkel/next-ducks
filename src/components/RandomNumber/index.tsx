import React from "react";
import { useSelector } from "react-redux";

const RandomNumber: React.FC = () => {
    const { number } = useSelector((state ) => state.number)

    return (
        <h1>{number}</h1>
    )
}

export default RandomNumber;