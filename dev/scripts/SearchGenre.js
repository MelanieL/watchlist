import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




class SearchGenre extends React.Component {

    
    render() {
        console.log(this.props);

        return (
            <div className="search__genrediv">
                <h4>Search By Genre:</h4>
                <form className="searchform genre clearfix">
                        <select className="clearfix" onChange={this.props.passState} >
                            {/* {this.props.genreName} */}
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
                        {/* <input type="submit" /> */}
                        
                        <button className="search_button searchicon_genre"><img src="/dev/images/icon_search.png" alt="" /></button>
                        
                    </Link>
                </form>
            </div>
        )
    }
}

export default SearchGenre;
