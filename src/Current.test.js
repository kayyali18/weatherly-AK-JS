import React from 'react';
import { shallow, mount } from 'enzyme';
import { wrap } from 'module';
import Current from './Current';


const getWeather = require('./weather-api').getWeather

describe('App', () => {
  let wrapper
  let wrapperMounted 
  beforeEach(async () => {
    let data = await getWeather('Denver', 'CO')
    wrapper = shallow( <Current data={data}/> )
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the Current and Hourly components', async () => {
    let data = await getWeather('Denver', 'CO')
    wrapper = shallow( <Current data={data}/> )
    // expect(wrapper.find('.current-weather').length).toBe(5) 
    expect(wrapper.find('article').children().length).toBe(5);

  })

  it  ('should accept prop of data', async () => {
    let data = await getWeather('Denver', 'CO')
    wrapper = shallow( <Current data={data}/> )
    expect (wrapper.instance().props.data).toEqual(data)
  })

})
