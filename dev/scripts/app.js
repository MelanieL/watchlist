import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import WatchList from './WatchList';
import MovieInfo from './MovieInfo';
import SearchResultsTitle from './SearchResultsTitle';
import SearchResultsGenre from './SearchResultsGenre';
import{
  BrowserRouter as Router,
  Route, Link } from 'react-router-dom';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyCBjWiDGq0F7a6AdGWW6WlptRMnlT_hyww",
  authDomain: "project6-2296b.firebaseapp.com",
  databaseURL: "https://project6-2296b.firebaseio.com",
  projectId: "project6-2296b",
  storageBucket: "",
  messagingSenderId: "106014854957"
};
firebase.initializeApp(config);

class App extends React.Component {

    render() {
      return (
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/SearchResultsTitle" exact component={SearchResultsTitle} />
            <Route path="/SearchResultsGenre" exact component={SearchResultsGenre} />
            <Route path="/WatchList" exact component={WatchList} />
            <Route path="/movie/:id" exact component={MovieInfo}/>
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
