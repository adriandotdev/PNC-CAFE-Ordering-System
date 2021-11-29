import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function ProfileIcon() {

    const {isUser, userIDNumber} = useContext(UserContext)
    const [image, setImage] = useState('')

    useEffect(() => {

        console.log('Running in profile Icon') // for testing
        let idNumber =  sessionStorage.getItem('idNumber');

        fetch('http://localhost:3001/user-id', {
            method: 'POST',
            headers: {'Content-Type': 'application/'},
            body: JSON.stringify({userIDNumber: '1900120'})
        })
        .then(res => res.json())
        .then(data => console.log(data))

    })
    return (
        <>
            {
                isUser &&
                    <section className="avatar flex items-center">
                        <div className="mb-8 rounded-full w-12 h-12" >
                             <img src="../../assets/NadsImage.jpg" alt="" />
                        </div>
                    </section>
            }
        </>
    )
}

export default ProfileIcon
