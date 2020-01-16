import React from 'react'
import {connect} from 'react-redux'
import {marcarTarefa} from '../../actions/todo'
import styled from 'styled.components'

const RemoveButton = styled.span `
    color: red
`

const Tarefa = (props) => {
    return (
        <li>
                <input 
                type="checkbox"
                checked={props.tarefa.completed}
                onClick={() => props.marcarTarefaComoCompleta(props.tarefa.id)}
                />
                {props.tarefa.texto} -
                <RemoveButton> X</RemoveButton>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => ({
    marcarTarefaComoCompleta: (tarefaId) => dispatch (marcarTarefa(tarefaId))
})

export default connect (null,mapDispatchToProps)(Tarefa)

