import React, { useState } from 'react';

const usePagination = (page = 1, total = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [totalPages, setTotalPages] = useState<number>(total);

  const onBtnClick: React.MouseEventHandler<HTMLLabelElement> = e => {
    if (!(e.target instanceof HTMLElement)) return;
    const value = e.target.textContent;

    if (value === 'next') {
      return setCurrentPage(state => state + 1);
    }
    if (value === 'prev') {
      return setCurrentPage(state => state - 1);
    }
    setCurrentPage(Number(value));
  };

  return { currentPage, totalPages, setTotalPages, onBtnClick };
};

export default usePagination;
