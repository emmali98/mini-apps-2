import React, { useState, useEffect } from 'react';
import List from './List.jsx';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.title = `${query}`;
  })

  const handleClick = (e) => {
    console.log('testing');
  }

  return (
    <div>
      <input type="text" name="search" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleClick}>Go</button>
      <List items={results} />
    </div>
  )
}

export default Search;
