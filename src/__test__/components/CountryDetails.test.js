import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import '../setup/setupTests'
import store from '../../redux/store';
import CountryDetails from '../../components/CountryDetails';

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
