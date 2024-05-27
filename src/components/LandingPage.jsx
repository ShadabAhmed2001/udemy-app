import React from 'react'
import "./style.css"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const LandingPage = () => {
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
      <div className="poster">
        <button className="left-arrow"><IoIosArrowBack /></button>
        <img src="	https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="" />
        <div className='poster-content'>
          <h1>Learning that gets you</h1>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
        <button className="right-arrow"><IoIosArrowForward /></button>

      </div>
      {/* // ! posture ends */}


      {/* //^ hidden poster-content starts */}
      <div className="toggle-poster-content">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
        <input type="text" placeholder='What do you want to learn?' />
        <IoIosSearch className='toggle-search' />
      </div>
      {/* //! hidden poster-content ends */}



      {/* //^  banner bottom starts */}
      <div className='banner-bottom'>
        <h1>All the skills you need in one place</h1>
        <p>From critical skills to technical topics, Udemy supports your professional development.</p>
      </div>

      {/* //!  banner bottom ends  */}


      {/* //^ courses content starts */}
      <div className="courses">


        <div className="course-category">
          <div className='first'>
            <h4>Web Development</h4>
            <MdKeyboardArrowUp className='toggle-arrow' />
          </div>
          <div>
            <h4>IT Certifications</h4>
          </div>
          <div>
            <h4>Leadership</h4>
          </div>
          <div>
            <h4>Data Science</h4>
          </div>
          <div>
            <h4>Communication</h4>
          </div>
          <div>
            <h4>Business Analytics & Intelligence</h4>
          </div>
        </div>


        <div className="course-content">

          <div className="tech-category">
            <div className='wd'>
              <h4 style={{ color: "white" }}>Web Development</h4>
              <p style={{ color: "white" }}>13.3M+ learners</p>
            </div>
            <div className='js'>
              <h4>JavaScript</h4>
              <p>16.6M+ learners</p>
            </div>
            <div className='rjs'>
              <h4>React JS</h4>
              <p>7M+ learners</p>
            </div>
            <div className='ajs'>
              <h4>Angular</h4>
              <p>4M+ learners</p>
            </div>
            <div className='jv'>
              <h4>Java</h4>
              <p>14.4M+ learners</p>
            </div>
            <div className='ad'>
              <h4>Android Development</h4>
              <p>8M+ learners</p>
            </div>
            <div className='id'>
              <h4>iOS Development</h4>
              <p>4M+ learners</p>
            </div>
            <div className='css'>
              <h4>CSS</h4>
              <p>9M+ learners</p>
            </div>
          </div>

          <div className="course-cards">

            <div className="card">
              <img src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg" alt="" />
              <div className="card-details">
                <h4>The Complete 2024 Web Development Bootcamp</h4>
                <p>Dr. Angela Yu</p>
                <div className="rating">
                    <h5>4.7</h5>
                    <span className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke/></span><span className="count">(379,210)</span>
                </div>
                <h4><FaRupeeSign style={{fontSize:"13px"}} />3,099</h4>
              </div>
            </div>

            <div className="card">
              <img src="https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg" alt="" />
              <div className="card-details">
                <h4>The Web Developer Bootcamp 2024</h4>
                <p>Colt Steele</p>
                <div className="rating">
                    <h5>4.7</h5>
                  
                  <span className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke/></span><span className="count">(272,500)</span></div>
                <h4><FaRupeeSign style={{fontSize:"13px"}} />3,099</h4>
              </div>
            </div>

            <div className="card">
              <img src="https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg" alt="" />
              <div className="card-details">
                <h4>Web Development Masterclass - Online Certification Course</h4>
                <p>YouAccel Training</p>
                <div className="rating">
                <h5>4.4</h5>
                  <span className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke/></span><span className="count">(9,798)</span></div>
                <h4><FaRupeeSign style={{fontSize:"13px"}} />3,099</h4>
              </div>
            </div>

            <div className="card">
              <img src="https://img-c.udemycdn.com/course/240x135/1415652_ad99_4.jpg" alt="" />
              <div className="card-details">
                <h4>Practical Web Development: 22 Courses in 1</h4>
                <p>Creative Online School</p>
                <div className="rating">
                <h5>4.3</h5>
                  <span className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke/></span><span className="count">(4,303)</span>
                  
                  </div>
                <h4><FaRupeeSign style={{fontSize:"13px"}} />3,299</h4>
              </div>
            </div>

          </div>
          <button className="show-more">Show all Web Development courses</button>
        </div>

      </div>
      {/* //! courses content ends */}

    </>
  )
}

export default LandingPage