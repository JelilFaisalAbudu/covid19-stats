import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Search from '../../components/Search';

const handleChange = query => query;

const setup = () => shallow(<Search handleChange={handleChange} />);

describe('Search component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.form-control');
    expect(element.length).toEqual(1);
  });

  test('renders the search bar in the page', () => {
    const item = component.find('.search-wrapper');
    expect(item).toMatchSnapshot();
  });
});
