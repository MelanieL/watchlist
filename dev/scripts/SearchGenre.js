import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Axios from 'axios';



class SearchGenre extends React.Component {

    
    render() {
        

        return (
            <div>
                <form>
                    <select onChange={this.props.passState} >
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
                <button>Submit small change</button>

            </div>
        )
    }
}

export default SearchGenre;
