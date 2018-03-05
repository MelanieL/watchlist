import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';
import SearchGenre from './SearchGenre';

//This page is where log in and logged in screen will be stated

class SearchResultsGenre extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            movies: [],
            name: this.props.location.state.name
        };
    }

    componentDidMount() {

        // This is the axios call for searching by genre

        // axios.get(`${config.apiURL}/discover/movie`, {
        //     params: {
        //         api_key: config.apiKey,
        //         language: 'en-US',
        //         sort_by: 'popularity.desc',
        //         include_adult: false,
        //         include_video: false,
        //         page: 1,
        //         // We will need to set the value below to be based on users response
        //         with_genres: '10770'
        //     }
        // })
        // .then(({ data }) => {
        //     console.log(data);
        //     this.setState({
        //         movies: data.results
        //     });
        // });


        // This is the axios call for searching by title

        axios.get(`${config.apiURL}/genre/${this.state.name}/movies`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                include_adult: false,
                page: 1,
                // We will need to set the value below to be based on users response
                
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
        return (
            <div>
                {this.state.movies.map((movie) => {
                    return <UniqueMovie movie={movie} key={movie.id} />
                })}
            </div>
        )
    }
}



export default SearchResultsGenre;