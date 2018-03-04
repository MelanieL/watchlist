import React from 'react';
import { Link } from 'react-router-dom';

class UniqueMovie extends React.Component {
    render() {
        console.log('search is returning')
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt="" />
                <div>
                    <Link to={`movie/${this.props.movie.id}`}>
                        <button>More Info</button>
                    </Link>
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default UniqueMovie;