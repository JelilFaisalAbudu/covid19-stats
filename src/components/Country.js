import PropTypes from 'prop-types';
import '../css/Country.css';
import cardImage from '../images/coronavirusImage1.jpg';

const Country = ({ country, children }) => (
  <div className="column country">
    <div className="card">
      <img src={cardImage} alt="covid-19" style={{ width: '100%' }} />
      <div className="container">
        <h2 className="country-name">{country.Country}</h2>
        <div className="record-wrapper">
          <h3 className="title">New Confirm Cases</h3>
          <span className="case-figure">
            {country.NewConfirmed}
          </span>
        </div>
        <p>
          <button
            type="button"
            className="button"
          >
            {children}
          </button>
        </p>
      </div>
    </div>
  </div>
);

Country.propTypes = {
  Country: PropTypes.string,
  NewConfirmed: PropTypes.string,
}.isRequired;

export default Country;
