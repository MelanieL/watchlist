import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchTitle extends React.Component {

    render() {
        // console.log('searchform')

        return (
            <div>
                <form> 
                    <input type="text" placeholder={this.props.placeholder} onChange={this.props.userInput} />
                    <Link to={'/SearchResults'}>
                        {/* <input type="submit" /> */}
                    </Link>     
                </form>
            </div>
        )
    }
}



export default SearchTitle;