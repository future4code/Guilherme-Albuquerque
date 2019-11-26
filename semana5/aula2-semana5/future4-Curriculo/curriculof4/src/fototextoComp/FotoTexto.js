import React from 'react';
import './FotoTexto.css'

function Img (props){
    return(
        <img src={props.imagem} />
    )
}



function FotoTexto (props){
    return (
        <div className="container-Foto">
            <img src={props.imagem} />
            <p className="tituloP">{props.titulo}</p>
            <p>{props.texto}</p>
        </div>


    )
}

export default FotoTexto;   