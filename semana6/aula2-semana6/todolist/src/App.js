import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextoTarefa from './componentes/TextoTarefas/TextoTarefas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lista de Tarefas</h1>
        
        <div className="text-area">
          <TextoTarefa/>
        </div>
        
      </div>
    );
  }
}

export default App;
