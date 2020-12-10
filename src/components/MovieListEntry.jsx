import React from 'react';

var MovieListEntry = (props) => {
  // console.log("from movie list entry ", props.title);
  return (
    <div className='movie-box'>
      <ul> {props.title.title} </ul>
    </div>
  )
}


export default MovieListEntry
