import React from 'react'
import './TextoFoto.css'

function TextoFoto(props){
    return(
        <div className="texto-foto">
            <p><h3>{props.tituloAutor}</h3>{props.texto}</p>
            <p>Ver mais todos os 3 comentários</p>
        </div>
    )
}

export default TextoFoto;