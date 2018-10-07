/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { setProducts, getProducts, onPerPage } from '../actions';
import { connect } from 'react-redux';
import Shop from './Shop';
import Error from './Error';

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 8,
      nan: false
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let page = Number(this.props.match.params.page);
    if (isNaN(page) ) {
      this.setState({ nan : true})
      return;
    }

    if (this.props.loaded === false) {
      Axios.get('/api').then(response => {
        let pageData = {
          products: response.data,
          page
        }
        this.props.setProducts(pageData);
      })
    } else {
      this.props.getProducts(page);
    }
  }

  nextPage() {
    let { page, pages } = this.props;
    page = page + 1;
    if ( page > pages ) {
      return;
    }
    this.props.history.push(`/${page}`);
    this.props.getProducts(page);
  }

  prevPage() {
    let { page } = this.props;
    page = page - 1;
    if ( page === 0 ) {
      return;
    }
    this.props.history.push(`/${page}`);
    this.props.getProducts(page);
  }

  handleChange(event) {
    let perPage = Number(event.target.value);
    this.setState({ perPage });
    this.props.onPerPage(perPage);
  }

  render() {
    let { nan, perPage } = this.state;
    let { pages, page, numberProducts, productsPerPage } = this.props;

    if (nan) {
      return <Error />;
    }

    return (
      <Shop
        numberProducts={numberProducts}
        productsPerPage={productsPerPage}
        perPage={perPage}
        handleChange={this.handleChange}
        page={page}
        pages={pages}
        prevPage={this.prevPage}
        nextPage={this.nextPage}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    loaded: state.loaded,
    productsPerPage: state.productsPerPage,
    page: state.page,
    pages: state.pages,
    perPage: state.perPage,
    numberProducts: state.numberProducts
  }
}

export default connect(mapStateToProps, { setProducts, getProducts, onPerPage })(Container);
