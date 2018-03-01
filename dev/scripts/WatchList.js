import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

class WatchList extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <ListItem />
            </div>
        )
    }
}



export default WatchList;