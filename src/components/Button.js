import React from 'react'

function Button({className, text, onClick}) {
    return (
        <div>
            <button onClick={onClick} className={className}>{text}</button>
        </div>
    )
}

export default Button
