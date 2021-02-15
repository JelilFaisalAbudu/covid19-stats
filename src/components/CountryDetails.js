import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryDetails = ({ country }) => (

  <div>
    <div>
      Country:
      {' '}
      {country.Country}
    </div>
    <div>
      New Confirm Case:
      {' '}
      {country.NewConfirmed}
    </div>
    <div>
      Total Confirm Case:
      {' '}
      {country.TotalConfirmed}
    </div>
    <Link to="/">
      <button type="button">Back</button>
    </Link>
  </div>
);

CountryDetails.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CountryDetails;
