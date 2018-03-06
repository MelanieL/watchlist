import React from 'react';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {

    render() {
        return(
            <div className="topbar__div clearfix">
                <div className="topbar__div__logodiv"><img src="/dev/images/icon_logo_white.png" alt=""/></div>
                <h4>Username Username</h4>
                    <div className="topbar__div__navbar__icondiv button_home">
                        <Link to={"/"}>
                            <img src="/dev/images/icon_home_pink.png" alt="" />
                        </Link>
                    </div>
                    <div className="topbar__div__navbar__icondiv button_list">
                        <Link to={"/WatchList"}>
                            <img src="/dev/images/icon_list_pink.png" alt="" />
                        </Link>
                    </div>
            </div>
        )
    }
}

export default TopBar;