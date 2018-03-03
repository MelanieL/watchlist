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
        this.onClickTest = this.onClickTest.bind(this); 
    }

    handleGenreChange(e) {
        console.log('run');
        this.setState({
            tempUserGenreSelection:e.target.value
        });
    }

    onClickTest(e) {
        this.setState({
            tempUserGenreSelection: e.target.value
        });
        this.props.passState(this.state.tempUserGenreSelection);
    }
    
    render () {
        return (
            <div>
                <form>
                    <select 
                    // onChange={this.handleGenreChange}
                    onChange={this.onClickTest}
                    value={this.state.tempUserGenreSelection}
                    >
                        {/* {this.props.genreName} */}
                        return(
                            {this.props.genres.map((genre, i) =>{
                                return (
                                    <option key={i} value={genre.id}>{genre.name}</option>
                                )
                            })}
                        )
                    </select>
                    <button>next</button>
                    {/* <button></button> */}
                </form>

                <button 
                onClick={() => {this.props.passState(this.state.tempUserGenreSelection)}}>Submi</button>

            </div>
        ) 
    }
}

export default SearchGenre;

{/* <form onSubmit={this.addJar}>

    <label htmlFor="jarcat">Category</label>
    <input type="text" id="jarcat" value={this.state.jarcat} onChange={this.handleChange} />

    <label htmlFor="jaramount">Total</label>
    <input type="text" id="jaramount" value={this.state.jaramount} onChange={this.handleChange} />

    <input className="button add_jar_button" type="submit" value="Add Jar" />
</form> */}