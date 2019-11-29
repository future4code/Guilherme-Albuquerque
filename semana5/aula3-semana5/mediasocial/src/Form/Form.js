import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div className="form">
                <form>
                    <label>Nome do usuário: </label>
                    <input type="text"></input>
                    <label>Foto de perfil: </label>
                    <input type="text"></input>
                    <label>Url da imagem:</label>
                    <input></input>
                    <button>Publish</button>
                </form>

           
            </div>
        )
    }
};

export default Form;