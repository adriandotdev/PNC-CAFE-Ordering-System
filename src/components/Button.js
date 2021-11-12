import React from 'react'

function Button({className, text}) {
    return (
        <div>
            <button className={className}>{text}</button>
        </div>
    )
}

export default Button
