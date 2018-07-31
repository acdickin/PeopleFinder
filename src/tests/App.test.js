import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'
import  Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

let initalState=[
  {"name":"FirstName", "value":"a","pristine":false, "placeholder":"eg John"},
  {"name":"LastName", "value":"a","pristine":false, "placeholder":"eg Smith"},
  {"name":"State", "value":"an", "pristine":false, "placeholder":"eg MI"}
]

describe('App',()=>{
  var getInputData =jest.fn()
  var getError =jest.fn()
  var getSubmitted =jest.fn()

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
