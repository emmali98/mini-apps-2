import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.title = `${query}`;
  })

  const handleClick = (e) => {
    axios.get(`/events?q=${query}&_page=1`)
    .then((res) => {
      setResults(res.data);
      // use link header for pagination
    })
    .catch((err) => {
      console.error(err);
      // TODO: Add something else to indicate to user
    })
  }

  return (
    <div>
      <input type="text" name="search" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleClick}>Go</button>
      <List events={results} />
    </div>
  )
}

export default Search;
