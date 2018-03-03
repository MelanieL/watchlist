import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SearchGenre extends React.Component {

    constructor() {
        super();
        this.state = {
            tempUserGenreSelection: ''
        }

        this.handleGenreChange = this.handleGenreChange.bind(this);
    }

    handleGenreChange(e) {
        console.log('run');
        this.setState({
            tempUserGenreSelection: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <select
                        onChange={this.handleGenreChange}
                    >
                        {/* {this.props.genreName} */}
                        return(
                            {this.props.genres.map((genre, i) => {
                            return (
                                <option key={i} value={genre.id}>{genre.name}</option>
                            )
                        })}
                        )
                    </select>
                </form>
                <button
                    onClick={() => { this.props.passState(this.state.tempUserGenreSelection) }}>Submit small change</button>

            </div>
        )
    }
}

export default SearchGenre;
