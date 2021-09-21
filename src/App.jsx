import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParamento";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

export default () =>
    <div className="App">
        <h1> Fundamentos React(Arrow_) </h1>

        <div className="Cards" >
            <Card
                titulo="#07 - Tabela" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card
                titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card
                titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Vasconcelos">
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    <FamiliaMembro nome="Lucas" ></FamiliaMembro>
                    <FamiliaMembro nome="Juliana" ></FamiliaMembro>
                     
                    
                </Familia>
            </Card>
            <Card
                titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                    min={1}
                    max={10}
                />

            </Card>
            <Card
                titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card
                titulo="#02 - ComParametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Gustavo"
                    nota={6.9}
                />
            </Card>
            <Card
                titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>







    </div>
