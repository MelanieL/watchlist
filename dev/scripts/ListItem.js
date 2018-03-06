import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            user: this.props.user
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
                console.log(newState);
            }

            this.setState({
                lists: newState,
            });
        });

    }

    removeMovie(data) {
        const dbRef = firebase.database().ref(`${this.state.user}/list/${data}`);
        dbRef.remove();
        console.log(data);
    }
    render() {
        
        return (
            <div>
                
                <ul>
                    
                    {this.state.lists.map((data, i) => {
                        return (
                        <div>
                                <label>Watched</label>
                                <input type="checkbox" />
                            <li key={i}>
                                {data.name.movie} {data.key}
                                </li>
                            <Link to={'./MovieInfo'}>info</Link>
                                <button onClick={() => this.removeMovie(data.key)}>Remove</button>
                            </div>
                        )
                    })}
                    
                

                
                </ul>
            </div>
        )
    }
}



export default ListItem;