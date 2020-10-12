import Button from '.'
import {shallow} from 'enzyme'
it('should render correctly', () => {
    const button = shallow(<Button/>)
    expect(button).toMatchSnapshot()
});
