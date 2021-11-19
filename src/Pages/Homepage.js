import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../contexts/UserContext'
import MenuInfoModal from '../components/MenuInfoModal'

function Homepage() {

    const [menu, setMenu] = useState([])
    const [,,, setMenuID] = useContext(UserContext)

    useEffect(() => {

        fetch('http://localhost:3001/get-menu')
        .then(res => res.json())
        .then(data => setMenu(JSON.parse(data)))
    }, [])

    return (
        
        <div className="grid grid-auto-rows w-full">

            <div className="flex flex-wrap justify-center md:justify-start items-start gap-10 py-5 md:p-5">
                {
                    menu.map(prod => {
                        return (
                            <label key={prod['menu_id']}  onClick={() => setMenuID(prod['menu_id'])} htmlFor="menu-info-modal" className="card w-64 lg:max-w-xs lg:w-full max-h-full shadow-md modal-button cursor-pointer transform hover:-translate-y-1 transition-all"> 
                                <figure>
                                    <img src={`../../assets/${prod['image_path']}`} alt="photo of adobo" />
                                </figure>
                                <div className="card-body">
                                    
                                    <section className="flex items-center flex-wrap gap-5">
                                        <h2 className="card-title font-bold text-2xl">{prod.menu}</h2>
                                        <section className="badge bg-pnc border-none">
                                            <p>Available</p>
                                        </section>
                                    </section>
                                    
                                    <p className="menu-desc">{prod['menu_desc']}</p>
                                    <small className="text-3xl">${prod['menu_price']}</small>
                                </div>
                            </label>
                        )
                    })
                }
                <MenuInfoModal />
            </div>
        </div>
        
    )
}

export default Homepage
