import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SearchGenre extends React.Component {

    constructor() {
        super();
        this.state = {
            userSelectionGenre: ''
        }
        this.handleUserSelectionGenre = this.handleUserSelectionGenre.bind(this);
    }

    handleUserSelectionGenre(userSelection) {
        alert('working');
        userSelection.preventDefault(userSelection);
        // const userChoice = 
        console.log(userSelection)
        this.setState({
            userSelectionGenre: userSelection.target.value
        }) 
    }
    
    render () {
        console.log(this.state.userSelectionGenre);
        return (
            <div>
                <form onSubmit={this.handleUserSelectionGenre}>
                    <select>
                        {this.props.genreName}
                    </select>
                    <input type="submit" value="Find Genre" />
                </form>
                {/* <h1>{this.state}</h1> */}
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