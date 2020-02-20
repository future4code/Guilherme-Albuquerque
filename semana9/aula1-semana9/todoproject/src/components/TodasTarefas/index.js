import React from 'react'
import {connect} from 'react-redux'
import Tarefa from '../Tarefas'
import styled from 'styled-components'

const UlStyled = styled.ul `
    background: white;
    width: 57.4vw;
    margin-top: 0px;
    border: 0px;
    display: flex;
    align-items: left;
    flex-direction: column;
`


const ListaDeTarefas = (props) => {
    return (
        <UlStyled>    
            {props.todasTarefas.map((tarefa) => (<Tarefa key={tarefa.id} tarefa={tarefa}/>))}
        </UlStyled>
    )
}

const mapStateToProps = (state) => ({
    todasTarefas: state.tarefasReducer.todasTarefas
})

export default connect (mapStateToProps, null) (ListaDeTarefas)