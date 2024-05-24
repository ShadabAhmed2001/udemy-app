import React from 'react'
import "./style.css"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (


  <>
    {/* // ^ Nav Bar starts  */}

    <nav>
        <div className='menu'><RxHamburgerMenu /> </div>
        <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
      <div className='categories'><a href='#'>Categories</a></div>
      <div className='search'>
        <IoIosSearch className='search-icon' />
        <input type="text" placeholder='Search for anything' />
      </div>

      <div className='plans'><a href='#'>Plans & Pricing</a></div>

      <div className='business'><a href='#'>Udemy Business</a></div>
      <div className='teach'>
        <a href='#'>Teach on Udemy</a>
      </div>
      <div className='toggle-icons'>
      <IoIosSearch className='search-icon-toggle' />
      <a href="#" className='cart-icon' ><MdOutlineShoppingCart /></a>
      </div>
      <div className='acc-btns'>
        <button className='login'>Log in</button>
        <button className='signup'>Sign up</button>
        <button className='lang'><GrLanguage /></button>
      </div>
    </nav>

    {/* // ! Nav Bar ends */}


    {/* // ^ posture starts */}
      <div className="posture">
        <img src="https://img-c.udemycdn.com/notices/home_carousel_s…e/image/12c0830f-aa27-4843-993d-b440aa389991.jpeg" alt="" />
      </div>
    {/* // ! posture ends */}

    </>
  )
}

export default Navbar