
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleFilter = () => {
    onFilter({ title: titleFilter, rate: rateFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by rating"
        value={rateFilter}
        onChange={(e) => setRateFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
