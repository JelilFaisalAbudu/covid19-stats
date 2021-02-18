import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ConnectedCountryListContainer from '../containers/CountryListContainer';
import CountryDetails from './CountryDetails';
import store from '../redux/store';
import Footer from './Footer';

const Routes = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={ConnectedCountryListContainer} />
        <Route
          path="/countries/:countryCountry"
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
    </main>
    <Footer />
  </Router>
);

export default Routes;
