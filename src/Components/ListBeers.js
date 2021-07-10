import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class ListBeers extends Component {
    state = {
        beers: []
    }
    getBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log("hello", response)
                this.setState({ beers: response.data })
            })
            .catch(err => (console.log(err)))
    }

    componentDidMount() {
        this.getBeers()
    }
    render() {
        return (
            <div>

                <ul>

                    {this.state.beers.map(beer => {
                        return (
                            <li key={beer._id}><img src={beer.image_url} alt='' />

                                <h1><Link to={`/beers/${beer._id}`} >{beer.name}</Link></h1>
                            </li>
                        )

                    })}

                </ul>

            </div>
        )
    }
}