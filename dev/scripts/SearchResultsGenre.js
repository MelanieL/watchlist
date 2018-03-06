import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';
import SearchGenre from './SearchGenre';
import Addbutton from './Addbutton';

//This page is where log in and logged in screen will be stated

class SearchResultsGenre extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            name: this.props.location.state.name,
            user: this.props.location.state.user,
            username: this.props.location.state.username,
        };
    }

    componentDidMount() {

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
            <div className="searchResults clearfix">
                <TopBar 
                username={this.state.username} 
                user={this.state.user} 
          />          
                {this.state.movies.map((movie) => {
                   return <UniqueMovie movie={movie} key={movie.id} user={this.state.user} />
                })}
            </div>
        )
    }
}



export default SearchResultsGenre;