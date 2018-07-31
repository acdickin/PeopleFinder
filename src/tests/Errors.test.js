import React from 'react';
import ReactDOM from 'react-dom';
import Errors from '../components/Errors'
import  Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const State=[
  {"name":"FirstName", "value":"","pristine":true, "placeholder":"eg John"},
  {"name":"LastName", "value":"","pristine":true, "placeholder":"eg Smith"},
  {"name":"State", "value":"", "pristine":true, "placeholder":"eg MI"}
]
let changedState=State;

const updateError = jest.fn();
describe("Errors ",()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Errors errors={false} inputData={State} updateError={updateError} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Gave state no value but no longer pristine

  it('gives error messages when elements value is empty', () => {
    changedState[0].pristine=false;
    const wrapper = mount(
      <Errors inputData={changedState} updateError={updateError}/>
    );
    expect(wrapper.html()).toEqual('<div class="errors"><span class="error">FirstName is blank. </span></div>');
    wrapper.unmount();
  });

  //Gave state a value with a non alphabet character

  it('gives error messages when elements values contain non-alphabet characters',()=>{
    changedState[0].value="@hi";
    const wrapper = mount(
      <Errors inputData={changedState} updateError={updateError}/>
    );
    expect(wrapper.html()).toEqual('<div class="errors"><span class="error">FirstName contains non letters. </span></div>');
    wrapper.unmount();
    //remove error realted to value 1
    changedState[0].value="hi"
  });

  describe("should check Length of state",()=>{

      test('text is less then two letters',()=>{
        //reset changedState
        changedState=State;
        changedState[2].value="M"
        changedState[2].pristine=false
        const wrapper = mount(
          <Errors inputData={changedState} updateError={updateError}/>
        );
        expect(wrapper.html()).toEqual('<div class="errors"><span class="error">State should be two letters. </span></div>');
        wrapper.unmount();

      })
      test('text is more then two letters',()=>{
        changedState[2].value="Mii"
        const wrapper = mount(
          <Errors inputData={changedState} updateError={updateError}/>
        );
        expect(wrapper.html()).toEqual('<div class="errors"><span class="error">State should be two letters. </span></div>');
        wrapper.unmount();
      })
      test('text is two letters',()=>{
        changedState[2].value="Mi"
        const wrapper = mount(
          <Errors inputData={changedState} updateError={updateError}/>
        );
        expect(wrapper.html()).toEqual('<div class="errors"></div>');
        wrapper.unmount();
      })
  })


    describe("should check if all value are valid and filled",()=>{
      changedState[1].value="Smith"
      changedState[2].value="MI"
      changedState[1].pristine=false;
      changedState[2].pristine=false;


      it ("should give no errors and send value to app compontent",()=>{
        const wrapper = mount(
          <Errors inputData={changedState} updateError={updateError}/>
        );
        expect(wrapper.html()).toEqual('<div class="errors"></div>');
        wrapper.unmount();
      })
    })

  describe("should check Length of state",()=>{
    it('gives error messages when state is not two letters',()=>{
      test('text is less then two letters',()=>{
        const text="M"
        expect(text).not.toHaveLength(2)
      })
      test('text is more then two letters',()=>{
        const text="Mich"
        expect(text).not.toHaveLength(2)
      })
      test('text is two letters',()=>{
        const text="MI"
        expect(text).toHaveLength(2)
      })
    })
  })
  describe("should give errors if there are non-alphabet characters",()=>{
    it('gives error messages when elements values contain non-alphabet characters',()=>{
      let reg=  /^[a-zA-Z]+$/
      test('text should not have numbers',()=>{
        const text="4ndr3w"
        expect(!reg.test(text)).toBeTruthy()
      })
      test('text should not have symbols',()=>{
        const text="@ndr>w"
        expect(!reg.test(text)).toBeTruthy()
      })
      test('text is more then two letters',()=>{
        const text="Andrew"
        expect(expect(!reg.test(text)).toBeTruthy()).not.toBeTruthy()
      })
    })
  })
})
