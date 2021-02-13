/* eslint-disable */

import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => (
  <div className="row" style={{
    display: 'flex',
    justifyContent: 'space-evenly',
  }}>
    {countries.map(country => (
    <Country key={country.ID} country={country}/>
  ))}
  </div>
);

export default CountryList;
