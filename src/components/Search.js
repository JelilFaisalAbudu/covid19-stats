/* eslint-disable */

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

export default Search;
