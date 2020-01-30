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

  createTask = () => {
    this.props.createNewTask(this.state.inputText, this.state.daySelect)
  }
  
  render() {
    
    return (
      <div>
        <form>
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

            <option></option>
            <option label='Segunda-Feira'/>
            <option>Terça-Feira</option>
            <option>Quarta-Feira</option>
            <option>Quinta-Feira</option>
            <option>Sexta-Feira</option>
            <option>Sábado</option>
            <option>Domingo</option>

          </select>

          <button onClick={this.createTask}>Enviar!</button>
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