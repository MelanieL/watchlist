import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

//This page is where log in and logged in screen will be stated


class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            genres: [],
            input: ''
        }

        this.inputHandler = this.inputHandler.bind(this)
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
        }).then( data  => 
            this.setState({
                genres: data.data.genres,
            })
            )
    }

    inputHandler (event) {
        this.setState({
            input: event.target.value
        })
    }    

    render() {

        // just text output
        this.state.genres.map( ({name, id}) => 
            console.log(name + ' ' + id)
        )

        console.log(this.state.input)



        return (
            <div>
                    <h1>this is home page</h1>                    
                    
                    <SearchForm placeholder='title' userInput={this.inputHandler} />
                    <SearchForm  placeholder='genre' />
                    <Link to={"./WatchList"}><p>watch list</p></Link>
            </div>
        )
    }
}



export default Home;