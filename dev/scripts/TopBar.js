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
        return(
            <div className="topbar__div clearfix">
                <div className="topbar__div__logodiv"><img src="/dev/images/icon_logo_white.png" alt=""/></div>
                <h4>{this.state.username}</h4>
                    <div className="topbar__div__navbar__icondiv button_home">
                        <Link to={"/"}>
                            <img src="/dev/images/icon_home_pink.png" alt="" />
                        </Link>
                    </div>
                    <div className="topbar__div__navbar__icondiv button_list">
                    <Link to={
                        {
                            pathname: '/WatchList',
                            state: {
                                user: this.state.user,
                                username: this.state.username
                            }
                        }}>
                        <img src="/dev/images/icon_list_pink.png" alt="" />

                    </Link>
                    </div>
            </div>
        )
    }
}

export default TopBar;