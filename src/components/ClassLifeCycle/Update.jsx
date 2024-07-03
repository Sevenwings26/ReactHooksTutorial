import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'John'
        }
    }

    static getDerivedStateFromProps(){

    }


  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
