'use strict';
/* global describe, it, expect */

import React from 'react';
import { mount } from 'enzyme';
import MessageView from '../../src/client/components/MessageView';

const dummyMsg = { message: 'whatever', ownerId: 0 };
const component = mount(
  <MessageView isFromUser={false}>{dummyMsg.message}</MessageView>
);
describe('The MessageView', () => {
  it('should render a message', () => {
    expect(component.find('.message').length).toBe(1);
  });

  it('should show a `from-user` element when passed `isFromUser=true`', () => {
    component.setProps({ isFromUser: true });
    expect(component.find('.message').length).toBe(1);
    expect(component.find('.from-user').length).toBe(1);
  });

  it('should not show a `from-user` element when passed `isFromUser=false`', () => {
    component.setProps({ isFromUser: false });
    expect(component.find('.message').length).toBe(1);
    expect(component.find('.from-user').length).toBe(0);
  });
});
