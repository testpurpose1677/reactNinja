import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            parentName : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);

    }
    greetParent(childx) {
        alert(`hello ${this.state.parentName} ${childx}`);

    }
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}
