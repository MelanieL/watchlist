import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

//This page is where log in and logged in screen will be stated


class Home extends React.Component {

    render() {

        console.log('render is returning')
        return (
            <div>
                    <h1>this is home page</h1>
                    <SearchForm />
                    <SearchForm />
                    <Link to={"./WatchList"}><p>watch list</p></Link>
            </div>
        )
    }
}



export default Home;