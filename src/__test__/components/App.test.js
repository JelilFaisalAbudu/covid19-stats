import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import '../setup/setupTests';
import App from '../../App';

const setup = () => shallow(<App />);

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.App');
    expect(element.length).toEqual(1);
  });

  test('renders the app in the page', () => {
    const item = component.find('.App');
    expect(item).toMatchSnapshot();
  });
});
