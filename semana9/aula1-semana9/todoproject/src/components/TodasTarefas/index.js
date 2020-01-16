import React from 'react'
import {connect} from 'react-redux'
import Tarefa from '../Tarefas'


const ListaDeTarefas = (props) => {
    return (
        <ul>    
            {props.todasTarefas.map((tarefa) => (<Tarefa key={tarefa.id} tarefa={tarefa}/>))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todasTarefas: state.tarefasReducer.todasTarefas
})

export default connect (mapStateToProps, null) (ListaDeTarefas)