/* eslint-disable */
import { SET_PRODUCTS, GET_PRODUCTS, ON_PER_PAGE } from '../actions';

const initialState = {
  products: [],
  loaded: false,
  page: 1,
  productsPerPage: [],
  pages: 1,
  perPage: 8,
  numberProducts: 0
};

function products(state = initialState, action ) {
  let type = '';
  if( action ) {
    type = action.type
  }
  switch(type) {
    case SET_PRODUCTS:
      {
        let { page, products } = action.pageData;
        let perPage = state.perPage;
        let pages = Math.ceil(products.length / perPage);
        let begin = (page - 1) * perPage;
        let productsPerPage = products.slice(begin, begin + perPage);
        console.log('pages', pages)
        return {...state, productsPerPage, products, page, pages, loaded: true, numberProducts: products.length };
      }
    case GET_PRODUCTS:
      {
        let page = action.page;
        let { perPage, products } = state;
        let pages = Math.ceil(products.length / perPage);
        let begin = (page - 1) * perPage;
        let productsPerPage = state.products.slice(begin, begin + perPage);
        return {...state, productsPerPage, pages, page};
      }
    case ON_PER_PAGE:
      {
        let page = 1;
        let perPage = action.perPage;
        let { products } = state;
        let pages = Math.ceil(products.length / perPage);
        let productsPerPage = state.products.slice(0, perPage);
        return {...state, productsPerPage, pages, page, perPage};
      }
    default:
      return state;
  }
}

export default products;
