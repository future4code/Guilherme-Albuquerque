import React, { Component } from 'react';
import logo from './logo.svg';
import TextoTarefa from './componentes/TextoTarefas/TextoTarefas'
import styled from 'styled-components'

const RedTitle = styled.h1`
  color: green;
  border: 1px solid black
`
  
const MainApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component {
  render() {
    return (
      <MainApp>
        <RedTitle>Lista de Tarefas</RedTitle>
        
        <TextArea>
          <TextoTarefa/>
        </TextArea>
        
      </MainApp>
    );
  }
}

export default App;
