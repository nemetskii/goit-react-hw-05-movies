import React from 'react';
import { Link } from 'react-router-dom';

const FindMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie?.id}>
          <Link to={`${movie?.id}`}>{movie?.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FindMovies;
