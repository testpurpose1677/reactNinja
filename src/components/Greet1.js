import React from 'react'

function Greet() {
    return (
        <div>
            Hello greet component   
        </div>
    )
}
export const Greet1 = props => { 
    console.log(props);
   return <h1>hello greet to {props.name} +++ {props.level} --- {props.children}</h1>
}

    