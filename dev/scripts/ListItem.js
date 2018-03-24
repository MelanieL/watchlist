import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            user: this.props.user,
            movieid: '',
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref(`${this.state.user}/list`);
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({ key: key, name: data[key] });
            }
            this.setState({
                lists: newState,
            });
        });
    }

    removeMovie(data) {
        const dbRef = firebase.database().ref(`${this.state.user}/list/${data}`);
        dbRef.remove();
    }

    // checked (e) {
    // }

    render() {
        return (
            <div className="listitem__maindiv">
                <ul className="listitem__maindiv__list">
                    {this.state.lists.map((data, i) => {
                    return (
                        <div className="clearfix">
                            <li className="listitem__individualitem clearfix" key={i}>
                                <h4>{data.name.movie}</h4>
                                <button className="remove_button_list" onClick={() => this.removeMovie(data.key)}>
                                    <img src="/dev/images/icon_remove.png" alt="" />
                                </button>
                                <div className="watched_item_div">
                                    <label className="watched_item_label">Watched</label>
                                    <input className="watched_item_box" type="checkbox" onClick={this.checked} />
                                </div>
                            </li>
                        </div>
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default ListItem;