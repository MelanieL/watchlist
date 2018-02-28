import React from 'react';
import ReactDOM from 'react-dom';

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
        <div>
          Hello
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
