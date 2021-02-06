import React, { useState, useEffect } from 'react';
import './pagination.scss';
import PaginationItem from './../paginationItem/PaginationItem'
import { Link } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import fetchData from 'data-fetcher';

function Pagination(props) {
  let arr = [
      {id:1, text: "1111"},
      {id:2, text: "2222"},
      {id:3, text: "3333"},
      {id:4, text: "4444"},
      {id:5, text: "5555"},
      {id:6, text: "6666"},
      {id:7, text: "7777"},
  ]

  

  const pageLimit = 4;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data ,setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  let mediaCardElementRevers = arr.map((mediaCard) => <PaginationItem rel="preload" key={mediaCard.id}/>);
  let mediaCardElement = mediaCardElementRevers.reverse()
  useEffect(() => {
    fetchData().then(mediaCardElement => setData(mediaCardElement));
  }, []);

  useEffect(() => {
      setCurrentData(mediaCardElement.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <>
        <div className='paginationContainer'>
            <div className="media_blog_cards">
                {currentData.map(mediaCardElement => (
                <>{mediaCardElement}</>
                ))}
            </div>
            <Paginator
                totalRecords={mediaCardElement.length}
                pageLimit={pageLimit}
                pageNeighbours={1}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    </>
  );
}

export default Pagination;
