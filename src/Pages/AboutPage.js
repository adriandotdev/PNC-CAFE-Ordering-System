import React from 'react'
import bgImage from '../Images/Buildings 2.png'
function AboutPage() {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col-reverse justify-start lg:grid lg:place-content-center lg:w-full lg:h-screen">
            <img className="block h-1/2 lg:h-auto lg:w-full object-cover" src={bgImage} alt="" />

            <div className="lg:block lg:absolute  lg:w-full lg:h-screen lg:bg-black  lg:bg-opacity-20 hidden"></div>
            <div className="lg:w-2/3 md:p-8 flex flex-col gap-4 justify-center items-center lg:items-start p-2 h-1/2 lg:h-full  lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">

                <section className="flex flex-col gap-3">
                    <h1 className="stroke-1 text-xl text-pncHover font-bold lg:text-6xl pb-3 border-b border-pnc text-center lg:text-left">ABOUT PNC CAFE</h1>
                    <p className="lg:text-white md:text-xl font-medium text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque cum ipsa culpa, quisquam eveniet similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis atque aliquam a recusandae accusamus!</p>
                </section>

                <footer>
                    <p className="text-black lg:text-white font-medium">All Rights Reserved &copy; 2021.</p>
                </footer>
            </div>
        </div>
    )
}

export default AboutPage
