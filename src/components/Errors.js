
import React, { Component } from 'react'
class Errors extends Component {

  renderErrors(){
    let reg=  /^[a-zA-Z]+$/
    //looks for errors with any of the values
    let numError=0
    let {inputData}=this.props
    let error=inputData.map((value)=>{
      if(!value.pristine){
        if(value.value===""){
          return <span key={value.name} className="error">{value.name} is blank. </span>
        }
        else if(value.name==="State" && value.value.length!==2){
          return <span key={value.name} className="error">State should be two letters. </span>
        }
        else if(!reg.test(value.value)){
          return <span key={value.name} className="error">{value.name} contains non letters. </span>
        }
        else if(value.pristine===false){
          numError++
        }
      }
    })

    // Updates props when necessary
    if(numError===3 && this.props.errors===true){
      this.props.updateError(false)
    }else if (numError!==3 && this.props.errors!==true){
      this.props.updateError(true)
    }
    return(error)
  }

  render() {
    return(
      <div className="errors" >
        {this.renderErrors()}
      </div>
    )
  }
}
export default Errors;
