import React from 'react'
import './etapa3Dados.css'



class Etapa3Dados extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div>
                <h2>ETAPA 3 - Informações gerais de ensino</h2>

                <div>
                    <p>5 - Por que você não terminou um curso de graduação?</p>
                    <input></input>
                </div>

               

                <div>
                    <p>6 - Você fez algum curso complementar?</p>
                    <select name="select">
                        <option value="nenhum">Nenhum</option> 
                        <option value="tecnico">Curso Tecnico</option>
                        <option value="ingles">Curso de inglês</option>
                    </select>
                </div>
                

            </div>
        )
    }
};

export default Etapa3Dados;