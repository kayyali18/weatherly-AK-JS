// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { wrap } from 'module';
// import App from './App';


// const getWeather = require('./weather-api').getWeather
// var data;

// describe('App', () => {
//   let wrapper
//   beforeEach( () => {
//     // data = await getWeather('Denver', 'CO')
//     wrapper = shallow( <App /> )
//   })

//   it('should exist', () => {
   
//     expect(wrapper).toBeDefined();
//   })

//   it('should render the Current and Hourly components', async () => {
//     expect(wrapper.find('div').children().length).toBe(2);

//   })

//   it  ('should accept prop of data', async () => {
//     let data = await getWeather('Denver', 'CO')
//     wrapper = shallow( <App data={data}/> )
//     expect (wrapper.instance().props.data).toEqual(data)
//   })

// })