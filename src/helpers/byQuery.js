const byQuery = query => item => item.Country.toLowerCase().includes(query.toLowerCase());

export default byQuery;
