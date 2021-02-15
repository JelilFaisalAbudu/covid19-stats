/* eslint-disable */
import '../css/Country.css';
import cardImage from'../images/coronavirusImage1.jpg';

const Country = ({ country, children }) => (
  <div className="column country">
    <div className="card">
      <img src={cardImage} alt="Mike" style={{width: '100%' }} />
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
            className="button"
            >
              {children}
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default Country;
