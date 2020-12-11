import React from 'react';

var MovieListEntry = (props) => {
  console.log(props);
  return (
    <div className='movie-box'>
      <ul> {props.title.title} </ul>
    </div>
  )
}


export default MovieListEntry
