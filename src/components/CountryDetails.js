/* eslint-disable  */
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
  </div>
);

export default CountryDetails;
