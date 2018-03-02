import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchGenre from './SearchGenre';

//This page is where log in and logged in screen will be stated


class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            genre: []
        }

        this.findGenre = this.findGenre.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
        }).then( data  => 
            this.setState({
                genre: data.data.genres,
            })
        )
    }
        
    findGenre() {
        return (
            this.state.genre.map((data) => {
                return (
                    <option value={data.id}>{data.name}</option>
                )
            })
        )
    }
    
    render() {
        return (
            <div>
                    <h1>this is home page</h1>                                       
                    <SearchGenre genreName={this.findGenre()} />
            </div>
        )
    }
}



export default Home;