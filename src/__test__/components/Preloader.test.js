import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import Preloader from '../../components/Preloader';

const setup = () => shallow(<Preloader />);

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('#loader');
    expect(element.length).toEqual(1);
  });

  test('renders the app in the page', () => {
    const item = component.find('#loader');
    expect(item).toMatchSnapshot();
  });
});
