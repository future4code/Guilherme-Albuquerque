import React from "react";
import { connect } from "react-redux";
import HeaderContainer from '../HeaderContainer/index'
import TaskPanel from '../TaskPanel/index'

class Planner extends React.Component {
  render() {
    return (
    
    <div>
      <HeaderContainer/>
      <TaskPanel/>
    </div>  
    
    
    )    
  }
}

export default connect()(Planner);
