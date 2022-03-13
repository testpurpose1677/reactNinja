import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        const {val , name} = this.props;
        return (
            <div>
            {val} +++++ {val} ****
                welcome class {this.props.val} 
                <p> {this.props.name}</p>
            </div>
        )
    }
}
