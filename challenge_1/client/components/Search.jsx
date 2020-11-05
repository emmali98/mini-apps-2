import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List.jsx';
import ReactPaginate from 'react-paginate';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [currentList, setCurrentList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    document.title = `${query}`;
  })

  const getEvents = (page = 1) => {
    axios.get(`/events?q=${query}&_page=${page}`)
    .then((res) => {
      setCurrentList(res.data);

      let links = res.headers.link.split(', ');
      let last = links[links.length - 1];
      setPageCount(last.slice(last.indexOf('page=') + 5, last.indexOf('>;')));
    })
    .catch((err) => {
      console.error(err);
      // TODO: Add something else to indicate to user
    })
  }

  const handlePageClick = (data) => {
    let selected = data.selected;
    getEvents(selected + 1);
  };

  return (
    <div>
      <input type="text" name="search" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => getEvents()}>Go</button>
      <List events={currentList} />
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
      />
    </div>
  )
}

export default Search;
