import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  addMovies(movies) {
    this.setState({
      movies: this.movies
    })
  }

  render(){
    console.log(movies);
    return (
      <div>
        <div className='addtoMovies'>
          Add to movies will be here
        </div>
        <div className='Search'>
          Search will be here
        </div>
        <div className='movie-list'>
          <MovieList movies={movies} text={'quote'} />
        </div>
      </div>
  )}
}

export default App;

