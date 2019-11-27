import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fototextoComp/FotoTexto'
import FotoTexto from './fototextoComp/FotoTexto';
import GuiImg from './imgGui.jpg'
import DadosUsuario from './dados-componente/dados'
import EmailIcon from './icones/email-icon.svg'
import HouseIcon from './icones/house-icon.svg'
import PageSection from './page-section/PageSection'
import BotaoCont from './botao-conteudo/BotaoCont'
import ArrowDown from './icones/down-arrow.svg'
import FbIcon from './icones/fb-icon.svg'
import FutureIcon from './icones/future-icon.png'
import OutbackIcon from './icones/outback-icon.png'

function App() {
  return (
    <div className="App">
      <PageSection titulo="Dados Pessoais">
        <FotoTexto titulo="Gui Albuquerque" imagem={GuiImg} texto="Olá, eu sou o Guilherme. Sou aluno da escola Future4.
                                                                  Apaixonado por Tecnologia sempre tentando aprender um pouco mais,
                                                                  meu ponto forte é criatividade. Futuro desenvolvedor Full-Stack"/>
      
        <DadosUsuario imagem={EmailIcon} titulo="Email:" texto="guilhermeabq.f@gmail.com"/>
        <DadosUsuario imagem={HouseIcon} titulo="Endereço:" texto="Av: Jorge Zarur 431"/>
        <BotaoCont imagem={ArrowDown} texto="Ver mais"/>
      </PageSection>

      <PageSection titulo="Experiências Profissionais">
        <FotoTexto imagem={FutureIcon} titulo="Future4" texto="Formando desenvolvedores para o Futuro"/>
        <FotoTexto imagem={OutbackIcon} titulo="Outback" texto="4 anos de experiência na empresa que ganhou o premio de melhor atendimento do Brasil em 2017/2018"/>
      </PageSection>

      <PageSection titulo="Minhas redes sociais">
        <BotaoCont imagem={FbIcon} texto="Facebook"/>
      </PageSection>
    </div>
  );
}

export default App;
