import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

// Initialize Firebase - apparently do not need a second time
var config = {
    apiKey: "AIzaSyCBjWiDGq0F7a6AdGWW6WlptRMnlT_hyww",
    authDomain: "project6-2296b.firebaseapp.com",
    databaseURL: "https://project6-2296b.firebaseio.com",
    projectId: "project6-2296b",
    storageBucket: "",
    messagingSenderId: "106014854957"
};
firebase.initializeApp(config);

class Comments extends React.Component {

    constructor() {
        super();
        this.state = {
            comment: '',
            comments: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    componentDidMount() {
        const dbref = firebase.database().ref(`${this.props.movieID}/comments`);

        dbref.on('value', (snapshot) => {
            const data = snapshot.val();
            const state = [];
            for (let key in data) {
                data[key].key = key;
                state.push(data[key]);
            }
            this.setState({
                comments: state,
            });
        });
    }

    addComment(e) {
        e.preventDefault();
        // This is making an array from whatever we pass it
        const aComment = {
            name: this.state.comment
        };
        const dbref = firebase.database().ref(`${this.props.movieID}/comments`);
        dbref.push(aComment);
        this.setState({
            comment: ''
        });
    }

    removeComment(key) {
        return firebase.database().ref(`comments`).child(key).remove();
    }

    render() {
        return (
            <div>
                <div className="comments__form">
                    <h1>Leave a comment</h1>
                    <form onSubmit={this.addComment}>
                        <input type="text" id="comment" value={this.state.comment} onChange={this.handleChange} />
                        <input type="submit" value="Add Comment"/>
                    </form>
                </div>
                <p>Testing ID: {this.props.movieID}</p>
                <div className="comments__div">
                    <h3>Previous Comments</h3>
                    {this.state.comments.map((comment) => {
                        return (
                            <Comment data={comment} key={comment.key} remove={this.removeComment} aCommentIndex={comment.key} />
                        )
                    })}
                </div>                
            </div>
        )
    }
}

export default Comments;