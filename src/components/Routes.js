import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CountryListContainer from '../containers/CountryListContainer';
import CountryDetails from './CountryDetails';
import { initialState as countries } from '../redux/reducers/data';

export const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={CountryListContainer} />
      <Route exact path="/home" component={CountryListContainer} />
      <Route
        path="/Countries/:countryCountry"
        render={({ match }) => (
          <CountryDetails
            country={
            countries.find(country => country.Country === match.params.countryCountry)
          }
          />
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
