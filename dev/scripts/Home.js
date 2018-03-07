import React from 'react';
import ReactDOM from 'react-dom';
import SearchTitle from './SearchTitle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchGenre from './SearchGenre';
import TopBar from './TopBar';

//This page is where log in and logged in screen will be stated




class Home extends React.Component {

    constructor () {
        super();
        this.state = {
            genre: [],
            userGenreSelection: "",
            input: "",
            loggedIn: false,
            user: '',
            userText:'',
            userName: ''
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
            console.log(userRes.uid);
            if(userRes) {
                this.setState({
                    loggedIn: true,
                    user: userRes.uid,
                    userName: userRes.displayName
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
                console.log(user.displayName);
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
            <div className="home__div">
                {this.state.loggedIn ?
                    <div className="home__loggedin">
                        <TopBar 
                        username={this.state.userName}
                        user={this.state.user} />

                        <h1>Welcome {this.state.userName}</h1>
                        <h3>Type in a movie by title or pick a genre from the drop down</h3>

                        <SearchTitle placeholder="title" userInput={this.input} 
                        inputRequest={this.state.input}
                        user={this.state.user}
                        userName={this.state.userName}/>                                     
                        <SearchGenre 
                            // genreName={this.findGenre()}
                            genres={this.state.genre}
                            // userSelectGenre={this.userSelectsGenre()} 
                            passState={this.passState}
                            // userGenreSelection={this.state.userGenreSelection}
                            genreRequest={this.state.userGenreSelection}
                            user={this.state.user}
                            username={this.state.userName}
                            />

                        <button onClick={this.signUserOut}>Sign out</button>
                    </div>
                    :
                    <div className="home__login">
                        <div className="home__login__logoimgdiv"><img src="/dev/images/icon_logo_pink.png" alt="logo image of a tv with a play button inside"/></div>
                        <h1>MovieWatchlist</h1>
                        <button className="button__text" onClick={this.signUserIn}>Sign In</button>
                    </div>
                }

            </div>
        )
    }
}



export default Home;