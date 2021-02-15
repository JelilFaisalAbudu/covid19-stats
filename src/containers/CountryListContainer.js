/* eslint-disable */
import React, { useState } from 'react';
import CountryList from '../components/countryList';
import Search from '../components/Search';
import { byQuery } from '../helpers/byQuery';

const CountryListContainer = ({ countries }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <div>
      <Search
        handleChange={handleChange}
        query={query}
      >
        Search Country:
      </Search>
      <CountryList countries={(countries || []).filter(byQuery(query))} />
    </div>
  );
};

export default CountryListContainer;
