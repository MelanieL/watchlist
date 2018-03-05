import React from 'react';

class Recommend extends React.Component {
    constructor() {
        super();
        this.state = {
            movieID: '',
            recommendMovies: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}/recommendations`, {
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
        }).then( data  => 
            this.setState({
                recommendMovies: data,
            })
        )
    }

    render() {
        return (
                <div>
                    {this.state.movies.map((movie) => {
                        return <UniqueMovie movie={movie} key={movie.id} />
                    })}
                </div>
        )
    }

}

export default Recommend;