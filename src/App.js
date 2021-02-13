import './App.css';
import CountryListContainer from './containers/CountryListContainer';

const initialState = {
  data: {
    ID: '194666c1-5e3c-4b04-b674-ba0c53efeca9',
    Message: '',
    Global: {
      NewConfirmed: 271764,
      TotalConfirmed: 106019525,
      NewDeaths: 5595,
      TotalDeaths: 2315332,
      NewRecovered: 122628,
      TotalRecovered: 59156138,
      Date: '2021-02-08T18:33:59.362Z',
    },
    Countries: [
      {
        ID: 'c4c60852-1481-491c-baf4-d4de87668ae2',
        Country: 'Afghanistan',
        CountryCode: 'AF',
        Slug: 'afghanistan',
        NewConfirmed: 0,
        TotalConfirmed: 55335,
        NewDeaths: 0,
        TotalDeaths: 2410,
        NewRecovered: 0,
        TotalRecovered: 48041,
        Date: '2021-02-08T18:33:59.362Z',
        Premium: {},
      },
      {
        ID: 'bf337ee7-0ec7-4e5a-a177-0b53607297e1', Country: 'Albania', CountryCode: 'AL', Slug: 'albania', NewConfirmed: 0, TotalConfirmed: 85336, NewDeaths: 0, TotalDeaths: 1460, NewRecovered: 0, TotalRecovered: 51444, Date: '2021-02-08T18:33:59.362Z', Premium: {},
      },
      {
        ID: '4cb20fbc-a235-4add-aecf-4f8b04a803c8', Country: 'Algeria', CountryCode: 'DZ', Slug: 'algeria', NewConfirmed: 0, TotalConfirmed: 109088, NewDeaths: 0, TotalDeaths: 2914, NewRecovered: 0, TotalRecovered: 74692, Date: '2021-02-08T18:33:59.362Z', Premium: {},
      },
      {
        ID: '85fe3513-cf7b-40dc-9319-9c8b2b710d43', Country: 'Andorra', CountryCode: 'AD', Slug: 'andorra', NewConfirmed: 0, TotalConfirmed: 10251, NewDeaths: 0, TotalDeaths: 106, NewRecovered: 0, TotalRecovered: 9533, Date: '2021-02-08T18:33:59.362Z', Premium: {},
      }],
  },
};

function App() {
  return (
    <div className="App">
      <CountryListContainer countries={initialState.data.Countries} />
    </div>
  );
}

export default App;
