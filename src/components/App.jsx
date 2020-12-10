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
      movies: []
    };

    this.resetSearchedState = this.resetSearchedState.bind(this);
    this.searchMovieList = this.searchMovieList.bind(this);
    this.addToMovieList = this.addToMovieList.bind(this);
  }

  addToMovieList(value) {
    console.log(value);
    let movie = {
      title: value
    };

    this.setState({
      movies: [movie, ...this.state.movies]
    }, () => console.log('from addToMovieList ', this.state.movies))
  };

  resetSearchedState() {
    this.setState({
      searched: []
    })
  }

  searchMovieList(value) {
    // console.log('from SearchMovie', value);
    console.log(movies);
    this.state.movies.filter(movie => {
      console.log('search movielist', movie, this.state.searched);
      if (movie.title.includes(value)) {
        console.log('after if statement', movie.title);
        this.setState({
          searched: [...this.state.searched, movie]
        }, () => console.log('state of searched', this.state.searched))
      };
    })
  }



  render() {
    // console.log(movies);
    let movieList;
    if (this.state.searched.length < 1) {
      movieList = <MovieList movies={this.state.movies} />;
    } else {
      movieList = <MovieList movies={this.state.searched} />;
    }

    return (
      <div>
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
              <i className="fa fa-search"></i>
          </button>
        </div>
        <div className='movie-list'>
          {movieList}
        </div>
      </div>
  )}
}

export default App;

