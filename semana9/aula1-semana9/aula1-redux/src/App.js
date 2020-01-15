import React from 'react';
import Styled from 'styled-components'

function adicionarItemToDo(item){
  return {
    type: 'ADICIONAR_TODO',
    payload: {
      item: item
    }
  }
}

function removerItemTodo(self){
  return{
    type: 'REMOVER_TODO',
    payload:{
      self: self
    }
  }
}

function checkItemTodo(check){
  return{
    type: 'CHECK_TODO',
    payload:{
      check: true
    }
  }
}

function checkAllItems(checkAll){
  return{
    type: 'CHECK_ALL',
    payload: {
      checkAll: true
    }
  }
}


function App() {
  return (
    <div className="App">
      <h1>Future Redux ToDo</h1>
      <input placeholder='o que tem que ser feito?'></input>
      <ul>
        <li>Use Redux</li>
      </ul>
      <p>Marcar como completas</p>
      <p>Todas</p>
      <p>Pendentes</p>
      <p>Completas</p>
    </div>
  );
}

export default App;
