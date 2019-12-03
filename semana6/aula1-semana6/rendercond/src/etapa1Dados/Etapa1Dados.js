import React from 'react'
import './Etapa1Dados.css'



class Etapa1Dados extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div>
                <h2>ETAPA 1 -Dados gerais</h2>

                <div>
                    <p>1 - Qual é o seu nome?</p>
                    <input></input>
                </div>

                <div>
                    <p>2 - Qual a sua idade?</p>
                    <input></input>
                </div>

                <div>
                    <p>3 - Qual seu email?</p>
                    <input></input>
                </div>

                <div>
                    <p>4 - Qual sua escolaridade?</p>
                    <select name="select">
                        <option value="valor1">Ensino médio incompleto</option> 
                        <option value="valor2">Ensino médio completo</option>
                        <option value="valor3">Ensino superior incompleto</option>
                        <option value="valor4">Ensino superior completo</option>
                    </select>
                </div>
                              
            </div>
        )
    }
};

export default Etapa1Dados;