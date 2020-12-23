import React from 'react';
import MovieList from './MovieList.jsx';

var MovieListEntry = (props) => {
  return (
    <div className="movieBox">
      <ul> {props.title.title}
      <button className='toggleWatched'>Watched</button></ul>
    </div>
  );
};


export default MovieListEntry;

