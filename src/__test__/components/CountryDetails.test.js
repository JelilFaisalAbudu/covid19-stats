import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

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

describe('Country Details', () => {
  test('renders the back button', () => {
    render(<CountryDetails country={country} />);
    const textNode = screen.getByText(/Back/i);
    expect(textNode).toBeInTheDocument();
  });

  test('renders the app component correctly', () => {
    const app = renderer.create(<CountryDetails country={country} />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
