import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SearchGenre extends React.Component {

    
    render () {
        return (
            <div>
                <form action="">
                <select>
                    {this.props.genreName}
                </select>
                </form>
            </div>
        ) 
    }
}

export default SearchGenre;