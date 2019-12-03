import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './etapa1Dados/Etapa1Dados'
import Etapa2 from './etapa2Dados/Etapa2Dados'
import Etapa3 from './etapa3Dados/etapa3Dados'
import EtapaFinal from './etapaFinal/EtapaFinal';

class App extends Component {
    constructor(props){
    super(props);
      
    this.state = {
      tela: 'etapa1'
    }  
  }

  onClickEtapa2 = () => {
    this.setState({ tela: "etapa2"});
  };

  onClickEtapa3 = () => {
    this.setState({ tela: "etapa3"});
  };

  onClickEtapaFinal = () => {
    this.setState({ tela: "final"});
  };
  
  
    render() {
      let tela;
      switch(this.state.tela){
        case "etapa1":
          tela = (
          <div>
            <Etapa1/>
            <br></br>
            <button onClick = {this.onClickEtapa2}>Enviar</button>
          </div>
          );
          break;
        case "etapa2":
          tela = (
            <div>
              <Etapa2/>
              <br></br>
              <button onClick = {this.onClickEtapa3}>Próxima etapa</button>
           </div>
          );
          break;
        case "etapa3":
          tela = (
            <div>
              <Etapa3/>
              <br></br>
              <button onClick = {this.onClickEtapaFinal}>Próxima etapa</button>
            </div>
          );
          break;
        default:
          tela = (
           <div>
              <EtapaFinal/>
          </div>
          )
      }

      return (
        <div className="App">
          {tela}
        </div>
      );

     
    
  }
}

export default App;

// return (
//   <div>
//     <div className="etapa1">
//       <Etapa1/>
//       <br></br>
//       <button>Enviar</button>
//     </div>
    
//     <div className="etapa2">
//       <Etapa2/>
//       <br></br>
//       <button>Próxima etapa</button>
//     </div>

//     <div className="etapa3">
//       <Etapa3/>
//       <br></br>
//       <button>Próxima etapa</button>
//     </div>

//     <div classname="etapaFinal">
//       <EtapaFinal/>


//     </div>
//   </div>