import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: [],
      movies: [...movies]
    };

    this.resetSearchedState = this.resetSearchedState.bind(this);
  }

  // addMovies(movies) {
  //   this.setState({
  //     movies: this.movies
  //   })
  // }
  resetSearchedState() {
    this.setState({
      searched: []
    })
  }

  searchMovieList(value) {
    // console.log('from SearchMovie', value);
    console.log(movies);
    movies.map(movie => {
      console.log('search movielist', movie, this.state.searched);
      if (movie.title.includes(value)) {
        console.log('after if statement', movie.title);
        this.setState({
          searched: [...this.state.searched, movie]
        }, () => console.log(this.state.searched))
      };
    })
  }



  render() {
    // console.log(movies);
    let movieList;
    if (this.state.searched.length < 1) {
      movieList = <MovieList movies={movies} />;
    } else {
      movieList = <MovieList movies={this.state.searched} />;
    }

    return (
      <div>
        <div className='addtoMovies'>
          <div className='searchBox'>
            <input type="text" placeholder="Add to Movie List"></input>
             <button type="submit"><i className="fa fa-car"></i></button>
          </div>
        </div>
        <div className='search'>
          <Search searchValue={this.searchMovieList.bind(this)}/>
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

