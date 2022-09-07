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
                    <p className="mb-5 text-base">
                            Welcome to the Pamantasan ng Cabuyao Café Reservation System, may your tummies be always full! We’re dedicated to provide you the very best service that you’ve ever had, with the intention to shorten the lines in the cafeteria during this pandemic times. Founded in 2021 by Diana May Ardeza, Adrian Nads Marcelo, RC Khaye Suelo and Alyana Pornelosa has come a long way from its beginning in a small outlet outside the Pamantasan ng Cabuyao. When the founders first started out, their passion for providing foods and service to the people drove them do intense research and plan to build such cafeteria. This gave them impetus to turn hard work and inspiration into a booming Café Reservation System. We now serve customers all over the Pamantasan ng Cabuyao.          
                            We hope you enjoy our products and service as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us!
                    </p> 
                </div>

                <div>
                   <h1 className="mb-5 text-5xl font-bold text-pncHover">
                        Meet Our Leaders
                    </h1> 

                    <div className="flex flex-col lg:flex-wrap lg:flex-row gap-3 lg:gap-12 justify-evenly">
                        
                        <AboutLeader name="Diana May S. Ardeza" imagePath="../../assets/Leader2Ardeza.jpg" description="She is Diana from Australia. She took Civil Engineering in her first study and took an Information Assurance degree on Yale at Perth, Australia."/>

                        <AboutLeader name="Adrian Nads L. Marcelo" imagePath="../../assets/Leader3Marcelo.jpg" description="He is Adrian Nads from Ontario, Canada. He studied Computer Science at Pamantasan ng Cabuyao, and a Web Developer for almost 7 years. He also took a bootcamp at Caprisa College for SEO."/>

                        <AboutLeader name="RC Khaye B. Suelo" imagePath="../../assets/Leader1Suelo.jpg" description="She is RC Khaye from Switzerland. She studied Computer Science at Pamantasan ng Cabuyao, and took a Web Design bootcamp at Queensland, Australia."/>
                        
                        <AboutLeader name="Alyana G. Pornelosa" imagePath="../../assets/Leader4Pornelosa.jpg" description="She is Alyana from Ontario, Canada. She studied Computer Science at Pamantasan ng Cabuyao, and a Frontend Developer for almost 5 years and also studied Web Design at Caprisa College in Canada."/>
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
