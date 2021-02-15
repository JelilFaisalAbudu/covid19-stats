import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => (
  <div
    className="row"
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
    }}
  >
    {countries.map(country => (
      <Country key={country.ID} country={country}>
        <Link to={`/countries/${country.Country}`}>
          View Details
        </Link>
      </Country>
    ))}
  </div>
);

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryList;
