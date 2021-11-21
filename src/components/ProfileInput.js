import React from 'react'

function ProfileInput({inputDisabled, setInputDisabled, value, setValue}) {
    return (
        <>
            <input disabled={inputDisabled} value={value} onChange={(e) => setValue(e.target.value)} className={inputDisabled ? "border border-green-400 outline-none p-2 w-full border-none" : "border border-green-400 outline-none p-2 w-full"} type="text" name="email" id="email" />

                {inputDisabled 
                
                    ?  <svg onClick={() => { 

                        setInputDisabled(false)
                    }} 
                    xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                
                    :

                    <svg  onClick={() => {

                        setInputDisabled(true)
                    }} 
                    xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }
        </>
    )
}

export default ProfileInput
