import React from 'react';
import { Link } from 'react-router-dom';
import Addbutton from './Addbutton';

class UniqueMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            movie: this.props.movie.title
        }
    }
    render() {
        console.log('search is returning')
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt="" />
                
                <div>
                    <Link to={`movie/${this.props.movie.id}`}>
                        <button>More Info</button>
                    </Link>
                    <Addbutton user={this.state.user}
                    movie={this.state.movie}/>
                </div>
            </div>
        )
    }
}

export default UniqueMovie;