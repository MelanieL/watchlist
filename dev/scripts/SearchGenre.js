import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchGenre extends React.Component {

    render() {
        return (
            <div className="search__genrediv">
                <h4>Find Movies By Genre:</h4>
                <form className="searchform genre clearfix">
                        <select className="clearfix" onChange={this.props.passState}>
                            return(
                                {this.props.genres.map((genre, i) => {
                                return (
                                    <option key={i} value={genre.id}>{genre.name}</option>
                                )
                            })}
                            )
                        </select>                        
                    <Link className="clearfix" to={
                        {
                            pathname: '/SearchResultsGenre',
                            state: { 
                                name: this.props.genreRequest,
                                user: this.props.user,
                                username: this.props.username }
                        }}>                        
                        <button className="search_button_genre pink_button">SEARCH</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SearchGenre;
