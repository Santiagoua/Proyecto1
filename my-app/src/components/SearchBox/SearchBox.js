import React, { useState } from 'react';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => setQuery(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
