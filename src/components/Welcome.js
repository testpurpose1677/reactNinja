import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                welcome class {this.props.val} 
                <p> {this.props.name}</p>
            </div>
        )
    }
}
