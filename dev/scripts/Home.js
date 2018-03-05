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
            userGenreSelection: "",
            input: "",
            loggedIn: false,
            user: {},
            userText:''
        }
        this.passState = this.passState.bind(this);
        this.input = this.input.bind(this);
        this.signUserOut = this.signUserOut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addText = this.addText.bind(this);
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
        );
        firebase.auth().onAuthStateChanged((userRes) =>{
            if(userRes) {
                this.setState({
                    loggedIn: true,
                    user: userRes
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: {}
                })
            }
        });
    }

    signUserIn(){
        console.log('trying to sign in!')
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })
        firebase.auth().signInWithPopup(provider)
            .then((user) => {
                console.log(user);
            });
    }

    signUserOut(){
        console.log('signing user out now');
        firebase.auth().signOut();
        this.setState({
            loggedIn: false
        })
    }

    handleChange (e){
        console.log(e.target.value);
        this. setState({
            [e.target.id]: e.target.value
        })
    }

    addText(e) {
        e.preventDefault();
        console.log('formsubmitted!');

        const dbref=firebase.database().ref(`users/${this.state.user.uid}`);

        dbref.push(this.state.userText);

        this.setState({
            userText:""
        })

    }

    passState (event) {
        this.setState({
            userGenreSelection: event.target.value
        })
    }

    input (event) {
        this.setState({
            input: event.target.value
        })
    }


    render() {
        return (
            <div>
                {this.state.loggedIn ?
                    <div>
                        <h1>this is homes</h1>
                        <SearchTitle placeholder="title" userInput={this.input} inputRequest={this.state.input}/>                                     
                        <SearchGenre 
                            // genreName={this.findGenre()}
                            genres={this.state.genre}
                            // userSelectGenre={this.userSelectsGenre()} 
                            passState={this.passState}
                            // userGenreSelection={this.state.userGenreSelection}
                            genreRequest={this.state.userGenreSelection} />
                        <button onClick={this.signUserOut}>Sign user out!!</button>
                    </div>
                    :
                    <div>
                        <h2>Welcom! please sign in</h2>
                        <button onClick={this.signUserIn}>Sign In</button>
                    </div>
                }

            </div>
        )
    }
}



export default Home;