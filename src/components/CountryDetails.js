/* eslint-disable  */
import { Link } from 'react-router-dom';

const CountryDetails = ({ country }) => (

  <div>
    <div>
      Country: {country.Country}
    </div>
    <div>
    New Confirm Case: {country.NewConfirmed}
    </div>
    <div>
    Total Confirm Case: {country.TotalConfirmed}
    </div>
    <Link to="/">
      <button>Back</button>
    </Link>
  </div>
);

export default CountryDetails;
