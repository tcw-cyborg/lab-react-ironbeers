import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBeers from './ListBeers';
import axios from 'axios';


class SingleBeer extends Component {
    state = {}

    componentDidMount() {
        this.getBeer();
    }
    getBeer = () => {
        const { params } = this.props.match;
        console.log('params:', params.id)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then(responseFromApi => {
                console.log('api is :', responseFromApi)
                const theBeer = responseFromApi.data;
                this.setState({ theBeer })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <header><Link to='/'>Home</Link></header>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

// const SingleBeer = (props) => {

//     const getBeer = (id) => {
//         const theBeer = (oneBeer) => {
//             return oneBeer._id === id
//         }
//         console.log(theBeer)
//         return
//     };

//     const { params } = props.match;
//     const findBeer = getBeer(params._id, 10);
//     console.log('the beer is : ', findBeer)

//     return (
//         <div>
//             <header><Link to='/'>Home</Link></header>
//         </div>
//     )

// }

export default SingleBeer;