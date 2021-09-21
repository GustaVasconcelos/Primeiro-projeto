
import React from "react";

export default function Aleatorio(params) {
    const { min, max } = params

    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <strong>  <p>Valor minimo:{min} </p> </strong>
            <strong> <p>Valor maximo:{max} </p> </strong>
            <strong> <p>Valor escolhido:{random} </p></strong>
        </div>
    )
}