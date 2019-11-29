import React from 'react'
import './BarraInterativa.css'
import LikeHeart from './img/like-heart.png'
import FilledHeart from './img/filled-heart.png'
import CommentIcon from './img/coment-icon.svg'
import SendIcon from './img/send-icon.svg'
import SaveIcon from './img/icon-save.png'
import ProfileFoto from './img/profile-foto.jpg'
import { thisExpression } from '@babel/types'



class BarraInterativa extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estadoDoLike: false,
            quantidadeDeLikes: 54,
            emptyHeart: LikeHeart,
            quantidadeDeComentarios: 4,
            estadoDoComent: false,
        };
    }

    aoClicarNoLike = () => {
        const somaQuantidade = this.state.quantidadeDeLikes + 1;
        const diminuirQuantidade = this.state.quantidadeDeLikes -1;
        if (this.state.estadoDoLike == false){
            this.setState({
            quantidadeDeLikes: somaQuantidade,
            estadoDoLike: true,
            emptyHeart: FilledHeart
            })
        }
        else{
            this.setState({
                quantidadeDeLikes: diminuirQuantidade,
                estadoDoLike: false,
                emptyHeart: LikeHeart

            })
        }
       
    }

    aoClicarNoComment = () => {
        if(this.state.estadoDoComent == false){
            this.setState({
                estadoDoComent: true
            });
        }

        else{
            this.setState({
                estadoDoComent: false
            });
        }
    }

    aoClicarNoEnviar =() => {
        const SomaComentario = this.state.quantidadeDeComentarios + 1;
        this.setState({
            quantidadeDeComentarios: SomaComentario,
            estadoDoComent: false
            })
    }
    
    
    retornaEstadoComent = () => {
        if(this.state.estadoDoComent == true){
            return(
                
                <div className="inputDeComentario">
                    <img src={ProfileFoto}/>
                    <input></input>
                    <button onClick={this.aoClicarNoEnviar}>Enviar</button>
                </div>
                
            )
        }
        else{
            return(
                <div></div>
            )
            
        }
    }


    render () {
        return(
            <div>
                <section className="barra-interativa">
                <img src={this.state.emptyHeart} onClick={this.aoClicarNoLike}/>
                <img src={CommentIcon} onClick={this.aoClicarNoComment}/>
                <img src={SendIcon}/>
                <img src={SaveIcon}/>
                </section>

                <section className="contador">
                    <img src={this.props.img}/>
                    <p>Curtido por {this.state.estadoDoComent}<strong>Astrodev</strong> e <strong>outras {this.state.quantidadeDeLikes} pessoas</strong></p>
                </section>

                <div className="texto-foto">
                    <p><h3>{this.props.tituloAutor}</h3>{this.props.texto}</p>
                    <p>Ver mais todos os {this.state.quantidadeDeComentarios} comentários</p>
                    
                    {
                        this.retornaEstadoComent()
                    }
                    
                </div>
            </div>
        )
    }
};

export default BarraInterativa;