import React from 'react'
import './footer.css'
import Facebook from '/src/IMG/facebook.png'
import Instagram from '/src/IMG/instagram.png'
import Youtube from '/src/IMG/youtube.png'
import Twitter from '/src/IMG/twitter.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-icon">
            <img src={Facebook} alt=""/>
        </div>

        <div className="footer-icon">
            <img src={Instagram} alt=""/>
        </div>
              
        <div className="footer-icon">
            <img src={Twitter} alt=""/>
        </div>
              
        <div className="footer-icon">
            <img src={Youtube} alt=""/>
        </div>
      </div>
      <div className="private">
        <div className="private-note">
            <p>Condition of use</p>
        </div>

        <div className="private-note">
            <p>Privacy & Policy</p>
        </div>

        <div className="private-note">
            <p>Press Room</p>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 MovieBox by Arthur Emmanuel
      </div>
    </div>
  )
}

export default Footer
