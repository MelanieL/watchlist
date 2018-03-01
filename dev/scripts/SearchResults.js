import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import TopBar from './TopBar';
import UniqueMovie from './UniqueMovie';
import { Link } from 'react-router-dom';

//This page is where log in and logged in screen will be stated

class SearchResults extends React.Component {
    render() {
        console.log('search is returning')
        return (
            <div>
                <TopBar />
                <h1>this is results page</h1>
                <UniqueMovie />
            </div>
        )
    }
}



export default SearchResults;