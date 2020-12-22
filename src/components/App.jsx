import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddToList from './AddToList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: [],
      movies: []
    };

    this.searchMovieList = this.searchMovieList.bind(this);
    this.resetSearchedState = this.resetSearchedState.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
  }

  searchMovieList(value) {
    let results = this.state.movies.filter(movie => {
      if (movie.title.toLowerCase().includes(value.toLowerCase())) {
        return movie;
      }
    })

    this.setState({
      searched: results
    })

    if (results.length < 1) {
      alert('No searches found')
    }
  }

  resetSearchedState(value) {
    this.setState({
      searched: value
    })
  }

  addMovieToList(value) {
    let movie = {
      title: value
    };
  }

  render(){
    console.log(this.state.movies);
    let movieList;
    if (this.state.searched.length < 1) {
      movieList = <MovieList movies={this.state.movies}/>;
    } else {
      movieList = <MovieList movies={this.state.searched}/>;
    }

    return (
      <div>
        <div className="search">
          <Search searchValue={this.searchMovieList} searchedState={this.resetSearchedState}/>
        </div>
        <div className="addToList">
          <AddToList addValue={this.addMovieToList}/>
        </div>
        <div className='movieList'>
          {movieList}
        </div>
      </div>
  )}
}

export default App;
