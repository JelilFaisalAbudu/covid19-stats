import dataReducer, { initialState } from '../../redux/reducers/data';
import {
  doFetchDataRequest,
  doFetchDataSuccess,
  doFetchDataFailure,
} from '../../redux/actions/dataActions';

// const initialState = {
//   loading: true,
//   data: {
//     Global: {},
//     Countries: [],
//   },
//   error: '',
// };

const incomingData = {
  Global: {},
  Countries: [
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
  ],
};

describe('Data Reducer', () => {
  test('Should return the default state', () => {
    const newState = dataReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('should initiate loading to true while making data request', () => {
    const oldTotalCount = initialState.data.Countries.length;
    const newState = dataReducer(undefined, doFetchDataRequest);
    expect(newState.loading).toBe(true);

    const newTotalCount = newState.data.Countries.length;
    expect(newTotalCount).toEqual(oldTotalCount);
  });

  test('should add new data to the store', () => {
    const initState = dataReducer(undefined, {});
    const newState = dataReducer(undefined, doFetchDataSuccess(incomingData));
    const { data, loading } = newState;

    expect(loading).toEqual(false);
    expect(data.Countries.length).toBeGreaterThan(initState.data.Countries.length);
  });

  test('dispatch the doFetchDataFailure and return error message', () => {
    const initState = dataReducer(undefined, {});
    const newState = dataReducer(undefined, doFetchDataFailure('Cannot fetch data'));

    expect(initState.error).toBeFalsy();
    expect(newState.error).toBeTruthy();
  });
});
