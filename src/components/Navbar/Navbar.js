import React, { useState } from 'react'
import {Bars, Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

function Navbar(){
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick({click: !click})
    }
    return(
        <div>
            <Nav>
                <NavLink to="/">
                    <img alt="logo" />
                </NavLink>

                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to='/services' activeStyle>Services</NavLink>
                    <NavLink to='/contact-us' activeStyle>Contact Us</NavLink>
                    {/* 2nd Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>            
        </div>
    )
}
export default Navbar