import React, { useState } from 'react';

const SearchMovieForm = ({ searchMovie }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    searchMovie(inputValue);
    setInputValue('');
  };
  const handleInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Film for search"
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovieForm;
