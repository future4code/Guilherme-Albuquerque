import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Pokedex from '../../img/pokedex.png'


const baseURL = "https://pokeapi.co/api/v2/"

const DivDados = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: -715px;
left: 375px;
select {
    background: #C1E8FF;
    font-size: 15px;
    width: 200px;
}

img{
    width: 160px;
}
`
const DivBackground = styled.div`
`

const ImgPokedex = styled.img`
width: 60rem;
`

const DivPokemonSkills = styled.div`
position: absolute;
top: 490px;
left: 810px;

`

class Pokelist extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            AllPokeList: [],
            PokeUrlSkills: "",
            PokeSkills: [],
            PokePhoto: "",
        });

    
    }
componentDidMount(){
    this.catchAllPokemons();
}

catchAllPokemons = async () => {
    const response = await axios.get(`${baseURL}pokemon?limit=151`)
    this.setState ({AllPokeList: response.data.results})
}

getPokemonDetails = async (event) =>{
    const pokemonDetailsURL = event.target.value;
    const response = await axios.get(pokemonDetailsURL);
    this.setState ({
        PokeSkills: response.data.abilities,
        PokePhoto: response.data.sprites.front_default,

    })

}
render (){
    return (
        <DivBackground>
            <ImgPokedex src={Pokedex}/>
            <DivDados>   
                <h3>Selecione um Pokémon:</h3>
                <select onChange={this.getPokemonDetails}>
                    <option>Selecione o pokemon:</option>
                    {this.state.AllPokeList.map((pokemon) => (<option value={pokemon.url}>{pokemon.name}</option>))}
                    
                </select>
                <img src={this.state.PokePhoto}/>
            </DivDados>
            <DivPokemonSkills>
                <p>Skills: </p>
                <p>{this.state.PokeSkills.map((skills) => (<li>{skills.ability.name}</li>))}</p>

            </DivPokemonSkills>
        </DivBackground>
        )
}
    
}

export default Pokelist;