import React from 'react'
import {connect} from 'react-redux'
import {marcarTarefa, deletarTarefa} from '../../actions/todo'
import styled from 'styled-components'

const RemoveButton = styled.span `
    color: red;
    cursor: pointer;
    font-size: 20px;
    font-family: "Roboto", "sans-serif";
    margin-left: 10px;

`

const LiTexto = styled.li `
    font-size: 30px;
    font-family: 'Roboto', 'sans-serif';
    border: 0px;
    padding-top: 10px;
`

const ContainerTarefas = styled.div`
    display: flex;
`

const InputCheckBox = styled.input`
    width: 4vw;
    height: 4vh;
`

const Tarefa = (props) => {

    const lidarComDeletar = () => {
        if (window.confirm ("Você deseja apagar?")){
            props.apagarTarefa(props.tarefa.id)
        }
        
    }

    return (
            <ContainerTarefas>
                <LiTexto type="none">
                    <InputCheckBox 
                        type="checkbox"
                        checked={props.tarefa.completed}
                        onClick={() => props.marcarTarefaComoCompleta(props.tarefa.id)}
                    />
                    {props.tarefa.texto} 
                    <RemoveButton onClick={lidarComDeletar}>x</RemoveButton>
                </LiTexto>
            </ContainerTarefas>
    )
}

const mapDispatchToProps = (dispatch) => ({
    marcarTarefaComoCompleta: (tarefaId) => dispatch (marcarTarefa(tarefaId)),
    apagarTarefa: (tarefaId) => dispatch (deletarTarefa(tarefaId))
})

export default connect (null,mapDispatchToProps)(Tarefa)

