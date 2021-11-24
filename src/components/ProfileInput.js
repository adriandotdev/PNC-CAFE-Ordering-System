import React from 'react'

function ProfileInput({inputDisabled, onEdit, onCancel, value, onChange, htmlFor, type}) {

    return (
        <section className="flex justify-stretch w-full gap-1 items-center">
            <input 
            disabled={type === "password" ? true : inputDisabled} 
            value={value} 
            onChange={onChange} 
            // "border border-green-400 outline-none p-2 w-full border-none"
            // "border border-green-400 outline-none p-2 w-full"
            className={type === "password" ? "border border-green-400 outline-none p-2 w-full border-none" : inputDisabled ? "border border-green-400 outline-none p-2 w-full border-none" : "border border-green-400 outline-none p-2 w-full"}
            type={type} name={htmlFor} id={htmlFor} 
            required/>

                {inputDisabled 
                
                    ?  <svg onClick={onEdit} 
                    xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                
                    :

                    <svg  onClick={onCancel} 
                    xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }
        </section>
    )
}

export default ProfileInput
