import React from 'react'
import AboutLeader from '../components/AboutLeader'
// import bgImage from '../../ass'
function AboutPage() {
    return (
        <div className="hero min-h-full overflow-hidden" style={{backgroundImage: `url('../../assets/about-bg.jpg')` }}>
            <div className="hero-overlay bg-opacity-60"></div> 
            <div className="text-center hero-content flex-col lg:gap-14 text-neutral-content w-screen">
                <div className="max-w-full">
                    <h1 className="mb-5 text-5xl font-bold text-pncHover">
                        About PNC Cafe
                    </h1> 
                    <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quidem voluptatum error expedita natus deserunt, sit facere, iure optio qui voluptas consequuntur labore minus est aperiam minima aliquid repudiandae. Facere sapiente ducimus explicabo perferendis natus reprehenderit quis impedit exercitationem, enim ullam recusandae incidunt velit quae, quidem porro praesentium cum nulla?
                    </p> 
                </div>

                <div>
                   <h1 className="mb-5 text-5xl font-bold text-pncHover">
                        Meet Our Leaders
                    </h1> 

                    <div className="flex flex-col lg:flex-wrap lg:flex-row gap-3 lg:gap-12 justify-evenly">
                        
                        <AboutLeader name="Diana May S. Ardeza" imagePath="../../assets/Leader2Ardeza.jpg" description="Hola! Me Llamo Ardeza. Mucho Gusto! soy estudiante de ingeniería civil and I speak ABC."/>
                        <AboutLeader name="RC Khaye B. Suelo" imagePath="../../assets/Leader1Suelo.jpg" description="Hola! Me Llamo Suelo.  Soy un estudiante de ciencias de la computación, and I speak ABC."/>
                        <AboutLeader name="Adrian Nads L. Marcelo" imagePath="../../assets/Leader3Marcelo.jpg" description="Hola! Me Llamo Marcelo. Soy De Pilipinas. Mucho Gusto! Soy un estudiante de ciencias de la computación and I speak ABC."/>
                    </div>
                </div>

                <footer>
                    <p className="font-medium">All Rights Reserved</p>
                    <p className="font-medium">Copyright &copy; 2021</p>
                </footer>
            </div>
        </div>
    )
}

export default AboutPage
