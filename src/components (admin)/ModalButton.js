import React from 'react'

function ModalButton({htmlFor, className, text, onClick}) {
    return (
        <>
            <label onClick={onClick} htmlFor={htmlFor} className={className}>{text}</label>
            <input type="checkbox" name={htmlFor} id={htmlFor} className="modal-toggle" />
        </>
    )
}

export default ModalButton
