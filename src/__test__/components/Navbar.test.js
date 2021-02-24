import { shallow } from 'enzyme';
import '../setup/setupTests';
import Navbar from '../../components/Navbar';

const setup = () => shallow(<Navbar />);

describe('Navbar component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('finds the only 1 nav', () => {
    const element = component.find('.nav');
    expect(element.length).toEqual(1);
  });

  test('renders the nav in the page', () => {
    const item = component.find('.nav');
    expect(item).toMatchSnapshot();
  });

  test('renders the nav brand in the page', () => {
    const item = component.find('.brand');
    expect(item).toMatchSnapshot();
  });

  test('renders the navBrand in the page', () => {
    const item = component.find('.nav-links');
    expect(item).toMatchSnapshot();
  });
});
