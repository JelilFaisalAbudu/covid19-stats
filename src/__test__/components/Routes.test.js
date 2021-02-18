import { shallow } from 'enzyme';
import '../setup/setupTests'
import Routes from '../../components/Routes';

const setup = () => shallow(<Routes />);

describe('Routes component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('finds the only 1 header element', () => {
    const element = component.find('header');
    expect(element.length).toEqual(1);
  });

  test('renders the nav in the page', () => {
    const item = component.find('.nav');
    expect(item).toMatchSnapshot();
  });

  test('renders the main tag in the page', () => {
    const item = component.find('main');
    expect(item).toMatchSnapshot();
  });

  test('renders the footer in the page', () => {
    const item = component.find('footer');
    expect(item).toMatchSnapshot();
  });
});
