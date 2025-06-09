import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image
import hero from "/hero.gif"



function Home() {

    const [input, setValue] = useState("")
    return (
        <>
            <Navbar />

            <main>
                <section className='section-hero'>

                    <div className='wrapper'>
                        <div className='container-hero flex items-center gap-52 '>
                            <div>
                                <h1 className='hero-main-text'>Decentralized marketplace with Waffle</h1>
                                <p className='sub-text mb-11'>Waffle is a peer-to-peer cross-chain centralized-&-decentralized marketplace with sales & support.</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>


                            <div className='hero-img'>
                                <img src={hero} alt="" className=''/>

                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home