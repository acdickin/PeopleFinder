import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../components/Results'
import Loading from '../components/Loading'
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
import {results} from './api.json'

let getApiData=jest.fn();

let initalState=[
  {"name":"FirstName", "value":"Andrew","pristine":false, "placeholder":"eg John"},
  {"name":"LastName", "value":"Dickinson","pristine":false, "placeholder":"eg Smith"},
  {"name":"State", "value":"WA", "pristine":false, "placeholder":"eg MI"}
]
describe("Results",()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const updateSubmitted = jest.fn();
    ReactDOM.render(<Results isSubmitted={true} inputData={initalState} updateSubmitted={updateSubmitted} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it("should show loading screen when api data is being retrived",()=>{
    const wrapper=mount (<Results />)
    wrapper.setState({loading:true})
    expect(wrapper.find('.load').length).toEqual(2)
    wrapper.unmount();
  })
  it("should data in result class",()=>{
    const wrapper=mount (<Results />)
    wrapper.setState({apiData:results, loaded:true})
    expect(wrapper.html()).toEqual('<div><div class=\"result\"><h4>Result 1</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:10416 E BROADWAY AVE</p><p>City:SPOKANE VALLEY</p><p>State:WA</p></div><div class=\"result\"><h4>Result 2</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:14012 NE 333rd St</p><p>City:Battle Ground</p><p>State:WA</p></div><div class=\"result\"><h4>Result 3</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:338 W Astor Ave</p><p>City:Colville</p><p>State:WA</p></div><div class=\"result\"><h4>Result 4</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:PO Box 4058</p><p>City:Silverdale</p><p>State:WA</p></div><div class=\"result\"><h4>Result 5</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:22226 133RD ST E</p><p>City:BONNEY LAKE</p><p>State:WA</p></div><div class=\"result\"><h4>Result 6</h4><p>Firstname:ANDREA</p><p>LastName:DICKINSON</p><p>Address:707 NW 16TH ST</p><p>City:BATTLE GROUND</p><p>State:WA</p></div><div class=\"result\"><h4>Result 7</h4><p>Firstname:ANDREA</p><p>LastName:DICKINSON</p><p>Address:5457 PARK PLACE LOOP SE</p><p>City:LACEY</p><p>State:WA</p></div><div class=\"result\"><h4>Result 8</h4><p>Firstname:ANDY</p><p>LastName:DICKINSON</p><p>Address:233 MARKO RD</p><p>City:ONALASKA</p><p>State:WA</p></div><div class=\"result\"><h4>Result 9</h4><p>Firstname:A</p><p>LastName:DICKINSON</p><p>Address:1156 ABERDEEN AVE NE</p><p>City:RENTON</p><p>State:WA</p></div><div class=\"result\"><h4>Result 10</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:3056 Maple Ave</p><p>City:Oakland</p><p>State:CA</p></div><div class=\"result\"><h4>Result 11</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:1588 Arrowroot Pl</p><p>City:Oviedo</p><p>State:FL</p></div><div class=\"result\"><h4>Result 12</h4><p>Firstname:ANDREW</p><p>LastName:DICKINSON</p><p>Address:5501 Huron Hills Dr Apt 91</p><p>City:Commerce Twp</p><p>State:MI</p></div><div class=\"result\"><h4>Result 13</h4><p>Firstname:ALBERT</p><p>LastName:DICKINSON</p><p>Address:4084 Cove West Dr</p><p>City:Moses Lake</p><p>State:WA</p></div></div>');
    wrapper.unmount();
  })
})


// inputData={inputData} isSubmitted={isSubmitted} updateSubmitted={this.getSubmitted.bind(this)}
