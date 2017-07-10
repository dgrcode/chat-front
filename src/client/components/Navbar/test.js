'use strict';
/* global jest, describe, it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

const dispatchToggleConfig = jest.fn();
const component = shallow(<Navbar dispatchToggleConfig={dispatchToggleConfig}/>);
describe('The Navbar component', () => {
  it('should render the Navbar', () => {
    expect(component.find('.navbar').length).toBe(1);
  });
});
