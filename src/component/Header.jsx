import React from 'react'
import "./Header.css"
import hero from '../assets/Hero.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <h2>For Businesses<br />Looking <span style={{ color: 'red' }} >Beyond</span><br />Traditional SEO</h2>
                    <p> From logo to Design To Digital Experinces, we help Brands Stand out
                        in a Crowded World. Our Design Studio Thrives fresh ideas,clean Asthethics.
                    </p>
                    <button className="btns1">
                        <span>Meet Your SEO Partner</span>
                        <span className="arrow-circle">↗</span>
                    </button>
                </div>
                <div className="header-right">
                    <img src={hero} alt="SEO Illustration" />
                </div>
             
            </div>
        </>

    )
}

export default Header