import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';

//This page is where log in and logged in screen will be stated

class SearchResultsTitle extends React.Component {

    constructor (props) {
        super(props);
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
        
        axios.get(`${config.apiURL}/search/movie`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                include_adult: false,
                page: 1,
                // We will need to set the value below to be based on users response
                query: this.state.name
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
                <div className="searchResults clearfix">
                    {this.state.movies.map((movie) => {
                        return <UniqueMovie movie={movie} key={movie.id} />
                    })}
                </div>
        )
    }
}



export default SearchResultsTitle;