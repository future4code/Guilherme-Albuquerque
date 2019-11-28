import React from 'react'
import './MainPost.css'

class MainPost extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div className="header">
                

                <div className="header-titulo">
                    <img src={this.props.img} alt="Thumbnail" className="icon-profile"/>
                    <p>{this.props.titulo}</p>
                    <img src={this.props.verMais}/>
                </div>

                <div className="imagem-post">
                    <img src={this.props.imagemPost} alt="Thumbnail"/>

                </div>
                              
            </div>
        )
    }
};

export default MainPost;