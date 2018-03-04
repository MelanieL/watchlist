import React from 'react';
import ReactDOM from 'react-dom';

// // Initialize Firebase - apparently do not need a second time
// var config = {
//     apiKey: "AIzaSyCBjWiDGq0F7a6AdGWW6WlptRMnlT_hyww",
//     authDomain: "project6-2296b.firebaseapp.com",
//     databaseURL: "https://project6-2296b.firebaseio.com",
//     projectId: "project6-2296b",
//     storageBucket: "",
//     messagingSenderId: "106014854957"
// };
// firebase.initializeApp(config);

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
        const dbref = firebase.database().ref('/comments');

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
        const comment = {
            name: this.state.comment
        };
        const dbref = firebase.database().ref('/comments');
        dbref.push(comment);
        this.setState({
            comment: ''
        });

    }

    removeComment(key) {
        return firebase.database().ref('comments').child(key).remove();
    }

    render() {
        return (
            <div>
                <h1>Leave a comment</h1>
                <form onSubmit={this.addComment}>
                    <input type="text" value={this.state.comment} onChange={this.handleChange} />
                    <input type="submit" value="Add Comment"/>
                    <button onClick={() => this.props.remove(this.props.commentIndex)}><div>x</div></button>
                </form>

                <div className="commentsdiv">
                    <h3>Previous Comments</h3>
                </div>
                <div className="mainpage__jarsdiv">
                    {this.state.comments.map((comment) => {
                        return (
                            <Jar data={jar} key={jar.key} remove={this.removeJar} jarIndex={jar.key} />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Comments;