import React from "react";
import { connect } from "react-redux";
import {HeaderContainer} from '../HeaderContainer/index'

class Planner extends React.Component {
  render() {
    return (
    
    <div>
      <HeaderContainer/>
    </div>  
    
    
    )    
  }
}

export default connect()(Planner);
