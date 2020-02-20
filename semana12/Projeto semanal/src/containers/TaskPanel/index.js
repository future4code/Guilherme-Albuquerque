import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTasks} from '../../actions/Tasks/index'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #00FF98;
  width: 170px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
`

const diasDaSemana =["Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado","Domingo"]

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  text-align: left;
`

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
      
      <MainContainer>
         
        {diasDaSemana.map(day => (
           <Card>
               <h3>{day}</h3>
            {this.props.tasks.filter(
              task => (
                task.day === day 
              )
            ).map(
             (task) => <li>{task.text}</li>
            )
            
            }

           </Card>
        ))}
      </MainContainer>

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
