import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';


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

    // Use this as a listener, because component did mount will render before props are received
    componentWillReceiveProps(props) {
        const dbref = firebase.database().ref(`${props.movieID}/comments`);
        if (props.movieID !== undefined) {
            dbref.on('value', (snapshot) => {
                const data = snapshot.val();
                console.log(data);
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
        return firebase.database().ref(`${this.props.movieID}/comments`).child(key).remove();
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
                {/* <p>Testing ID: {this.props.movieID}</p> */}
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