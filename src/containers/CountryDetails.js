import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/CountryDetails.css';
import doFetchData from '../redux/actions/dataActions';

const CountryDetails = ({ country }) => (
  <div className="table-wrapper">
    <div className="table-title">
      <h3>
        Covid-19 Data -
        {' '}
        {country.Country}
      </h3>
      <span>
        Last Update:
        {' '}
        {`${new Date(country.Date)}`}
      </span>
    </div>
    <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left">Item</th>
          <th className="text-left">Figures</th>
        </tr>
      </thead>
      <tbody className="table-hover">
        <tr>
          <td className="text-left">New Confirmed</td>
          <td className="text-left">{country.NewConfirmed}</td>
        </tr>
        <tr>
          <td className="text-left">Total Confirmed</td>
          <td className="text-left">{country.TotalConfirmed}</td>
        </tr>
        <tr>
          <td className="text-left">New Deaths</td>
          <td className="text-left">{country.NewDeaths}</td>
        </tr>
        <tr>
          <td className="text-left">Total Deaths</td>
          <td className="text-left">{country.TotalDeaths}</td>
        </tr>
        <tr>
          <td className="text-left">New Recovered</td>
          <td className="text-left">{country.NewRecovered}</td>
        </tr>
        <tr>
          <td className="text-left">Total Recovered</td>
          <td className="text-left">{country.TotalRecovered}</td>
        </tr>
      </tbody>
    </table>
    <Link to="/">
      <button type="button" className="back-button">Back</button>
    </Link>
  </div>
);

const mapStateToPropsCountryDetails = (state, ownProps) => {
  const countryName = ownProps.match.params.countryCountry;
  const countries = state.dataState.data.Countries;

  return {
    country: countries.find(country => country.Country === countryName),
  };
};

const mapDispatchToPropsCountryList = dispatch => ({
  fetchData: () => dispatch(doFetchData()),
});

CountryDetails.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
  mapStateToPropsCountryDetails,
  mapDispatchToPropsCountryList,
)(CountryDetails);
