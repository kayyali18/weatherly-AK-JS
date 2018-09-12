import React from 'react';
import { shallow, mount } from 'enzyme';
import { wrap } from 'module';
import EachHour from './EachHour';


const getWeather = require('./weather-api').getWeather
var data;

describe('App', () => {
  let wrapper
  let wrapperMounted 
  beforeEach(async () => {
    data = await getWeather('Denver', 'CO')
    wrapper = shallow( <EachHour data={data} index={0}/> )
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the Current and Hourly components', async () => {
    expect(wrapper.find('article').children().length).toBe(4);

  })

  it  ('should accept prop of data', async () => {
    expect (wrapper.instance().props.data).toEqual(data)
  })

})