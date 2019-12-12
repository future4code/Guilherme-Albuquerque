import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UsersList from '../userslist/index'


const InputDiv = styled.div`
display: flex;
flex-direction: column;
width: 20vw;
input {
    margin: 10px 0px;
}`;

const ButtonSend = styled.button`
color: white;
background: black;
`;

const ButtonOutraPagina = styled.button`
margin-top: 20px;
`





class InputsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            nome: "",
            email: "",
            isLoggedIn: false
        })
    }

    createUser = () => {
        const url = "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser"
        const token = "guilherme"
        const data = {name: this.state.nome,
                      email: this.state.email} 
        
        const request = axios.post(url,data, {
            headers: {
            "api-token": token}})

        request.then(response => {
            alert("Tudo certo!")
            this.setState({nome: ""})
            this.setState({email: ""})
        }).catch(error => {
            alert(error.message)
        })


    }
    
    handleNameChange = (event) => {
        this.setState(
            {nome: event.target.value}    
        );
      }
      


    handleEmailChange = (event) => {
        this.setState(
            {email: event.target.value}    
        );
      }
      

    changePage = () => {
        if (this.state.isLoggedIn === false){
            this.setState({
                isLoggedIn: true
            })
        }
        else{
            this.setState({
                isLoggedIn: false
            })
        }
    }

    
      
    render (){
        // Define o texto do botão da troca de página
        const buttonText = this.state.isLoggedIn === true ? "Ir para cadastro":"Ir para lista";
        
        
        return (
            
           <div>
               {/*Renderização condicional*/}
               
               <ButtonOutraPagina onClick={this.changePage}>{buttonText}</ButtonOutraPagina>
               {this.state.isLoggedIn === false ?

               <InputDiv>
               <h3>Cadastro Usuários: </h3>
               <label>Nome:</label>
               <input type="txt" value={this.state.nome}onChange={this.handleNameChange}></input>
               <label>Email:</label>
               <input type="txt" value={this.state.email   } onChange={this.handleEmailChange}></input>
               <ButtonSend onClick={this.createUser}>Enviar</ButtonSend>
               </InputDiv> :
               
               <UsersList/>}



           
            </div> 

        )
    
    }
}



export default InputsContainer;