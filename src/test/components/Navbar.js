import React from 'react'

function Navbar(){
    // Open Nav
    const openNav = () => {
        document.getElementById("mobile__menu").style.width = "100%"
    }
    // Close Nav
    const closeNav = () => {
        document.getElementById("mobile__menu").style.width = "0"
    }
    return(
        <div>
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo">LOGO</h1>
                <nav className="main__nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Tours</a></li>
                        <li><a href="/">Guides</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
                <div className="social__link">
                    <ul>
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter-square"></i></a></li>
                    </ul>
                </div>
                {/* Toggle */}
                <a className="menu" 
                onClick={openNav}
                ><i className="fa fa-bars fa-2x"></i></a>
            </div>
        </div>
        <div id="mobile__menu" className="overlay">
            <a className="close"
            onClick={closeNav}
            >&times;</a>
            <div className="overlay__content">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Tours</a>
                <a href="/">Guides</a>
                <a href="/">Contact</a>
            </div>
        </div>
        </div>
    )
}
export default Navbar