import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchTitle extends React.Component {
    

    render() {
        // console.log('searchform')

        return (
            <div className="search__titlediv">
                <h4>Search By Title:</h4>
                <form className="searchform genre"> 
                    <input type="text" placeholder={this.props.placeholder} onChange={this.props.userInput} />
                    <Link to={
                        {pathname: '/SearchResultsTitle', 
                         
                         state:    {
                             movieName: this.props.inputRequest, 
                             user: this.props.user,
                             userName: this.props.userName
                              }}}>
                        {/* <input type="submit" /> */}
                        <button><img src="/dev/images/icon_search.png" alt=""/></button>
                    </Link>     
                </form>
            </div>
        )
    }
}



export default SearchTitle;