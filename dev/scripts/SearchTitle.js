import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchTitle extends React.Component {
    
    render() {
        return (
            <div className="search__titlediv">
                <h4>Find Movies By Title:</h4>
                <form className="searchform genre"> 
                    <input type="text" placeholder={this.props.placeholder} onChange={this.props.userInput} />
                    <Link to={
                        {pathname: '/SearchResultsTitle', 
                         
                         state:    {
                             movieName: this.props.inputRequest, 
                             user: this.props.user,
                             userName: this.props.userName
                              }}}>
                        <button className="search_button_genre pink_button">SEARCH</button>
                    </Link>     
                </form>
            </div>
        )
    }
}



export default SearchTitle;