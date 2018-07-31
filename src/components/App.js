import React, { Component } from 'react'
import Searchbar from "./Searchbar"
import Results from "./Results"
import Errors from"./Errors"

class App extends Component {
  constructor() {
     super();
     this.state = ({
       inputData:initalState,
       isDisabled:true,
       isSubmitted:false
     });
  }
  getInputData(newData){
    this.setState({inputData:newData})
  }
  getError(error){
    this.setState({isDisabled:error})
  }
  getSubmitted(submitted){
    this.setState({isSubmitted:submitted })
  }
  render() {
    let {inputData, isDisabled , isSubmitted} = this.state
    return (
      <div className="App">
        <div id="header"><h2>Welcome to Versium People Search</h2></div>
        <Searchbar inputData={inputData} isDisabled={isDisabled} updateInputData={this.getInputData.bind(this)}  updateSubmitted={this.getSubmitted.bind(this)}/>
        <Errors errors={isDisabled} inputData={inputData} updateError={this.getError.bind(this)}/>
        <Results inputData={inputData} isSubmitted={isSubmitted} updateSubmitted={this.getSubmitted.bind(this)}/>
      </div>
    );
  }
}

export default App;

let initalState=[
  {"name":"FirstName", "value":"","pristine":true, "placeholder":"eg John"},
  {"name":"LastName", "value":"","pristine":true, "placeholder":"eg Smith"},
  {"name":"State", "value":"", "pristine":true, "placeholder":"eg MI"}
]
