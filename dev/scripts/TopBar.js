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
            <div>
                <div>logo</div>
                <div>{this.state.username}</div>
                <div>
                    <Link to={"/"}>
                        <button>Home</button>
                    </Link>
                    <Link to={
                        {
                        pathname: '/WatchList',

                        state: {
                            user: this.state.user
                        }}



                        }>
                        <button>List</button>
                    </Link>
                </div>
            </div>
        )
    }
}



export default TopBar;