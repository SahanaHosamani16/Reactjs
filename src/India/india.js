import React, { Component } from 'react'

export default class 
India extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         description:"India"
      }
    }
  render() {
    return (
      <div>
        
      
                <img src="india.png" alt="India Flag" height="150" width="200"/>
               
            <h1>{this.state.description}</h1>
      </div>
    )
  }
}
