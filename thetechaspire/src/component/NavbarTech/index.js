import React, { useState } from "react"
import DropDownCourses from "../DropDownCourses"

import { FaCartPlus } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";



import './index.css'


const NavbarTech = () => {

    const [navActive, setNavActive] = useState(false)
    const [navNotActive, setNotActive] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    return (
        <nav className="nav">
            <a href={"/"}>
                <img className="image-logo-home" alt="logo" src="https://res.cloudinary.com/db7cqlrsa/image/upload/v1666941003/The%20tech%20Destiny/The-Tech-Destiny_Light-Bg-1-1-869x488_pdp27t.png" />
            </a>
            <div className="small-nav-container">
                <div className="small-device-active">
                    <FaCartPlus className="small-device-cart-icon"/>
                </div>
                <div onClick={() => {
                    setNavActive(!navActive)
                    setNotActive(!navNotActive)
                }} >

                    <div>
                        {!navNotActive ? <BsXLg className="small-device-cancel-icon"/> : <div className="nav-menu-bar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>}
                    </div>
                </div>
            </div>


            <div className={` ${navActive ? 'active' : ''} nav-menu-list`}>
                <ul className="nav-home-links-container" onClick={() => setNavActive(false)}>
                    <li><a className="link-homepage-main" href="/">Home</a></li>
                    <li onMouseEnter={() => setDropDown(true)}
                        onMouseLeave={() => setDropDown(false)}><a
                            className="link-homepage-main" href="/course">
                            Courses

                        </a>
                        {dropDown && <DropDownCourses />}
                    </li>
                    <li><a className="link-homepage-main" href="/lms">LMS</a></li>
                    <li><a className="link-homepage-main" href="/blogs">Blogs</a></li>
                    <li><a className="link-homepage-main" href="/contact">Contact Us</a></li>
                    <li><button className="button-login">Login</button></li>
                    <li><FaCartPlus  className="big-device-cart-icon"/></li>
                </ul>




            </div>
        </nav>
    )}

export default NavbarTech