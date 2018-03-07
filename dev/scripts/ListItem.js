import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            user: this.props.user,
            movieid: ''
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref(`${this.state.user}/list`);
        dbRef.on('value', (response) => {
            console.log(response.val());
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

    checked (e) {
        console.log('worked');
    }

    render() {
        
        return (
            <div>
                
                <ul>
                    
                    {this.state.lists.map((data, i) => {
                        return (
                        <div>
                                
                            <li key={i}>
                                {data.name.movie} 
                                </li>
                                <button onClick={() => this.removeMovie(data.key)}>Remove</button>
                                <label>Watched</label>
                                <input type="checkbox" onClick={this.checked} />
                            </div>
                        )
                    })}
                    
                

                
                </ul>
            </div>
        )
    }
}



export default ListItem;