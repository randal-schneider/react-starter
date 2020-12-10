import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

//map over our movies array
var MovieList = (props) => {
console.log(props);
  return (
    <div>
      {props.movies.map((title) =>
        <MovieListEntry title={title} />
      )}
    </div>
  );
};

export default MovieList

