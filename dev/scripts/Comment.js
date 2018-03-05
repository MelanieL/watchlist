import React from 'react';
import Comments from './Comments'

class Comment extends React.Component {

    render() {
        return (
            <div className="movieinfo__commentdiv">
                <h5 className="movieinfo__commentdiv__comment">{this.props.data.name}</h5>
                <button onClick={() => this.props.remove(this.props.aCommentIndex)}><div className="movieinfo__commentdiv__removebutton">x</div></button>
            </div>
        );
    }
};

export default Comment;