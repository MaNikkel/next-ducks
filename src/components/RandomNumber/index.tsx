import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store"

const RandomNumber: React.FC = () => {
    const number = useSelector((state: RootState) => state.number.number)

    return (
        <h1>{number}</h1>
    )
}

export default RandomNumber;