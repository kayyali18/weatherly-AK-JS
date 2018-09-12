import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';

describe('App', () => {
  let wrapper
  let wrapperMounted 
  beforeEach(() => {
    wrapper = shallow( <TenDay /> )
    // wrapperMounted = mount (<App />)
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the Current and Hourly components', () => {
    expect(wrapper.find('EachDay').length).toBe(10) 
  })

  it ('should look like a potato', () => {
    console.log (true)
  })

})
