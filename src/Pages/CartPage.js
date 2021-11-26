import React, {useEffect} from 'react'
import QuantityButton from '../components/QuantityButton'

function CartPage() {

    useEffect(() => {
        
    })
    return (
        <>
            {
                <div className="flex flex-col gap-10 items-center py-5 p-2 w-screen">

                    <h1 className="self-start w-max mx-auto text-3xl md:text-4xl font-bold text-pnc">My Cart</h1>
                    <div class="md:max-w-lg flex  flex-col w-full bg-gray-400 ">
                        
                        <div className="w-full flex p-2 h-max ">
                            {/* img */}
                            <section className="w-32 h-full flex items-center gap-1 flex-shrink-0 flex-grow mr-6">
                                <input className="checkbox" type="checkbox" name="" id="" />
                                <img className="h-max" src="../../assets/Adobo.jpg" alt="" />
                            </section>

                            {/* details */}
                            <section className="w-full flex flex-col gap-2">
                                {/* Title, Description and x button */}
                                <div className="flex justify-between">
                                    <section>
                                        <h1 className="cart-menu-title">Adobo</h1>
                                        {/* <small>w/ Hamburger</small> */}
                                    </section>
                                    <section>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </section>
                                </div>
                                <section className="flex justify-between flex-wrap">
                                    <h1>
                                        $30.00
                                    </h1>
                                    <QuantityButton />
                                </section>
                            </section>
                        </div>
                    </div>
                    
                </div>
            }
        </>
    )
}

export default CartPage
