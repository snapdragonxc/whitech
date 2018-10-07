/* eslint-disable */

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ON_PER_PAGE = 'ON_PER_PAGE';

export function setProducts(pageData) {
  return {
    type: SET_PRODUCTS,
    pageData
  }
}

export function getProducts(page) {
  return {
    type: GET_PRODUCTS,
    page
  }
}

export function onPerPage(perPage) {
  return {
    type: ON_PER_PAGE,
    perPage
  }
}
