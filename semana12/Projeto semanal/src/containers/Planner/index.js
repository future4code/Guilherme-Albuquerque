import React from "react";
import { connect } from "react-redux";
import HeaderContainer from '../HeaderContainer/index'
import TaskPanel from '../TaskPanel/index'
import styled from 'styled-components'
import Loading from '../../images/loading-green.gif'

const MainContainer = styled.div`
  text-align: center;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 50px;
`

const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  justify-content: center;
  display: flex;
`


class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.myInterval = setInterval(()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000) 
  }


  render() {
    return (
    <div>
      {this.state.count > 3 ? 
      <MainContainer>
        <HeaderContainer/>
        <TaskPanel/>
      </MainContainer>
      :
      (<StyledLoading>
        <img src={Loading}></img>
      </StyledLoading>)
       }
      
    </div>
    
    
    
    )    
  }
}



export default connect()(Planner);
