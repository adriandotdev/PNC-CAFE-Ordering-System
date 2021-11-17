import React from 'react'
import Button from '../components/Button'
import adobo from '../assets/Adobo.jpg'

function CartMenu() {
    return (
        <>
            <section className="flex items-start gap-2 mt-3 mb-3">

                {/* checkbox */}
                <section>
                    <input className="bg-accent p-3" type="checkbox" name="" id="" />
                </section>

                {/* photo */}
                <div className="avatar w-14 h-14">
                    <img src={adobo} alt=""  className="w-14 h-14"/>
                </div>

                {/* menu details and delete btn */}
                <div className="flex justify-between w-full">
                    <section>
                        <h1>Adobo</h1>
                        <p>$30.00</p>
                    </section>
                    <section>
                        <p>x3</p>
                    </section>
                    <section className="btn-group">
                        <Button className="btn btn-outline btn-sm" text="-"/>
                        <Button className="quantity" text="1" />
                        <Button className="btn btn-outline btn-sm" text="+"/>
                    </section>
                    <section>
                        <Button className="admin-delete-btn" text="remove"/>
                    </section>
                </div>
            </section> 
        </>
    )
}

export default CartMenu
