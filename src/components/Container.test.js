/* eslint-disable */

import React from 'react';
import { mount, shallow } from 'enzyme';
import  { Container } from './Container';

import { fakeServer } from 'sinon';

import { productsPerPage } from '../../data/fixtures';

const page = 1;

describe('Container', () => {

    describe('does not call get products when prev page is clicked if page = 1', () => {
      const props = {
        numberProducts: 24,
        productsPerPage: productsPerPage,
        page,
        pages: 10,
        getProducts: jest.fn(),
        history: { push: jest.fn()}
      }
      const  wrapper = shallow(<Container {...props}/>);
      const instance = wrapper.instance();
      jest.spyOn(props, 'getProducts');
      instance.prevPage();
      it('calls get products', () => {
        expect(props.getProducts).not.toHaveBeenCalled();
      });
    });

    describe('calls get products when next page', () => {
      const props = {
        numberProducts: 24,
        productsPerPage: productsPerPage,
        page,
        pages: 10,
        getProducts: jest.fn(),
        history: { push: jest.fn()}
      }
      const  wrapper = shallow(<Container {...props}/>);
      const instance = wrapper.instance();
      jest.spyOn(props, 'getProducts');
      instance.nextPage();
      it('calls get products', () => {
        expect(props.getProducts).toHaveBeenCalled();
      });
      it('calls get products with correct page number', () => {
        expect(props.getProducts).toHaveBeenCalledWith(page + 1);
      });
    });

    describe('does not call get products when next page is clicked if page = pages', () => {
      const props = {
        numberProducts: 24,
        productsPerPage: productsPerPage,
        page: 10,
        pages: 10,
        getProducts: jest.fn(),
        history: { push: jest.fn()}
      }
      const  wrapper = shallow(<Container {...props}/>);
      const instance = wrapper.instance();
      jest.spyOn(props, 'getProducts');
      instance.nextPage();
      it('does not call get products', () => {
        expect(props.getProducts).not.toHaveBeenCalled();
      });
    });

    describe('calls get products when prev page is clicked if page > 1', () => {
      const props = {
        numberProducts: 24,
        productsPerPage: productsPerPage,
        page: page + 1,
        pages: 10,
        getProducts: jest.fn(),
        history: { push: jest.fn()}
      }
      const  wrapper = shallow(<Container {...props}/>);
      const instance = wrapper.instance();
      jest.spyOn(props, 'getProducts');
      instance.prevPage();
      it('calls get products', () => {
        expect(props.getProducts).toHaveBeenCalled();
      });
      it('calls get products with correct page number', () => {
        expect(props.getProducts).toHaveBeenCalledWith(page);
      });
    });

    describe('calls onPerPage when handleChange selector is changed', () => {
      const props = {
        numberProducts: 24,
        page: page + 1,
        pages: 10,
        getProducts: jest.fn(),
        history: { push: jest.fn()},
        onPerPage: jest.fn()
      }
      const  wrapper = shallow(<Container {...props}/>);
      const instance = wrapper.instance();
      jest.spyOn(props, 'onPerPage');

      const perPage = 4;

      const event = { target: { value: perPage }};

      instance.handleChange(event);
      it('calls onPerPage', () => {
        expect(props.onPerPage).toHaveBeenCalled();
      });
      it('calls get products with correct onProps', () => {
        expect(props.onPerPage).toHaveBeenCalledWith(perPage);
      });
    });

    /* componentDidMount */

    describe('ComponentDidMount already loaded with products', () => {
        const props = {
          loaded: true,
          history: { push: jest.fn()},
          match: { params: { page }},
          getProducts: jest.fn()
        }
        const  wrapper = shallow(<Container {...props}/>);
        const instance = wrapper.instance();
        jest.spyOn(props, 'getProducts');
        instance.componentDidMount();
        it('calls get products', () => {
          expect(props.getProducts).toHaveBeenCalled();
        });

        it('calls get products with correct page number', () => {
          expect(props.getProducts).toHaveBeenCalledWith(page);
        });
    })

    describe('ComponentDidMount if url page number is not a number', () => {
        const props = {
          loaded: true,
          history: { push: jest.fn()},
          match: { params: { page: 'aaa' }},
          getProducts: jest.fn()
        }
        const  wrapper = shallow(<Container {...props}/>);
        const instance = wrapper.instance();
        jest.spyOn(props, 'getProducts');
        instance.componentDidMount();
        it('does not call get products', () => {
          expect(props.getProducts).not.toHaveBeenCalled();
        });
    });



});
