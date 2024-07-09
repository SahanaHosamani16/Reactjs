import React, { Component } from 'react'

export default class America extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        description:"America"
      }
    }
  render() {
    return (
      <div>
       <img src="america.png" alt="America Flag" width="200" height="150" />
                
          
            <h1>{this.state.description}</h1>
      </div>
    )
  }
}
