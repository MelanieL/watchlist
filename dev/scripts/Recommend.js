import React from 'react';
import MovieInfo from './MovieInfo';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';
import UniqueMovie from './UniqueMovie'
import TopBar from './TopBar';

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            movieID: this.props.location.state.name,
            recommendMovies: [],
            user: this.props.location.state.user,
            username: this.props.location.state.username
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
                    <TopBar 
                    user={this.state.user}
                    username={this.state.username} />

                    {this.state.recommendMovies.map((movie) => {
                        return <UniqueMovie 
                                            movie={movie} 
                                            key={movie.id} 
                                            user={this.state.user}
                                            username={this.state.username}
                                            />
                    })}
                </div> 
        )
    }

}

export default Recommend;