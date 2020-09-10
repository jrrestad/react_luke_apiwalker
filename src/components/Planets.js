import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';

const Planets = (props) => {

    const [index] = props.index;

    const [planets, setPlanets] = useState([])

    useEffect( () => {
        Axios.get(`https://swapi.py4e.com/api/planets/${index}`)
        .then(response => {setPlanets(response.data)
        })
        .catch(err => navigate('/error'))
    }, [index])

    return(
        <div>
                <h1 className="">{planets.name}</h1>
                <br/>
                <h3>Climate: {planets.climate}</h3>
                <h3>Terrain: {planets.terrain}</h3>
                <h3>Surface Water: {planets.surface_water}</h3>
                <h3>Population: {planets.population}</h3>
        </div>
    )
}

export default Planets;