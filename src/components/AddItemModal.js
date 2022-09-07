import React from 'react'

function AddItemModal() {

    // flex flex-col justify-center items-center p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pnc bg-opacity-70 


    /** TO FIX:
     * 
     * 
     * Modal must be in center
     * 
     * modal must be relative at menu info page
     */
    return (
        <>
        <input type="checkbox" id="add-item-modal" className="modal-toggle" />
        <div className="modal m-0">

            <div className="modal-box p-8 w-full lg:w-max flex flex-col gap-3 justify-center items-center bg-pnc">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-14 sm:w-14" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="font-bold text-center text-white sm:text-xl">Item successfully added to bag!</h1>
            </div>
        </div>
        </>
    )
}

export default AddItemModal
