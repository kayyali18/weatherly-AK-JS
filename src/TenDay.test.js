import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';
import { wrap } from 'module';


const getWeather = require('./weather-api').getWeather

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

  it  ('should accept prop of data', async () => {
    let data = await getWeather('Denver', 'CO')
    wrapper = shallow( <TenDay data={data}/> )
    expect (wrapper.instance().props.data).toEqual(data)
  })

})
