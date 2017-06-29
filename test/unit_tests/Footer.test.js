'use strict';
/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/client/components/Footer';

const component = shallow(<Footer/>);
describe('The Footer component', () => {
  it('should render the footer', () => {
    expect(component.find('.footer').length).toBe(1);
  });
});
