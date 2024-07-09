import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sahana",
        
      }
    }
  render() {
   
    return (
    
      <div>
        <h1>{this.state.name}</h1>
 
      </div>
    )
  }
}
