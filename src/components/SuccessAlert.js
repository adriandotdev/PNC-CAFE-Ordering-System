import React from 'react'

function SuccessAlert({alertMessage}) {
    return (
        <div className="w-full alert flex-row justify-start gap-3 alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
                <h1>{alertMessage}</h1>
            </div>
        </div>
    )
}

export default SuccessAlert
