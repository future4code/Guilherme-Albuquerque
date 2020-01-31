import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTasks} from '../../actions/Tasks/index'

const diasDaSemana =["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"]
class TaskPanel extends Component {
  constructor(props){
    super (props) 
  }

componentDidMount () {
  this.props.getTasks()
}
  render() {
    console.log(this.props.tasks)  
    
    return (

      <div>
        {diasDaSemana.map(day => (
          <div>
            <h3>{day}</h3>
            <ul>{
              this.props.tasks.filter(
                task => task.day === day
              ).map (
                task => <li><p>Oi</p></li>
              )
            }</ul>
          </div>
        ))}
      </div>

    );
  }
}

const mapStateToProps = state => ({
    tasks: state.postReducer.tasks
});

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch (getTasks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPanel);
