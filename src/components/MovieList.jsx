import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
//map over movies
var MovieList = (props) => {
  return (
  <div>
    {props.movies.map((title) =>
      <MovieListEntry title={title}/>
    )}
  </div>
  );
};



export default MovieList;
