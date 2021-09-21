import "./ListaAlunos.css"
import React from "react";
import alunos from "../../data/alunos"

export default props => {
    

    const alunosJSX = alunos.map((aluno) => {
        return (<li key={aluno.id} className="front">
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>)
    })
    return (
        <div>
            <ul style={{ listStyle: "none"}}>
                {alunosJSX}
            </ul>
        </div>
    )
}