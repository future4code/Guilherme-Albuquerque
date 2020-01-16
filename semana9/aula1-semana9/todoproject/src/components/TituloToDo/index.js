import React from 'react';
import styled from 'styled-components'

const TituloH1 = styled.h1`
    color: white;
    font-size: 60px
`

const OrangeF = styled.span`
    color: orange
`

const Titulo = (props) => {
    
    return (
        <TituloH1><OrangeF>F</OrangeF>uture <OrangeF>T</OrangeF>asks</TituloH1>
    )
   
}

export default Titulo;