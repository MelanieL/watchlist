import React from 'react';
import Comments from './Comments'

class Comment extends React.Component {

    render() {
        return (
            <div className="movieinfo__commentdiv">
                <p className="movieinfo__commentdiv__comment">{this.props.data.name}</p>
                <button onClick={() => this.props.remove(this.props.aCommentIndex)}>
                <div className="movieinfo__commentdiv__removebutton">
                    <img src="/dev/images/icon_remove.png" alt="" />
                </div>
                </button>
            </div>
        );
    }
};

export default Comment;