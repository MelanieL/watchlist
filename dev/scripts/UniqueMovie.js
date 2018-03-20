import React from 'react';
import { Link } from 'react-router-dom';
import Addbutton from './Addbutton';

class UniqueMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            movie: this.props.movie.title,
            username: this.props.username,
            movieid: this.props.movie.id
        }
    }

    render() {
        return (
            <div className="movieResult">
                <div className="movieButtons clearfix">
                <img className="movieImage" src={`https://image.tmdb.org/t/p/w400/${this.props.movie.poster_path}`} alt="" />
                    <Link className="moreInfoButton" to={
                        {pathname: `movie/${this.props.movie.id}`,
                        state: {
                            user: this.state.user,
                            movie: this.state.movie,
                            username: this.state.username,
                            moviedid: this.state.movieid
                            
                        }}}>MORE INFO
                    </Link>
                    <Addbutton 
                                user={this.state.user} 
                                movie={this.state.movie}
                                movieid={this.state.movieid}/>

                </div>
            </div>
        )
    }
}

export default UniqueMovie;