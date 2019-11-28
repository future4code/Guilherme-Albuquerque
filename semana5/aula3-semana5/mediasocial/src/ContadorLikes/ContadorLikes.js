import React from 'react'
import './ContadorLikes.css'




class BarraInterativa extends React.Component {
    constructor(props){
        super(props);
        
    }
    

    render () {
        return(
            
            <section className="contador">
                <img src={this.props.img}/>
                <p>Curtido por <strong>Astrodev</strong> e <strong>outras 55 pessoas</strong></p>
            </section>
        )
    }
};

export default BarraInterativa;