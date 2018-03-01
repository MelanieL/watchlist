import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import Comments from './Comments'
import { Link } from 'react-router-dom';




class MovieInfo extends React.Component {

    render() {

        console.log('render is returning')
        return (
            <div>
                <TopBar />
                <Link to={"./SearchResults"}>
                    <button>You might also like</button>
                </Link>
                <div>
                    <button>+</button>
                    <button>play</button>
                </div>
                <Comments />
            </div>
        )
    }
}



export default MovieInfo;