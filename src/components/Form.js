import React from 'react';
import { navigate } from '@reach/router';

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        const thing = e.target.thing.value;
        const index = e.target.index.value;
        console.log(`${thing} and ${index}`)
        navigate(`/${thing}/${index}`)
    }

    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <select className="mr-5" name="thing" id="">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <input className="mr-5" name="index" type="number" required/>
                <button className="btn btn-primary mr-5" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form