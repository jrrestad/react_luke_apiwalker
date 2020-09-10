import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import Axios from 'axios';

const People = (props) => {

    const [index] = props.index;

    const [people, setPeople] = useState([])

    useEffect( () => {
        Axios.get(`https://swapi.py4e.com/api/people/${index}`)
            .then (people => {
            Axios.get(people.data.homeworld)
                .then(planet => {
                    const planetId = parseInt(planet.data.url.split('/')[5])
                    const planetName = planet.data.name
                    setPeople({...people.data, planetId: planetId, planetName: planetName})
                    // console.log(people.data)
                    // console.log(planet.data)
                    // console.log(planetId)
                }) // with {} around the setPeople, you can add more stuff but only on a new line??
            })
            .catch( err => navigate('/error'))
    }, [index])

    return(
        <div>
            <h1 className="">{people.name}</h1>
            <br/>
            <h3>Homeworld: 
                <Link to={`/planets/${people.planetId}`}> {people.planetName}</Link>
            </h3>
            <h3>Gender: {people.gender}</h3>
            <h3>Hair Color: {people.hair_color}</h3>
            <h3>Birthdate: {people.birth_year}</h3>
            <h3>Height: {people.height}</h3>
        </div>
    )
}

export default People;