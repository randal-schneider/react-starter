import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.js'

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
    <div className='movie-list'>
      <MovieList movies={movies}/>
      hello from App
    </div>
  )}
}

export default App;

