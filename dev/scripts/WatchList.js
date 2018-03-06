import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

class WatchList extends React.Component {

constructor (props) {
    super(props);
    this.state = {
        user: this.props.location.state.user
    }
}
    render() {


        return (
            
            <div>
                <TopBar />
                <ListItem user={this.state.user}/>
            </div>
        )
    }

}



export default WatchList;