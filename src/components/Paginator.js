import React from 'react';

export const PAGE_UPPER_LIMIT = 2000;
export const PAGE_RANGE = 3;

const Paginator = ({
  dec,
  inc,
  curPage,
  max = PAGE_UPPER_LIMIT,
  pageRange = PAGE_RANGE,
}) => {
  const pages = [];
  const min = 1;
  let range = pageRange;
  if (range > max) {
    range = max;
  }
  let start = curPage - Math.floor(range / 2);
  start = Math.max(start, min);
  start = Math.min(start, min + max - range);
  for (let i = start; i < (start + range); i++) {
    pages.push(i);
  }
  if (max === PAGE_UPPER_LIMIT) {
    return <div></div>;
  }

  return (
    <ul className="pagination">
      <li className="pagination__item"><a className="pagination__box" onClick={dec}><span>&lt; Previous page</span></a></li>
      {
        pages.map((page, index) => (
          <li key={index + 1} className="pagination__item">
            <a
              className={(curPage === page) ? 'pagination__box active' : 'pagination__box'}>
                 {page}
            </a>
          </li>
        ))
      }
      <li className="pagination__item"><a className="pagination__box" onClick={inc}><span> Next page &gt;</span></a></li>
    </ul>
  );
};
export default Paginator;
