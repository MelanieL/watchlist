import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SearchTitle extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'james'
        }
    }

    render() {
        // console.log('searchform')

        return (
            <div>
                <form> 
                    <input type="text" placeholder={this.props.placeholder} onChange={this.props.userInput} />
                    <Link to={
                        {pathname: '/SearchResults', 
                         
                         state:    {name: this.props.inputRequest }}}>
                        {/* <input type="submit" /> */}
                        <button>Click</button>
                    </Link>     
                </form>
            </div>
        )
    }
}



export default SearchTitle;