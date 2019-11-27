import React from 'react';
import './BotaoCont.css'

function BotaoCont(props){
    return(
        <div className="botao-cont">
            <img src={props.imagem} />
            <p>{props.texto}</p>
        </div>
    )
}

export default BotaoCont;