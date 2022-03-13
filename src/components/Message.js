import React, { Component } from 'react'

export default class Message extends Component {
    changeMessage() {
        this.setState({
            message : 'thanks for subs'
        })
    }

     newMessage = () => {
        this.setState ({
            message : "new messg"
        })
    }
    constructor() {
        super()
        this.state ={
            message : "Welcome visitor"
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
            <button onClick={()=>this.changeMessage()}>Subscribe</button> 
            <button onClick={()=>this.newMessage()}>new mess</button>              
            </div>
        )
    }
}
