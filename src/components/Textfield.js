import React from 'react'

function Textfield({props, value, onChange}) {
    return (
        <>
            <input value={value} onChange={onChange} 
            className="input border border-pnc focus:ring-1 focus:ring-pnc" 
            type={props.type} name={props.name} 
            id={props.name} 
            placeholder=" " 
            required/>
        </>
    )
}

export default Textfield
