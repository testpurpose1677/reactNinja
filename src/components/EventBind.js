import React, { Component } from 'react'
// how even binding happens this keyword explained 

export class EventBind extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            mssg : 'hello'
        }
     this.clickHandler2 = this.clickHandler2.bind(this);

    }
    clickHandler() {
        this.setState({
            mssg : 'bye'
        })
        
    }

    clickHandler1() {
        this.setState({
            mssg : 'bye1'
        })
        
    }

    clickHandler2() {
        this.setState({
            mssg : 'bye3'
        })
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.mssg}</h1>
                 <button onClick={this.clickHandler.bind(this)}>Click</button>
                <button onClick={() => this.clickHandler1()}>click</button>
                <button onClick={this.clickHandler2}>click 3</button>
            </div>
        )
    }
}

export default EventBind
