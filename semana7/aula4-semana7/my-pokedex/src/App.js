import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import PokeList from './components/Pokelist.js/index'

const DivApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: grey;
height: 100vh;
`

function App() {
  return (
    <DivApp>
      <PokeList/>
    </DivApp>
  );
}

export default App;
