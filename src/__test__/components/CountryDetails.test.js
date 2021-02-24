import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import store from '../../redux/store';
import CountryDetails from '../../containers/CountryDetails';

const setup = () => shallow(<Provider store={store}><CountryDetails /></Provider>);

describe('Country Details', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  test('renders the country details component correctly', () => {
    const element = component.find('.table-wrapper');
    expect(element).toMatchSnapshot();
  });
});
