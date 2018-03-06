import React from 'react';
import { Link } from 'react-router-dom';
import Addbutton from './Addbutton';

class UniqueMovie extends React.Component {
    render() {
        console.log('search is returning')
        return (
            <div className="movieResult">
                <img className="movieImage" src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt="" />
                
                <div className="movieButtons clearfix">
                    <Link className="moreInfoButton" to={`movie/${this.props.movie.id}`}><img className="movieResultIcon" src={'./dev/images/icon_info.png'}/></Link>
                    <button className="addToListButton" ><img className="movieResultIcon" src={'./dev/images/icon_add.png'} /></button>
                </div>
            </div>
        )
    }
}

export default UniqueMovie;