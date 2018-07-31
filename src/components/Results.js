import React, { Component } from 'react'
import Loading from './Loading'
import axios from 'axios'

class Results extends Component {

  constructor(props){
    super(props)
    this.state=({errors:null,loaded:false,loading:false, apiData:null, error:null})
    this.getApiData=this.getApiData.bind(this)
  }

  componentDidUpdate(){
    if(this.props.isSubmitted){
      this.setState({loading:true})
      this.setState({apiData:null})
      this.getApiData()
    }
  }
  getApiData(){
    let {inputData} = this.props
    let arr=inputData.map(val=>val.value)
    //We proxy from the root url https://api.datafinder.com in package.json, so all we need to hit is the actual end point.
    let url="/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first="+arr[0]+"&d_last="+arr[1]+"&d_state="+arr[2]
    var results

    axios.get(url, {crossDomain: true}).then(
      (res)=>{
        //since there is still on error on the main page.  I log the results
        results=res.data.datafinder.results
        this.setState({loaded:true, loading:false,apiData:results})
      })
      .catch((error)=>{
        this.setState({loaded:true, loading:false, error:error})
      })
      //
      this.props.updateSubmitted(false)
    return results
  }
  renderResults(data){
    let results
    if (data===undefined){
      return(  <h3 className="noResult">No Results</h3>)
    }
    else if(data!==null){
       results =data.map((user, i)=>{
        return(
          <div className="result" key={i+1}>
            <h4>Result {i+1}</h4>
            <p>Firstname:{user.FirstName}</p>
            <p>LastName:{user.LastName}</p>
            <p>Address:{user.Address}</p>
            <p>City:{user.City}</p>
            <p>State:{user.State}</p>
          </div>
        )
      })
    }
    return results
  }

  render(){
    let {loaded, loading,apiData, error}=this.state
    return(
      <div >
        {loading?<Loading/>:null}
        {loaded?this.renderResults(apiData):error}
      </div>
    )
  }
}
export default Results;
