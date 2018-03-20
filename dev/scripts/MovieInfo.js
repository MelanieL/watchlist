import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import Comments from './Comments'
import config from './config';
import axios from 'axios';
import Addbutton from './Addbutton';
import { Link } from 'react-router-dom';

class MovieInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            poster_path: '',
            title: this.props.location.state.movie,
            release_date: '',
            overview: '',
            genres: [],
            genreID: [],
            id: '',
            user: this.props.location.state.user,
            username: this.props.location.state.username
        };
    }

    componentDidMount() {
        axios.get(`${config.apiURL}/movie/${this.props.match.params.id}`, {
            params: {
                api_key: config.apiKey
            }
        })
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    poster_path: data.poster_path,
                    // title: data.title,
                    release_date: data.release_date,
                    overview: data.overview,
                    id: data.id,
                    genres: data.genres
                });
            })
    }  

    render() {
        return (
            <div className="movieInfoContainer">
                <TopBar user={this.state.user} username={this.state.username} />
                <div className="movieInfo clearfix">
                    <div className="movieInfoPoster">
                        <img src={`https://image.tmdb.org/t/p/w400/${this.state.poster_path}`} alt="poster"/>
                    </div>
                    <div className="movieInfoData">
                        <h2>Title: {this.state.title}</h2>
                        <h2>Release Date: {this.state.release_date}</h2>
                        <div className="clearfix">
                            <Link to={{
                                pathname: '/Recommend',
                                state: { name: this.state.id, }}                  
                                }
                                className="mightAlsoLike">
                            Might also like
                            </Link>
                            <Addbutton user={this.state.user} movie={this.state.title} />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Description: {this.state.overview}</p>
                </div>

                <p>Genres: {this.state.genres.map( (data, i) => 
                    {
                    return (<span className="genres" key={i}> {data.name} </span>)}
                    )} </p>
                <Comments 
                movieID={this.state.id}
                username={this.state.username} />
            </div>
        )
    }
}

export default MovieInfo;