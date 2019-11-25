import React from 'react';
import './App.css';
import cblol from './img/cblol.png';
import cs from './img/cs.png';
import jato from './img/jato.png';
import nba from './img/nba.png';
import hungria from './img/hungria.png';
import tibia from './img/tibia.png';
import wow from './img/wow.png';
import sounds from './img/sounds.png';
import barra from './img/barra-lateral.png'


function App() {
  return (
    <div id="main-container">
      <header>
        <h1>Future<span>4</span>Tube</h1>
        <input type="search" placeholder="Pesquisar"/>
      </header>
      <aside>
        <img src={barra} />
        <div className="menus">
        <p> Inicio</p>
        <p> Em alta</p>
        <p> Inscrições</p>
        <p> Biblioteca</p>
        <p> Historico</p>
        <p> Assistir mais tarde</p>
        </div>
      </aside>
        <section id="mid">
            <div className="imagens"><img src={cblol} alt="foto-pokebola" />
              <h3>CBLOL da Zoera</h3>
              <p>riotgames</p>
              <p>2,3 mi de visualizações • há 4 meses</p>
            </div>

            <div className="imagens"><img src={hungria} alt="foto-cebola" />
            <h3>Hungria Hip Hop - Primeiro Milhão</h3>
            <p>HungriaVEVO</p>
            <p>3,6 mi de visualizações • há 2 dias</p>
            </div>

            <div className="imagens"><img src={sounds}alt="foto-pratocima" />
            <h3>Deep Sounds Soundeo Mixes</h3>
            <p>SondeoVEVO</p>
            <p>1,6 mi de visualizações • há 7 dias</p>
            </div>

            <div className="imagens"><img src={cs} alt="foto-piano" />
            <h3>Fingi ser noob no CsGO</h3>
            <p>fnxcsgo</p>
            <p>123 mil visualizações •há 1 mês</p>
            </div>

            <div className="imagens"><img src={jato} alt="foto-mel" />
            <h3>Chilling on NewZealand</h3>
            <p>pilotafk</p>
            <p>12 mi de visualizações •há 3 meses</p>
            </div>

            <div className="imagens"><img src={nba} alt="foto-prato" />
            <h3>Opening NBA 2k19</h3>
            <p>NBAeSports</p>
            <p>9 mil visualizações •há 2 meses</p>
            </div>


            <div className="imagens"><img src={tibia}alt="foto-cafe" />
            <h3>War Tibia on Samera</h3>
            <p>cateroide</p>
            <p>12 mil visualizações •há 1 mês</p>
            </div>

            <div className="imagens"><img src={wow} alt="foto-casa" />
            <h3>Wow warrior guide</h3>
            <p>swiftwow</p>
            <p>1.2 mil visualizações •há 8 meses</p>
            </div>
        </section>

        <footer><h3>Olá eu sou o Mr.Footer</h3></footer>
    </div> 
  );
}

export default App;
