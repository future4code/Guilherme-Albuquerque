import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createNewTask} from '../../actions/Tasks/index'
import styled from 'styled-components'

const MainContainer = styled.div`
font-family: 'Montserrat', sans-serif;
`

const StyledPTittle = styled.p`

letter-spacing: 2px;
font-size: 30px;
`

const StyledFuture4 = styled.p`

font-size: 15px;
`

const StyledInput = styled.input`
  border: 2px solid #00FF98;
  width: 30vw;
  height: 5vh;
  border-radius: 5px;
  margin-left: 5px;
`

const StyledSelect = styled.select`
  border: 2px solid #00FF98;
  height: 5vh;
  border-radius: 5px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`

const StyledButton = styled.button`
  border: 2px solid #00FF98;
  height: 5vh;
  border-radius: 5px;
  margin-left: 5px;
  width: 10vw;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`
export class HeaderContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: "",
      daySelect: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect = (value) => {
    this.setState ({
      [value.target.name]: value.target.value
    })
  }

  createTask = (ev) => {
    ev.preventDefault();
    this.props.createNewTask(this.state.inputText, this.state.daySelect)
 
  }
  
  render() {
    
    return (
      <MainContainer>
        <StyledPTittle>É hora de largar a procrastinação e planejar sua semana!</StyledPTittle>
        <StyledFuture4>From Future<span style={{"color": "#F57F20"}}>4</span></StyledFuture4>
       
        <form onSubmit={this.createTask}>
        
                    
          <StyledSelect
             name="daySelect"
             onChange = {this.handleSelect}
          >

            <option>Selecione um dia</option>
            <option label='Segunda-Feira' value='Segunda-Feira'/>
            <option label='Terça-Feira' value='Terça-Feira'/>
            <option label='Quarta-Feira' value='Quarta-Feira'/>
            <option label='Quinta-Feira' value='Quinta-Feira'/>
            <option label='Sexta-Feira' value='Sexta-Feira'/>
            <option label='Sábado' value='Sábado'/>
            <option label='Domingo' value='Domingo'/>
          </StyledSelect>

          <StyledInput
            type="text" label="Digite sua tarefa: "
            name="inputText" 
            value={this.state.inputText}
            onChange={this.handleInput}
          />

          <StyledButton type="submit">Enviar!</StyledButton>
        </form>
      </MainContainer>

    );
  }
}

function mapDispatchToProps(dispatch){
  return ({
    createNewTask: (taskText, taskDay) => dispatch (createNewTask(taskText, taskDay))
  })
}

export default connect (null, mapDispatchToProps)(HeaderContainer)