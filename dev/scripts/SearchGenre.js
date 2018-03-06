import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




class SearchGenre extends React.Component {

    
    render() {
        console.log(this.props);

        return (
            <div>
                <form>
                    <select onChange={this.props.passState} >
                        {/* {this.props.genreName} */}
                        return(
                            {this.props.genres.map((genre, i) => {
                            return (
                                <option key={i} value={genre.id}>{genre.name}</option>
                            )
                        })}
                        )
                    </select>
                </form>
                <Link to={
                    {
                        pathname: '/SearchResultsGenre',

                        state: { 
                            name: this.props.genreRequest,
                            user: this.props.user,
                            username: this.props.username }
                    }}>
                    {/* <input type="submit" /> */}
                    
                    <button>Submit small change</button>
                    
                </Link>
            </div>
        )
    }
}

export default SearchGenre;
