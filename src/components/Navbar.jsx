import React, { useState } from 'react'

//Image
import logo from "/logo.png"
import { AlignJustify, Search } from 'lucide-react'

function Navbar() {


    // const [isMenuOpen, setIsMenuOpen] = useState(false)

    // const handleNavMenu = () => {
    //     setIsMenuOpen(!isMenuOpen)
    // }
    return (
        <>
            <header>
                <nav className=' shadow-sm'>
                    <div className='wrapper'>
                        <div className='navBar flex items-center justify-between'>
                            <img src={logo} alt="" width={100} height={60}/>

                            <div className="navLink flex justify-between ">
                                <ul  className='flex items-center'>
                                    <li>Home</li>
                                    <li>Market</li>
                                    <li>Support</li>
                                    <li>Docs</li>
                                </ul>
                                <div className='m-nav-btn-hide'>
                                    <input type="text" />
                                    <Search  className='search-icon'/>
                                    {/* <AlignJustify className='m-theebar' onClick={handleNavMenu} /> */}
                                </div>
                            </div>



                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar