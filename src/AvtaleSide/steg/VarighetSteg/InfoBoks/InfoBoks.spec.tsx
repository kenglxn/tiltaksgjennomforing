import React from 'react';
import { shallow } from 'enzyme';
import InfoBoks from './InfoBoks';

test('Test that <InfoBoks> renders correctly', () => {
    const wrapper = shallow(<InfoBoks dagerIUka={1} timerIUka={1} varighet={undefined} />);
    expect(wrapper).toHaveLength(1);
});
