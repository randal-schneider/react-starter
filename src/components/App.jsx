import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searched: false
    };
  }

  // addMovies(movies) {
  //   this.setState({
  //     movies: this.movies
  //   })
  // }

  render(){
    console.log(movies);
    return (
      <div>
        <div className='addtoMovies'>
          <div className='searchBox'>
            <input type="text" placeholder="Add to Movie List"></input>
             <button type="submit"><i className="fa fa-car"></i></button>
          </div>
        </div>
        <div className='search'>
          <Search />
          <div className='searchBox'>
            <input type="text" placeholder="Search For Movies"></input>
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className='movie-list'>
          <MovieList movies={movies} text={'quote'} />
        </div>
      </div>
  )}
}

export default App;

