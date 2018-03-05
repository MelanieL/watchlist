import React from 'react';
import MovieInfo from './MovieInfo';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';
import UniqueMovie from './UniqueMovie'

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            movieID: this.props.location.state.name,
            recommendMovies: []
        }
        console.log(this.state);
    }

    componentDidMount() {
        axios.get(`${config.apiURL}/movie/${this.state.movieID}/recommendations`, {
            params: {
                api_key: config.apiKey,
                language: 'en-US',
                include_adult: false,
                page: 1
            }
        }).then( data => {
            console.log(data)
            this.setState({
                recommendMovies: data.data.results,
            });
        
        });
    }

    render() {
        return (
                <div>
                    {this.state.recommendMovies.map((movie) => {
                        return <UniqueMovie movie={movie} key={movie.id} />
                    })}
                </div> 
        )
    }

}

export default Recommend;