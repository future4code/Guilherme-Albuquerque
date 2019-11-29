import React from 'react'
import './MainBox.css'

class MainBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            msgEnviada: false,
            usuario: "",
            msg: ""
        }
        

    }

    aoClicar = () =>{
        this.setState({
            msgEnviada: true,
            
        })
    }

    mostraMsg = () => {
        
        if (this.state.msgEnviada ==  true){
            return(
                <div className="box-msg">
                    <p><strong>{this.state.usuario}</strong>:</p>
                    <p>{this.state.msg}</p>
                </div>

                
            )

        }
       
    }

    aoMudarOTextoDoInput = (event) => {
        this.setState({
            usuario: event.target.value 
        })
    }

    aoMudarOTextoDaMsg = (event) => {
        this.setState({
            msg: event.target.value 
        })
    }
    

    render () {
        return(
            
            <div className="main-container">
                <div className="chatBox">
                    {this.mostraMsg ()}
                </div>
                <div className="barra-msg">
                    <input 
                            placeholder="Usuario"                   
                            onChange = {this.aoMudarOTextoDoInput}
                    />

                <input className="msgbox" placeholder="Mensagem" onChange={this.aoMudarOTextoDaMsg}></input> 
                    
                    <button onClick={this.aoClicar}>Enviar</button>
                </div>
            </div>
        )
    }
};

export default MainBox;