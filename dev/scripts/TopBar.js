import React from 'react';
import { Link } from 'react-router-dom';




class TopBar extends React.Component {

    render() {
        return(
            <div>
                <div>logo</div>
                <div>Username</div>
                <div>
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                    <Link to={"./WatchList"}>
                        <button>List</button>
                    </Link>
                </div>
            </div>
        )
    }
}



export default TopBar;