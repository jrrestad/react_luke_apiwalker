import React, { useState, useEffect } from 'react';
// #1 import Logo from './images/obi-wan.jpg'
import Axios from 'axios';
import { navigate } from '@reach/router';

const Starships = (props) => {
    const [index] = props.index;

    // Things labeled #1 would be used for a ternary error msg, but its easier to just use the .catch to navigate to a new "page"
    // #1 const [errMsg, setErrMsg] = useState(false) 

    const [starships, setStarships] = useState([])

    useEffect( () => {
        Axios.get(`https://swapi.py4e.com/api/starships/${index}`)
        .then(response => setStarships(response.data))
        // #1 setErrMsg(false)})
        // #1 .catch(err => setErrMsg(true))
        .catch(err => navigate('/error'))
    }, [index])
    
    return(
        <div>
            {
            // #1 errMsg ? 
            //     <h1>These aren't the droids you're looking for...</h1>
            //     :
            <>
                <h1 className="">{starships.name}</h1>
                <br/>
                <h3>Model: {starships.model}</h3>
                <h3>Manufacturer: {starships.manufacturer}</h3>
                <h3>Crew: {starships.crew}</h3>
                <h3>Passengers: {starships.passengers}</h3>
            </>
            }
        </div>
    )
}

export default Starships;