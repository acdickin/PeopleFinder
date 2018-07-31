import React, { Component } from 'react'
import ReactLoading from 'react-loading'

class Loading extends Component {
  render(){
    return(
      <ReactLoading className={"load"} type={"spinningBubbles"} color={"grey"} height={'15%'} width={'15%'} margin={"0 auto"} />
    )
  }
}

export default Loading;
