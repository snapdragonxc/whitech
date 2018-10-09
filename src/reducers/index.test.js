/* eslint-disable */

import rootReducer from './index';
import * as actions from '../actions';
import { products, productsPerPage } from '../../data/fixtures';

const page = 2;

const perPage = 4;

const pageData = {
  products,
  page: 1
}



const initialState = {
  products: [],
  loaded: false,
  page: 1,
  productsPerPage: [],
  pages: 1,
  perPage: 8,
  numberProducts: 0
}

const Stateloaded = {
  products,
  loaded: true,
  page: 1,
  productsPerPage,
  pages: products.length/8,
  perPage: 8,
  numberProducts: products.length
}

describe('root reducer', () => {

  it('returns the initial state', () => {
    expect(rootReducer()).toEqual(initialState);
  });

  it('returns the initial state', () => {
    expect(rootReducer(initialState, {})).toEqual(initialState);
  });

  it('returns the initial state', () => {
    expect(rootReducer(initialState, {})).toEqual(initialState);
  });

  it('sets theproducts', () => {
    expect(rootReducer(
      initialState,
      { type: actions.SET_PRODUCTS, pageData }
    )).toEqual(Stateloaded);
  });

  it('gets products per page for each page', () => {
    expect(rootReducer(Stateloaded, { type: actions.GET_PRODUCTS, page })).toEqual({
      products,
      loaded: true,
      page: page,
      productsPerPage: products.slice(8, 16),
      pages: products.length/8,
      perPage: 8,
      numberProducts: products.length
    });
  });

  it('get products per page when number perPage is changed', () => {
    expect(rootReducer(Stateloaded, {type: actions.ON_PER_PAGE, perPage})).toEqual({
      products,
      loaded: true,
      page: 1,
      productsPerPage: products.slice(0, perPage),
      pages: products.length/perPage,
      perPage,
      numberProducts: products.length
    });
  });

});
