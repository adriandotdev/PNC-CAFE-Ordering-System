import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function ProfileIcon() {

    const {isUser, userIDNumber, isEditingDone} = useContext(UserContext)
    const [image, setImage] = useState('')

    useEffect(() => {

        if (isUser) {

            fetch('http://localhost:3001/user-id', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userIDNumber})
            })
            .then(res => res.json())
            .then(data => setImage(JSON.parse(data)[0].profile_image_path))
        }

    }, [isUser, isEditingDone])

    return (
        <>
            {
                isUser &&
                    <Link to="/profile" className="avatar flex justify-center items-center h-max">
                        <div className="rounded-full border-2 border-white w-12 h-12" >
                             <img src={image !== 'none' ? `../../assets/${image}` : `../../assets/UserDefaultPhoto.png`} alt="" />
                        </div>
                    </Link>
            }
        </>
    )
}

export default ProfileIcon
