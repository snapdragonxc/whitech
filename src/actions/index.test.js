/* eslint-disable */

import * as actions from './index';
import { products } from '../../data/fixtures';

const page = 1;

const perPage = 8;

const pageData = {
  products,
  page
}

describe('actions', () => {
  it('creates an action to set the products', () => {
    const expectedAction = {
      type: actions.SET_PRODUCTS,
      pageData
    };

    expect(actions.setProducts(pageData)).toEqual(expectedAction);
  });

  it('creates an action to get the products per page when the page changes', () => {
    const expectedAction = {
      type: actions.GET_PRODUCTS,
      page
    };

    expect(actions.getProducts(page)).toEqual(expectedAction);
  });

  it('creates an action to get the products per page when number perPage changes', () => {
    const expectedAction = {
      type: actions.ON_PER_PAGE,
      perPage
    };

    expect(actions.onPerPage(perPage)).toEqual(expectedAction);
  });

});
