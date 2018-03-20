import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';

class SearchResultsTitle extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            movies: [],
            user: this.props.location.state.user,
            movie: this.props.location.state.movieName,
            username: this.props.location.state.userName
        };
    }

    componentDidMount() {
        
        axios.get(`${config.apiURL}/search/movie`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                include_adult: false,
                page: 1,
                query: this.state.movie
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
                user={this.state.user} 
                movie={this.state.movie}
                username={this.state.username}/>
                <div className="searchResults clearfix">
                    {this.state.movies.map((movie) => {
                        return <UniqueMovie 
                                movie={movie} 
                                key={movie.id} 
                                user={this.state.user}
                                username={this.state.username} 
                                />
                    })}
                </div>
            </div>
        )
    }
}

export default SearchResultsTitle;