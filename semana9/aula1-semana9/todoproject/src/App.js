import React from 'react';
import 'typeface-roboto';
import {Provider} from 'react-redux';
import store from './store'
import Tarefas from './components/TodasTarefas'
import FormularioTarefa from './components/FormularioTarefa'

function App() {
  return (
    <Provider store={store}>
      <FormularioTarefa/>
      <Tarefas/>
    </Provider>
  );
}

export default App;
