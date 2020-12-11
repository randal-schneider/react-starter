import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddToList from './AddToList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: [],
      movies: [],
      haveWatched: false
    };

    this.resetSearchedState = this.resetSearchedState.bind(this);
    this.searchMovieList = this.searchMovieList.bind(this);
    this.addToMovieList = this.addToMovieList.bind(this);
  }

  addToMovieList(value) {
    let movie = {
      title: value
    };

    this.setState({
      movies: [movie, ...this.state.movies],
    })
  };

  resetSearchedState() {
    this.setState({
      searched: []
    })
  }

  searchMovieList(value) {
    let results = this.state.movies.filter(movie => {
      if (movie.title.includes(value)) {
        return movie;
      }
    })
    this.setState({
      searched: results
    })
  }



  render() {

    let movieList;
    if (this.state.searched.length < 1) {
      movieList = <MovieList movies={this.state.movies} />;
    } else {
      movieList = <MovieList movies={this.state.searched} />;
    }

    return (
      <div>
        <div>
          <button className='button'>Watched</button>
          <button className='button'>To Watch</button>
        </div>
        <div className='addtoMovies'>
          <div className='searchBox'>
            <AddToList addValue={this.addToMovieList}/>
          </div>
        </div>
        <div className='search'>
          <Search searchValue={this.searchMovieList}/>
          <button
            onClick={this.resetSearchedState}
            type="submit">
              <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div className='movie-list'>
          {movieList}
        </div>

      </div>
  )}
}

export default App;

