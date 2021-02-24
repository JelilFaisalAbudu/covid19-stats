import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import doFetchData from '../redux/actions/dataActions';
import Search from './Search';
import byQuery from '../helpers/byQuery';
import Preloader from './Preloader';
import Country from './Country';
import '../css/CountryList.css';

const CountryList = ({
  loading, countries, error, fetchData,
}) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (<Preloader />);
  } if (error) {
    return (error);
  }
  return (
    <>
      <Search
        handleChange={handleChange}
        query={query}
      >
        Search Country:
      </Search>

      <div
        className="row"
      >
        {countries.filter(byQuery(query)).map(country => (
          <Country key={country.ID} country={country}>
            <Link
              to={`/countries/${country.Country}`}
              className="view-details"
            >
              View Details
            </Link>
          </Country>
        ))}
      </div>
    </>
  );
};

const mapStateToPropsCountryList = state => ({
  countries: state.dataState.data.Countries,
  loading: state.dataState.loading,
  error: state.dataState.error,
});

const mapDispatchToPropsCountryList = dispatch => ({
  fetchData: () => dispatch(doFetchData()),
});

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
};

CountryList.defaultProps = {
  error: '',
};

export default connect(
  mapStateToPropsCountryList,
  mapDispatchToPropsCountryList,
)(CountryList);
