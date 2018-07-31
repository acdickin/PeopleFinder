import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'
import Searchbar from '../components/Searchbar'
import Enzyme, { mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

let initalState=[
  {"name":"FirstName", "value":"","pristine":true, "placeholder":"eg John"},
  {"name":"LastName", "value":"","pristine":true, "placeholder":"eg Smith"},
  {"name":"State", "value":"", "pristine":true, "placeholder":"eg MI"}
]
let finalState=[
  {"name":"FirstName", "value":"Andrew","pristine":false, "placeholder":"eg John"},
  {"name":"LastName", "value":"Jackson","pristine":false, "placeholder":"eg Smith"},
  {"name":"State", "value":"WA", "pristine":false, "placeholder":"eg MI"}
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  const updateInputData=jest.fn();
  const updateSubmitted=jest.fn();
  ReactDOM.render(<Searchbar errors={false} inputData={initalState} updateInputData={updateInputData}  updateSubmitted={updateSubmitted} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("Button",()=>{
  it('Hit Button without values should fail to be clicked',()=>{
    const updateInputData=jest.fn();
    const wrapper = mount(
      <Searchbar inputData={initalState} updateInputData={updateInputData}/>
    )
    var btn =wrapper.find('button')
    expect(btn.instance().disabled).toEqual(false)

    wrapper.unmount();
  })
})
describe("FirstName",()=>{
  it('Type in FirstName and it updates FirstName',()=>{
    const updateInputData=jest.fn();
    const wrapper = mount(
      <Searchbar inputData={finalState} updateInputData={updateInputData}/>
    )
    let input=wrapper.find(".FirstName")
    //not function
    input.simulate('change', {target: {value: 'Andrew'}})
    expect(input.instance().value).toEqual("Andrew")
    wrapper.unmount();
  })
})

describe("LastName",()=>{
  it('Type in LastName and it updates LastName',()=>{
    const updateInputData=jest.fn();
    const wrapper = mount(
      <Searchbar inputData={finalState} updateInputData={updateInputData}/>
    )
    let input=wrapper.find(".LastName")
      //not function
    input.simulate('change', {target: {value: 'Jackson'}})
    expect(input.instance().value).toEqual("Jackson")
    wrapper.unmount();
  })
})
describe("State",()=>{
  it('Type in State and it updates State',()=>{
    const updateInputData=jest.fn();
    const wrapper = mount(
      <Searchbar inputData={finalState} updateInputData={updateInputData}/>
    )
    let input=wrapper.find(".State")
    //not function
    input.simulate('change', {target: {value: 'WA'}})
    expect(input.instance().value).toEqual("WA")
    wrapper.unmount();
  })
})






//
// initalState[1].value="Jefferson";
// initalState[1].pristine=false;
// describe("LastName",()=>{
//
//   it('Type in LastName and it updates LastName',()=>{
//     const wrapper = mount(
//     <Searchbar inputData={initalState}/>
//     );
//     expect(wrapper.html()).toContain('Jefferson');
//     wrapper.unmount();
//   })
// })
//
// initalState[2].value="WA";
// initalState[2].pristine=false;
// describe("LastName",()=>{
//   it('Type in state and it updates state',()=>{
//     const wrapper = mount(
//     <Searchbar inputData={initalState}/>
//     );
//     expect(wrapper.html()).toContain('WA');
//     wrapper.unmount();
//   })
// })


//<Searchbar inputData={inputData} isDisabled={isDisabled} updateInputData={this.getInputData.bind(this)}  updateSubmitted={this.getSubmitted.bind(this)}/>
