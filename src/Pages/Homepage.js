import React from 'react'
import {Nav} from 'react-router-dom'
import Button from '../components/Button'
import {menu} from '../test/menu'
import adobo from '../assets/Adobo.jpg'

function Homepage() {

    return (
        
        <div className="grid grid-auto-rows">


            <div className="flex flex-wrap justify-center gap-10 p-5">
                {
                    menu.map(prod => {
                        return (
                            <div className="card max-w-xs w-full h-auto shadow-md"> 
                                <figure>
                                    <img src={adobo} alt="photo of adobo" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-2xl">{prod.menu}</h2>
                                    {/* <section className="flex items-center flex-wrap gap-5">
                                        
                                        <section className="badge bg-pnc border-none">
                                            <p>Available</p>
                                        </section>
                                    </section> */}
                                    
                                    <p className="menu-desc">{prod.menuDesc}</p>
                                    <small className="text-3xl">${prod.price}</small>
                                    {/* <div className="card-actions">
                                        <Button className="btn" text="Add to Cart"/>
                                    </div> */}
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Homepage
