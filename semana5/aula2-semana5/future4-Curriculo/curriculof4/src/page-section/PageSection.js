import React from 'react';
import './PageSection.css'

function PageSection(props){
    return(
        <div className="PageSection-container">
            <h1>{props.titulo}</h1>
            {props.children}
        </div>
    )
}

export default PageSection;
