import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Country from '../../components/Country';

const country = {
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
};

const setup = () => shallow(<Country country={country} />);

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.country');
    expect(element.length).toEqual(1);
  });

  test('renders the app in the page', () => {
    const item = component.find('.country');
    expect(item).toMatchSnapshot();
  });
});
