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
import Recommend from './Recommend';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAp-PB7nn8hGPNVl7_W0vsmM1GyeV_Gm8w",
  authDomain: "project6-version2.firebaseapp.com",
  databaseURL: "https://project6-version2.firebaseio.com",
  projectId: "project6-version2",
  storageBucket: "",
  messagingSenderId: "815831896048"
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
            <Route path="/Recommend" exact component={Recommend} />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
