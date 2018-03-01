import React from 'react';
import { Link } from 'react-router-dom';




class SearchForm extends React.Component {

    render() {
        console.log('searchform')
        return (
            <div>
                <form>
                    <input type="text" />
                    <Link to={'/SearchResults'}>
                        <input type="submit"/>
                    </Link>
                </form>
            </div>
        )
    }
}



export default SearchForm;