import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createNewTask} from '../../actions/Tasks/index'


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
      <div>
        <form onSubmit={this.createTask}>
          <input
            type="text" label="Digite sua tarefa: "
            name="inputText" 
            value={this.state.inputText}
            onChange={this.handleInput}
          />
                    
          <select
             name="daySelect"
             onChange = {this.handleSelect}
          >

            <option/>
            <option label='Segunda-Feira' value='Segunda-Feira'/>
            <option label='Terça-Feira' value='Terça-Feira'/>
            <option label='Quarta-Feira' value='Quarta-Feira'/>
            <option label='Quinta-Feira' value='Quinta-Feira'/>
            <option label='Sexta-Feira' value='Sexta-Feira'/>
            <option label='Sábado' value='Sábado'/>
            <option label='Domingo' value='Domingo'/>
          </select>

          <button type="submit">Enviar!</button>
        </form>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch){
  return ({
    createNewTask: (taskText, taskDay) => dispatch (createNewTask(taskText, taskDay))
  })
}

export default connect (null, mapDispatchToProps)(HeaderContainer)