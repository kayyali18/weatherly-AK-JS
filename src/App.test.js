import React from 'react';
import { shallow, mount } from 'enzyme';
// import App from './App';
// import Current from './Current';
import TenDay from './TenDay';
import EachDay from './EachDay';

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
    expect(wrapper.find(EachDay)).to.have.lengthOf(1) 
    console.log (wrapper.find(EachDay)) 
  }) 

})

