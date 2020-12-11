import React from 'react';

var MovieListEntry = (props) => {
  // console.log(props);
  return (
    <div className='movie-box'>
      <ul> {props.title.title} <button className='watched'>Watched</button></ul>
    </div>
  )
}


export default MovieListEntry
