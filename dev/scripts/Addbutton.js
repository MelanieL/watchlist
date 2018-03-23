import React from 'react';
import axios from 'axios';

class Addbutton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            movie: this.props.movie,
        }
        this.addMovie = this.addMovie.bind(this);
    }

    componentWillMount() {
        const dbref = firebase.database().ref(`${this.state.user}/list`)
    }

    addMovie (event) {
        event.preventDefault();
        const dbref = firebase.database().ref(`${this.state.user}/list`)
        dbref.push({
            user: this.state.user,
            movie: this.state.movie,
        });
    }

    render () {
        return (
            <div className="clearfix">
                <button onClick={this.addMovie} className="addToListButton">ADD TO LIST</button>
            </div>
        )
    }
}

export default Addbutton;