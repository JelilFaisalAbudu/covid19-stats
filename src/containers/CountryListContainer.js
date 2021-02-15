/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import doFetchData from '../redux/actions/dataActions';
import CountryList from '../components/countryList';
import Search from '../components/Search';
import { byQuery } from '../helpers/byQuery';

const CountryListContainer = ({ dataState, fetchData }) => {
  const { loading, data, error } = dataState;

  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <Search
        handleChange={handleChange}
        query={query}
      >
        Search Country:
      </Search>
      <CountryList countries={(data.Countries).filter(byQuery(query))} />
    </div>
  )
};

const mapStateToPropsCountryList = (state) => {
  return {
    dataState: state.dataState,
  }
}

const mapDispatchToPropsCountryList = dispatch => {
  return {
    fetchData: () => dispatch(doFetchData())
  }
}

const ConnectedCountryListContainer = connect(
  mapStateToPropsCountryList,
  mapDispatchToPropsCountryList
)(CountryListContainer);

export default ConnectedCountryListContainer;
