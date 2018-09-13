import React from 'react';
import { shallow, mount } from 'enzyme';
import { wrap } from 'module';
import EachDay from './EachDay';


const getWeather = require('./weather-api').getWeather
var data;

describe('App', () => {
  let wrapper
  beforeEach(async () => {
    data = await getWeather('Denver', 'CO')
    wrapper = shallow( <EachDay data={data} index={0} counter={0}/> )
  })

  it('should exist', () => {
   
    expect(wrapper).toBeDefined();
  })

  it('should render the TenDay and EachDay components', async () => {
    expect(wrapper.find('article').children().length).toBe(5);

  })

  it  ('should accept prop of data', async () => {
    expect (wrapper.instance().props.data).toEqual(data)
  })

})