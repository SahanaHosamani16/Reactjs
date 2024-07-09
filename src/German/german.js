import React, { Component } from 'react'

export default class German extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         description:"German"
      }
    }
  render() {
    
    return (
      <div>
       <img src="german.png" alt="German Flag" width="250" height="180"/>
                
          
            <h1>{this.state.description}</h1>
      </div>
    )
  }
}
