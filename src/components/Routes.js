import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ConnectedCountryListContainer from '../containers/CountryListContainer';
import CountryDetails from './CountryDetails';
import store from '../redux/store';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ConnectedCountryListContainer} />
      <Route
        path="/Countries/:countryCountry"
        render={({ match }) => {
          const { dataState } = store.getState();
          return (
            <CountryDetails
              country={
          dataState.data.Countries.find(country => country.Country === match.params.countryCountry)
        }
            />
          );
        }}
      />
    </Switch>
  </Router>
);

export default Routes;
