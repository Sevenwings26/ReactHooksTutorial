import React, { Component } from 'react'

class StateProps extends Component {
    constructor(props) {
      super(props)
      this.state = {
         first: props.name
      }
    }
  render() {
    return (
      <div>StateProps {this.props.name}</div>
    )
  }
}

export default StateProps