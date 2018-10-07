/* eslint-disable */

import React from 'react';
import { mount, shallow } from 'enzyme';
import  Paginator from './Paginator';

const max = 3;
const curPage = 1;
const pageRange = 3;

let props = {
  inc: jest.fn(),
  dec: jest.fn(),
  curPage,
  max,
  pageRange
}

describe('Paginator', () => {
  describe('it calls the dec callback when clicked', () => {
    const  wrapper = mount(<Paginator {...props} />)
    jest.spyOn(props, 'dec');
    wrapper.find('a').at(0).simulate('click');
    expect(props.dec).toHaveBeenCalled();
  })

  describe('it calls the inc callback when clicked', () => {
    const  wrapper = mount(<Paginator {...props} />)
    jest.spyOn(props, 'inc');
    wrapper.find('a').at(4).simulate('click');
    expect(props.inc).toHaveBeenCalled();
  })

  describe('it can render correct pagination', () => {
    const  wrapper = mount(<Paginator {...props} />)
    it('renders correct paginator number', () => {
      expect(wrapper.find('a').length - 2).toEqual(pageRange);
     });
  })

  describe('pages (i.e. max) is not declared', () => {
      props = {
        curPage,
        pageRange
      }
      const wrapper = mount(<Paginator {...props} />);
      it('renders empty paginator if pages is absent', () => {
        expect(wrapper.find('a').length).toEqual(0);
      });
   })

   describe('page range can not be greater than max', () => {
      props = {
        curPage,
        max,
        pageRange: max + 1
      }
      const wrapper = mount(<Paginator {...props} />);
      it('renders page range equal to max', () => {
        expect(wrapper.find('a').length - 2).toEqual(max);
      });
    })

    describe('default page range is 3', () => {
       props = {
         curPage,
         max,
       }
       const wrapper = mount(<Paginator {...props} />);
       it('renders page range equal to three', () => {
         expect(wrapper.find('a').length - 2).toEqual(3);
       });
     })
});
