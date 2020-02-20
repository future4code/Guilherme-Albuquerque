import React from 'react';
import 'typeface-roboto';
import {Provider} from 'react-redux';
import store from './store'
import Tarefas from './components/TodasTarefas'
import FormularioTarefa from './components/FormularioTarefa'
import styled from 'styled-components'
import Titulo from './components/TituloToDo'

const MainPageContainer = styled.div `
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  return (
    <Provider store={store}>
      <MainPageContainer>
        <Titulo/>
        <FormularioTarefa/>
        <Tarefas/>
      </MainPageContainer>
    </Provider>
  );
}

export default App;
