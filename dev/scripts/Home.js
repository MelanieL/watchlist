import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchGenre from './SearchGenre';

//This page is where log in and logged in screen will be stated


class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            genre: [],
            userGenreSelection: "" 
        }
        this.passState = this.passState.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
        }).then( data  => 
            this.setState({
                genre: data.data.genres,
            })
        )
    }

    passState (value) {
        this.setState({
            userGenreSelection: value
        })
        console.log(value)
    }

    render() {
        return (
            <div>
                    <h1>this is homes</h1>
                    <SearchTitle />                                     
                    <SearchGenre 
                        // genreName={this.findGenre()}
                        genres={this.state.genre}
                        // userSelectGenre={this.userSelectsGenre()} 
                        passState={this.passState}
                        // userGenreSelection={this.state.userGenreSelection}

                    />
            </div>
        )
    }
}



export default Home;