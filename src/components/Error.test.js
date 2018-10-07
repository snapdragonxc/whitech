/* eslint-disable */

import React from 'react';
import { mount } from 'enzyme';
import  Error  from './Error';

describe('Error', () => {
  const wrapper = mount(<Error />);
  it('renders the error message', () => {
    expect(wrapper.find('div').text()).toEqual('You have reached this page by mistake.');
  });
});
