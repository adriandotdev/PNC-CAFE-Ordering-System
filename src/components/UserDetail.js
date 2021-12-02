import React from 'react'

function UserDetail({label, value}) {
    return (
        <section>
            <p className="user-details-title">{label}</p>
            <p>{value}</p>
        </section>
    )
}

export default UserDetail
