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
        axios.get(`${config.apiURL}/genre/${this.state.name}/movies`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                include_adult: false,
                page: 1,
            }
        })
        .then(({ data }) => {
            this.setState({
                movies: data.results
            });
        });
    }

    render() {
        return (
            <div>
                <TopBar 
                    username={this.state.username} 
                    user={this.state.user} 
                />          
                <div className="searchResults clearfix">
                    {this.state.movies.map((movie) => {
                    return <UniqueMovie movie={movie} key={movie.id} user={this.state.user} />
                    })}
                </div>

            </div>
        )
    }
}



export default SearchResultsGenre;