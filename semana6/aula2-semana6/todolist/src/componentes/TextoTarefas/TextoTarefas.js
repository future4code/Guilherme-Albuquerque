import React from 'react'
import './TextoTarefas.css'

class TextoTarefa extends React.Component{
    constructor(){
        super()
        this.state = {
            valorDoInput: ""
        }
    }

componentDidMount(){

}

componentDidUpdate() {
    const stateComoString = JSON.stringify(this.state);
    localStorage.setItem("valorInputs", stateComoString);
}

onChangeCampo1 = event => {
    this.setState({ valorDoInput: event.target.value });
};




render (){
    return (
        <div>
            <input type="text"
            value={this.state.valorDoInput}
            onChange = {this.onChangeCampo1}
            placeholder = {"Tarefa"}/>

            <button>Enviar</button>
        </div>
    )
}

}

export default TextoTarefa;