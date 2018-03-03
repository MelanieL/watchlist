import React from 'react';
import { Link } from 'react-router-dom';

//This page is where log in and logged in screen will be stated

class UniqueMovie extends React.Component {
    render() {
        console.log('search is returning')
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt="" />
                <div>
                    <Link to={'/MovieInfo'}>
                        <button>I</button>
                    </Link>
                    <button>+</button>
                </div>
            </div>
        )
    }
}



export default UniqueMovie;