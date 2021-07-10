import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div><Link to='/beers'><img src='../assets/beers.png' /><h1>All Beers</h1></Link></div>
                <div><Link to='/random-beer'><img src='../assets/random-beer.png' /><h1>Random Beer</h1></Link></div>
                <div><Link to='/newbeer'><img src='../assets/new-beer.png' /><h1>New Beer</h1></Link></div>

            </div>
        )
    }
}
