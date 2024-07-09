import React, { Component } from 'react'

export default class Salary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        salary:"30000"
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.salary}</h1>
      </div>
    )
  }
}
