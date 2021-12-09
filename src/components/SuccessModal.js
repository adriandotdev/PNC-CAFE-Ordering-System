import React from 'react'

/** This is the success modal.
 * 
 * What it does is it will show up
 * if the admin is done updating a
 * specific order. */
function SuccessModal({isUpdateDone}) {
    return (
        <>
            <input checked={isUpdateDone} type="checkbox" className="modal-toggle z-20" id="success-modal" />
            <div className="modal">
                <div className="modal-box">
                    <p className="text-pnc font-bold text-2xl">{"Status updated successfully."}</p>
                </div>
            </div>
        </>
    )
}

export default SuccessModal
