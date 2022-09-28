import React from 'react'
import AboutLeader from '../components/AboutLeader'
// import bgImage from '../../ass'
function AboutPage() {
    return (
        // style={{backgroundImage: `url('../../assets/about-bg.jpg')` }}
        <div className="hero min-h-full overflow-hidden" >
            {/* hero-overlay bg-opacity-60 */}
            <div className=""></div> 
            <div className="text-center hero-content flex-col lg:gap-14 text-neutral-content w-screen">
                <div className="max-w-full">
                    <h1 className="mb-5 text-5xl font-bold text-pncHover">
                        About Food Hub
                    </h1> 
                    <p className="mb-5 text-base text-foodHubColor2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur ipsa commodi fugiat accusantium fuga sit repellendus ratione nesciunt expedita ab pariatur sed error nemo eum molestiae voluptatibus tempora voluptas accusamus labore consequatur voluptatum asperiores, vitae omnis? Magni, repellendus veritatis atque molestias quasi quae, consectetur rem repellat fuga quod perferendis, quo labore sapiente odio harum quam! Odit unde ex incidunt sequi! Inventore, incidunt architecto illo recusandae magni nostrum cupiditate voluptas est et dolore quam debitis sed animi totam. Adipisci unde asperiores minus minima omnis autem officia soluta incidunt commodi excepturi aspernatur esse, ab iure iste impedit labore! Iste explicabo atque rerum dolores perferendis quos ipsa vero, tempora, ratione unde, recusandae reprehenderit itaque voluptatem repellendus laborum. Animi qui et accusantium libero. Nisi sint reiciendis nam accusantium consequuntur, porro
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
                        
                        {/* <AboutLeader name="Alyana G. Pornelosa" imagePath="../../assets/Leader4Pornelosa.jpg" description="She is Alyana from Ontario, Canada. She studied Computer Science at Pamantasan ng Cabuyao, and a Frontend Developer for almost 5 years and also studied Web Design at Caprisa College in Canada."/> */}
                    </div>
                </div>

                <footer>
                    <p className="font-medium">All Rights Reserved</p>
                    <p className="font-medium">Copyright &copy; 2022</p>
                </footer>
            </div>
        </div>
    )
}

export default AboutPage
