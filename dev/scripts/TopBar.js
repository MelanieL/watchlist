import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            user: this.props.user
        }
    }

    render() {
        return (
            <div className="topbar__div clearfix">
                    <Link to={"/"}>
                <div className="topbar__div__logodiv">
                        <img src="/dev/images/icon_logo_white.png" alt="" />
                </div>
                    </Link>
                <h4>MovieWatchlist</h4>
                    <Link to={"/"}>
                        <p>HOME</p>
                    </Link>
                    <Link to={
                        {
                            pathname: '/WatchList',
                            state: {
                                user: this.state.user,
                                username: this.state.username
                            }
                        }}>
                        <p>MY LIST</p>
                    </Link>
            </div>
        )
    }
}

export default TopBar;