import React from 'react'
import {connect} from 'react-redux'
import {criarTarefa} from '../../actions/todo'

class FormularioTarefa extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            novaTarefaTxt: "",
        }
    }


    //Lida com input controlado
    lidaComMudancaTarefa = (event) => {
        this.setState({
            novaTarefaTxt: event.target.value
        })
    }

    //Ao apertar Enter
    lidaComEnter = (event) => {
        if(event.key === "Enter"){
            this.lidaComCriarTarefa();
        }
    }

    //Criar nova tarefa
    lidaComCriarTarefa = () => {
        const novaTarefa = {
            id: new Date().getTime(),
            texto: this.state.novaTarefaTxt,
            completed: false,
        }

        this.props.criarNovaTarefa(novaTarefa);
    }

    render() {
        return (
            <input type="text" value={this.state.novaTarefaTxt}
             onChange={this.lidaComMudancaTarefa}
             onKeyPress={this.lidaComEnter}
             />

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    criarNovaTarefa : (tarefa) => dispatch (criarTarefa(tarefa))
})

export default connect (null, mapDispatchToProps) (FormularioTarefa);