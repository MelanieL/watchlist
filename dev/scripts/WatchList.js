import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

class WatchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user,
            username: this.props.location.state.username,
        }
    }

    render() {
        return (
            <div className="watchlist__maindiv clearfix">
                <TopBar
                    user={this.state.user}
                    username={this.state.username}
                />
                <h2>My Saved Movies</h2>
                <ListItem user={this.state.user} />
            </div>
        )
    }
}

export default WatchList;