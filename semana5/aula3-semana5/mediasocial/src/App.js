import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPost from'./MainPost/MainPost'
import Futureicon from './img/future-icon.png'
import SeeMore from './img/vejamais-icon.svg'
import FuturePhoto from './img/foto-future.png'
import LikeHeart from './img/like-heart.png'
import BarraInterativa from './Barra-interativa/BarraInterariva';
import ContadorLikes from './ContadorLikes/ContadorLikes'
import LikeProfile from './ContadorLikes/img/profile-foto.jpg'
import TextoFoto from './TextoFoto/TextoFoto'
import LogiLogo from './img/logi.png'
import LogiPost from './img/logi-post.png'
import NintendoPost from './img/nintendo-post.png'
import NintendoLogo from './img/nintendo-logo.png'
import Form from './Form/Form'

function App() {
  return (
    <div className="App">
      <MainPost img={Futureicon} titulo="Future4" verMais={SeeMore} imagemPost={FuturePhoto}/>

      <BarraInterativa img={LikeProfile} tituloAutor="Future4" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                      Phasellus elemen congue in.
                                                                      Nunc vulputate enim neque."/>

      <MainPost img={LogiLogo} titulo="LogiTech" verMais={SeeMore} imagemPost={LogiPost}/>

      <BarraInterativa img={LikeProfile} tituloAutor="LogiTech" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                      Phasellus elemen congue in.
                                                                      Nunc vulputate enim neque."/>

      <MainPost img={NintendoLogo} titulo="Nintendo" verMais={SeeMore} imagemPost={NintendoPost}/>

      <BarraInterativa img={LikeProfile} tituloAutor="Nintendo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                      Phasellus elemen congue in.
                                                                      Nunc vulputate enim neque."/>

      <Form/>                                                                
    </div>
  );
}

export default App;
