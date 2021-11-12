import React from 'react'

function Label({props}) {
    return (
        <>
            <label className="input-label" htmlFor={props.name}>{props.labelContent}</label>
        </>
    )
}

export default Label
