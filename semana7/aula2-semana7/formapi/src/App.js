import React, { Component } from 'react';
import styled from 'styled-components'
import CreateUser from './createNewUser/index'

const AppDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px;

`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <CreateUser/>
      </AppDiv>
    );
  }
}

export default App;
