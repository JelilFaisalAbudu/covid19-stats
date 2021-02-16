import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import doFetchData from '../redux/actions/dataActions';
import CountryList from '../components/countryList';
import Search from '../components/Search';
import { byQuery } from '../helpers/byQuery';
import Preloader from '../components/Preloader';

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

  if (loading) {
    return (<Preloader />);
  } if (error) {
    return (error);
  }
  return (
    <div>
      <Search
        handleChange={handleChange}
        query={query}
      >
        Search Country:
      </Search>
      <CountryList countries={(data.Countries).filter(byQuery(query))} />
    </div>
  );
};

const mapStateToPropsCountryList = state => ({
  dataState: state.dataState,
});

const mapDispatchToPropsCountryList = dispatch => ({
  fetchData: () => dispatch(doFetchData()),
});

const ConnectedCountryListContainer = connect(
  mapStateToPropsCountryList,
  mapDispatchToPropsCountryList,
)(CountryListContainer);

CountryListContainer.propTypes = {
  dataState: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default ConnectedCountryListContainer;
