import React from 'react';
import Form from './components/Form';
import Planets from './components/Planets';
import People from './components/People';
import Starships from './components/Starships';
import Error from './components/Error';
import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="container">
      <Form/>
      <Router>
        <Planets path="/planets/:index"/>
        <People path="/people/:index"/>
        <Starships path="/starships/:index"/>
        <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;
