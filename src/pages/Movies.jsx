import React, { Suspense, lazy, useState } from 'react';
import SearchMovieForm from '../components/SearchMovieForm/SearchMovieForm';
import { fetchMovieByQuery } from 'moviesAPI/fetchMoviesData';

const FindMovies = lazy(() => import('components/FindMovies/FindMovies'));

const Movies = () => {
  const [findMovies, setFindMovies] = useState([]);
  const [isFound, setIsFound] = useState(true);

  const searchMovie = async query => {
    try {
      const findMoviesArray = await fetchMovieByQuery(query);

      setFindMovies(findMoviesArray);

      if (findMoviesArray.length > 0) {
        setIsFound(false);
      }
    } catch (error) {}
  };
  return (
    <>
      <SearchMovieForm searchMovie={searchMovie} />
      {findMovies.length > 0 && (
        <Suspense fallback={<div>Loading ...</div>}>
          <FindMovies movies={findMovies} />
        </Suspense>
      )}
      {findMovies.length === 0 && !isFound && <div>Not found</div>}
    </>
  );
};

export default Movies;
