import { fetchTrendingMovies } from 'moviesAPI/fetchMoviesData';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie?.id}>
              <Link to={`movies/${movie?.id}`}>{movie?.original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
