import React from 'react'

function Greet() {
    return (
        <div>
            Hello greet component   
        </div>
    )
}
export const Greet1 =(props) => {
    const {name , level} = props; 
    console.log(name);
   return <h1>hello greet to {name} +++ {level} --</h1>
}

    