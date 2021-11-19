import React from 'react'

function Button({className, text, onClick}, props) {
    return (
        <div>
            <button onClick={onClick} className={className}>{text}</button>
            {props.children}
        </div>
    )
}

export default Button
