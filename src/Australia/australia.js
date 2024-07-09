import React, { Component } from 'react'

export default class Australia extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        description:"Australia"
      }
    }
  render() {
    return (
      <div>
        <img src="australia.png" alt="Australia Flag" width="200" height="150"/>
                
           
        <h1>{this.state.description}</h1>
      </div>
    )
  }
}
