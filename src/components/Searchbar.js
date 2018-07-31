
import React, { Component } from 'react'
class Searchbar extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let {name, value} =e.target
    let {inputData} =this.props
    let newData= inputData.map(el=>{
      if (el.name===name){
        return Object.assign({},el, {value:value, pristine:false})
      }
      return el
    })
    this.props.updateInputData(newData)
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.updateSubmitted(true)
  }

  renderForm(){
    let form=  this.props.inputData.map((value,i)=>{
      return(
        <div key={value.name}> {value.name} :
          <input  id={i} className={value.name} type="text" name={value.name} onChange={this.handleChange} value={value.value}  placeholder={value.placeholder}/>
        </div>
      )
    })
    return form
  }
  render(){
    let {isDisabled}=this.props
    return(
        <form id="searchbar" onSubmit={this.handleSubmit} >
          {this.renderForm()}
          <div ><button disabled={isDisabled ? "disabled" : false}>submit</button></div>
        </form>
    )
  }
}
export default Searchbar;
