import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fototextoComp/FotoTexto'
import FotoTexto from './fototextoComp/FotoTexto';
import GuiImg from './imgGui.jpg'
import DadosUsuario from './dados-componente/dados'
import EmailIcon from './icones/email-icon.svg'
import HouseIcon from './icones/house-icon.svg'

function App() {
  return (
    <div className="App">
      <FotoTexto titulo="Gui Albuquerque" imagem={GuiImg} texto="Olá, eu sou o Guilherme. Sou aluno da escola Future4.
                                                                 Apaixonado por Tecnologia sempre tentando aprender um pouco mais,
                                                                 meu ponto forte é criatividade. Futuro desenvolvedor Full-Stack"/>
    
      <DadosUsuario imagem={EmailIcon} titulo="Email:" texto="guilhermeabq.f@gmail.com"/>
      <DadosUsuario imagem={HouseIcon} titulo="Endereço:" texto="Av: Jorge Zarur 431"/>
    </div>
  );
}

export default App;
