import React from 'react';
import Logo from './images/obi-wan.jpg';

const Error = () => {
    return(
        <div className="container">
            <h1>These aren't the droids you're looking for...</h1>
            <img src={Logo} alt=""/>
        </div>
    )
}

export default Error;