import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <Link to={'./MovieInfo'}>i</Link>
                <button>Remove</button>
            </div>
        )
    }
}



export default ListItem;