import React from "react"

export default function ComParametro(params){
    console.log(params)
    const status = params.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        
        <div>
            <h2>{params.titulo}</h2>
            <p>
            <strong>{params.aluno} </strong> tem nota <strong> {params.nota}</strong> e foi <strong>{ status }</strong>
            </p>
            
        </div>
        )
}