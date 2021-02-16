import PropTypes from 'prop-types';
import '../css/Search.css';

const Search = ({ query, handleChange, children }) => (
  <div className="search-wrapper">
    <input
      type="text"
      className="form-control"
      id="inputSearch"
      value={query}
      onChange={handleChange}
      placeholder={children}
    />
  </div>
);

Search.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Search.defaultProps = { query: '' };

export default Search;
