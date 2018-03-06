import React from 'react';
import axios from 'axios';

class Addbutton extends React.Component {

    constructor() {
        super();
        this.state = {
            user: 'james',
            movie: 'batman'
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
            movie: this.state.movie
        });
    }

        
    render () {
        return (
            <div>
                <button onClick={this.addMovie}> Add movie </button>
            </div>
        )
    }

}

export default Addbutton;