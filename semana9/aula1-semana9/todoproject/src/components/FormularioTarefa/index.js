import React from 'react'
import {connect} from 'react-redux'
import {criarTarefa} from '../../actions/todo'
import styled from 'styled-components'

const ButtonEnviar = styled.button `
    height: 8vh;
    font-family: 'Roboto', 'sans-serif';
    width: 10vw;
    font-size: 20px;

`
const Input = styled.input `
    width: 50vw;
    font-family: 'Roboto', 'sans-serif';
    height: 7vh;
    font-size: 5vh;
`

const ContainerDiv = styled.div`
    display: flex;
`


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
        this.setState({
            novaTarefaTxt: ""
        })

        this.props.criarNovaTarefa(novaTarefa);
    }

    render() {
        return (
            <ContainerDiv>
                <Input type="text" value={this.state.novaTarefaTxt}
                    onChange={this.lidaComMudancaTarefa}
                    onKeyPress={this.lidaComEnter}
                    placeholder="Qual tarefa deseja criar?"
                />

                <ButtonEnviar onClick={() => {this.lidaComCriarTarefa()}}>Enviar</ButtonEnviar>
            </ContainerDiv>

        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    criarNovaTarefa : (tarefa) => dispatch (criarTarefa(tarefa))
})

export default connect (null, mapDispatchToProps) (FormularioTarefa);