import React, {useState, useEffect, useContext, useCallback, useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

function Homepage() {

    let navigate = useNavigate()
    const [menu, setMenu] = useState([])
    const {userIDNumber, setUserIDNumber, setMenuID, noOfCartItems, setNoOfCartItems, addedToCart, setAddedToCart, isUser, setUser} = useContext(UserContext)

    
    
    /** Whenever this page gets rendered, 
     * It will fetch all of the menus and render 
     * it to the page. */
    useEffect(() => {
        console.log('rendered')
        const controller = new AbortController();
        const signal = controller.signal;

        setAddedToCart(false)
        
        let id_number = sessionStorage.getItem('idNumber')

        if (id_number) {
            setUserIDNumber(id_number);
            setUser(true)
        }
        fetch('http://localhost:3001/get-menu', {signal: signal})
        .then(res => res.json())
        .then(data => setMenu(JSON.parse(data)))
        .catch(err => {
            if (err.name === 'AbortError')
                console.log('Successfully Aborted')
        })

        // This will abort the fetch request of data.  
        return () => controller.abort()
    }, [])

    return (
        <>
        { isUser && <div>   
                <div className="grid grid-auto-rows w-full place-content-center md:p-5 md:pl-12">

                <h1 className="text-center text-2xl py-5 md:pl-12 md:pt-2 self-start md:text-left md:py-0 lg:text-4xl text-pnc font-bold">Today's Menu</h1>

                <div className="flex flex-wrap justify-center md:justify-start items-start gap-10 py-2 md:p-12">
                    {
                        menu.map(prod => {
                            return (prod['status'] === '1' &&
                                <label key={prod['menu_id']}  onClick={() => {

                                                setMenuID(prod['menu_id'])
                                                window.sessionStorage.setItem('menuID', `${prod['menu_id']}`)
                                                navigate(`/menu:${prod['menu_id']}`)

                                            }} className="card w-64 h-max lg:max-w-xs lg:w-full lg:h-44 shadow-md modal-button cursor-pointer transform hover:-translate-y-1 transition-all bg-repeat-y"> 

                                    {/* MENU IMAGE */}
                                    <figure className="home-figure ">
                                        <img className="" src={`../../assets/${prod['image_path']}`} alt={`${prod['image_path']}`} />
                                    </figure>

                                    {/* Menu Content */}
                                    <div className="card-body backdrop-filter backdrop-opacity-5 absolute z-20">
                                        
                                        <section className="flex justify-center flex-col gap-5">

                                            {/* Menu */}
                                            <h2 className="card-title font-bold text-2xl text-white">{prod.menu}</h2>

                                            {/* Availability Badge */}
                                            <section className="badge bg-pnc border-none">
                                                <p>Available</p>
                                            </section>
                                        </section>
                                        
                                        {/* Price */}
                                        <p className="text-3xl text-white font-bold">${prod['menu_price']}</p>
                                    </div>
                                </label>
                            )
                        })
                    }
                    {/* <MenuInfoModal /> */}
                </div>
            </div>    
        </div> }
        </>
        
    )
}

export default Homepage
