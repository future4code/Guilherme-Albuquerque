import React from 'react';
import './dados.css'

function DadosUsuario(props){
    return (
        <div className="container-dados">
            <img src={props.imagem} />
            <p><strong>{props.titulo}</strong></p>
            <p className="dados">{props.texto}</p>
        </div>


    )
}

export default DadosUsuario;