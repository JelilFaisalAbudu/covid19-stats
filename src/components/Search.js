import PropTypes from 'prop-types';

const Search = ({ query, handleChange, children }) => (
  <div>
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
  children: PropTypes.element.isRequired,
};

Search.defaultProps = { query: '' };

export default Search;
