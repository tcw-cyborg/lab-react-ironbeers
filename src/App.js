import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import ListBeers from './Components/ListBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import SingleBeer from './Components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
        <Route exact path="/beers/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
