import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CountryListContainer from '../containers/CountryListContainer';
import CountryDetails from './CountryDetails';
import { initialState as countries } from '../redux/reducers/data';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <CountryListContainer countries={countries.data.Countries} />
      </Route>
      <Route
        path="/Countries/:countryCountry"
        render={({ match }) => (
          <CountryDetails
            country={
            // eslint-disable-next-line max-len
            countries.data.Countries.find(country => country.Country === match.params.countryCountry)
          }
          />
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
