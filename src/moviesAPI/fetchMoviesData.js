const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWE3YmQ1YjYyNTUyMDY3ZTAzMzY1M2RhZGU5ZjIyMyIsInN1YiI6IjY0Y2I1N2E2Mjk3MzM4MDIwZmIwMjdlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1GN40NfCxdKhW6gDvTjBYTQeLunU08_-EI14uSC65TU',
  },
};

export const fetchTrendingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => console.error(err));
};

export const fetchMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
};

export const fetchMovieCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
};

export const fetchMovieReview = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
};
export const fetchMovieByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results)
    .catch(err => console.error(err));
};
