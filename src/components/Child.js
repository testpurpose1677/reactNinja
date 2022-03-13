import React from 'react'

function Child(props) {
    return (
        <div>
<button onClick={() => props.greetHandler('child67')}>greet parent ( in child)</button>
        </div>
    )
}

export default Child
