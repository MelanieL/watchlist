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

    componentWillReceiveProps(props) {
        const dbref = firebase.database().ref(`${props.movieID}/comments`);

        if (props.movieID !== undefined) {

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
    }

    addComment(e) {
        e.preventDefault();
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
            <div className="comments__fullsection">
                <div className="comments__form">
                    <h2>What users are saying...</h2>
                    <form onSubmit={this.addComment}>
                        <input className="comment_field" type="text" id="comment" value={this.state.comment} onChange={this.handleChange} placeholder="Add public comment..."/>
                        <input className="comment_button" type="submit" value="SUBMIT"/>
                    </form>
                </div>
                <div className="comments__div">
                    {/* <h3>Comments:</h3> */}
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