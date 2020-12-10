import React from 'react';
import movies from './movies.js';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: []
    };
  }

  // addMovies(movies) {
  //   this.setState({
  //     movies: this.movies
  //   })
  // }

  // searched(value) {

  //   if (this.movies.title.contains(value) {
  //     this.setState({
  //       searched: [...value]
  //     })
  //   })
  // }



  render() {
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
        </div>
        <div className='movie-list'>
          <MovieList movies={movies} />
        </div>
      </div>
  )}
}

export default App;

