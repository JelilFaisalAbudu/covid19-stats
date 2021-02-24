import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CountryList from './countryList';
import CountryDetails from './CountryDetails';
import Footer from './Footer';

const Routes = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={CountryList} />
        <Route
          exact
          path="/countries/:countryCountry"
          component={CountryDetails}
        />
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default Routes;
