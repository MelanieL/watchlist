import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';

//This page is where log in and logged in screen will be stated

class SearchResults extends React.Component {

    constructor () {
        super();
        this.state = {
            movies: []
        };
    }

    // API full url:
    // https://api.themoviedb.org/3/discover/movie?api_key=f012df5d63927931e82fe659a8aaa3ac&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770

    // Config portion ends at 3

    componentDidMount() {
        // The below template literal is from our module
        axios.get(`${config.apiURL}/discover/movie`, {
            params: {
                // The below is from our module
                api_key: config.apiKey,
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: false,
                include_video: false,
                page: 1,
                // We will need to set the value below to be based on users response
                with_genres: '10770'
            }
        })
        .then(({ data }) => {
            console.log(data);
            this.setState({
                movies: data.results
            });
        });
    }
    
    render() {
        // console.log('search is returning')
        return (
            // <div>
            //     <TopBar />
            //     <h1>this is results page</h1>
            //     return (
                <div>
                    {this.state.movies.map((movie) => {
                        return <UniqueMovie movie={movie} key={movie.id} />
                    })}

                </div>
            // )
            // </div>
        )
    }
}



export default SearchResults;