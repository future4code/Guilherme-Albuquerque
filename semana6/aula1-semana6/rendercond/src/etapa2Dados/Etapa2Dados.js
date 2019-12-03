import React from 'react'
import './Etapa2Dados.css'



class Etapa2Dados extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÔES DE ENSINO SUPERIOR</h2>

                <div>
                    <p>5 - Qual curso?</p>
                    <input></input>
                </div>

                <div>
                    <p>6 - Qual a unidade de ensino</p>
                    <input></input>
                </div>                             
            </div>
        )
    }
}

export default Etapa2Dados;