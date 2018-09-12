import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';
import EachDay from './EachDay';

describe('App', () => {
  let wrapper
  let wrapperMounted 
  beforeEach(() => {
    wrapper = shallow( <TenDay state='CO' city='Denver'/> )
    // wrapperMounted = mount (<App />)
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the Current and Hourly components', () => {
    expect(wrapper.find(EachDay)).to.have.lengthOf(1) 
    console.log (wrapper.instance.props()) 
  }) 

})

