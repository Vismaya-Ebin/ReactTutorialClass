import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
              <h2>I am Todo Compnent{this.props.sendingData}</h2>  
            </div>
        )
    }
}
