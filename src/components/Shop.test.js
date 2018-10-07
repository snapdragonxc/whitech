/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import  Shop  from './Shop';
import { productsPerPage } from '../../data/fixtures';

const props = {
  numberProducts: 24,
  productsPerPage: productsPerPage,
  perPage: 8,
  page: 1,
  pages: 10
}

describe('Shop', () => {
  const wrapper = shallow(<Shop {...props}/>);

  it('renders the title', () => {
    expect(wrapper.find('h2').text()).toEqual('All Products');
  });

  it('renders the number of products heading', () => {
    expect(wrapper.find('.header__number p').text()).toEqual(`${props.numberProducts} Products`);
  });

  it('renders the correct number of products', () => {
    expect(wrapper.find('figure').length).toEqual(props.productsPerPage.length);
  })
});
