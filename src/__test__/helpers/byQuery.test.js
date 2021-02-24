import byQuery from '../../helpers/byQuery';

const Countries = [
  {
    Country: 'ALA Aland Islands',
    CountryCode: 'AX',
    Slug: 'ala-aland-islands',
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: '2020-04-05T06:37:00Z',
  },
  {
    Country: 'Ghana',
    CountryCode: 'AX',
    Slug: 'GHA',
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: '2020-04-05T06:37:00Z',
  },
  {
    Country: 'United Kingdom',
    CountryCode: 'AX',
    Slug: 'UK',
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: '2020-04-05T06:37:00Z',
  },
  {
    Country: 'Nigeria',
    CountryCode: 'AX',
    Slug: 'NG',
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: '2020-04-05T06:37:00Z',
  },
];

describe('byQuery helper method', () => {
  test('returns all the countries in the list if given empty string', () => {
    const result = Countries.filter(byQuery(''));
    expect(result).toEqual(Countries);
  });

  test('returns only one object where the country is Ghana', () => {
    const result = Countries.filter(byQuery('Ghana'));
    expect(result.length).toEqual(1);
    expect(result[0].Country).toEqual('Ghana');
  });

  test('returns no country if given unmatched country name', () => {
    const result = Countries.filter(byQuery('Ghana2345'));
    expect(result.length).toEqual(0);
  });
});
