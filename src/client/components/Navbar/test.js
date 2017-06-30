'use strict';
/* global describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

const component = shallow(<Navbar/>);
describe('The Navbar component', () => {
  it('should render the Navbar', () => {
    expect(component.find('.navbar').length).toBe(1);
  });
});
