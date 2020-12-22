import React from 'react';
import MovieList from './MovieList.jsx';

var MovieListEntry = (props) => {
  return (
    <div className="movieBox">
      <ul> {props.title.title} </ul>
    </div>
  );
};


export default MovieListEntry;

