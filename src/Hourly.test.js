import React from 'react';
import { shallow, mount } from 'enzyme';
import { wrap } from 'module';
import Hourly from './Hourly';


const getWeather = require('./weather-api').getWeather

describe('App', () => {
  let wrapper
  let wrapperMounted 
  beforeEach(() => {
    wrapper = shallow( <Hourly /> )
    // wrapperMounted = mount (<App />)
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the Current and Hourly components', () => {
    expect(wrapper.find('EachHour').length).toBe(7) 
  })

  it  ('should accept prop of data', async () => {
    let data = await getWeather('Denver', 'CO')
    wrapper = shallow( <Hourly data={data}/> )
    expect (wrapper.instance().props.data).toEqual(data)
  })

})
