import React from 'react';
import '../styles/home.scss';
import vg from "../assets/1.jpg"
import {
    AiFillFacebook,
    AiFillAmazonCircle,
    AiFillGoogleCircle,
    AiFillInstagram
} from 'react-icons/ai'


const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>Uni Website design</h1>
                    <p>Expert website design and development.</p>
                </main>
            </div>
            {/*== My Skill ===*/}
            <div className='home2' id="services">
                <img src={vg} alt="development" />
                <div>
                    <h1>My Skill</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            {/*== About Us ===*/}
            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            {/*== Portfolio ===*/}
            <div className='home4' id="portfolio">
                <div>
                    <h1>My Portfolio</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillGoogleCircle />
                            <p>google</p>
                        </div>
                        <div style={{ animationDelay: "0.9s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>

            </div>
        </>
    )
}

export default Home