import React from 'react'
import './hero.css'
import Tv from '/src/IMG/tv.png'
import Icon from '/src/IMG/Icon.png'
import Menu from '/src/IMG/Menu.png'
import IMD from '/src/IMG/IMD.png'
import Tomatoe from '/src/IMG/tomatoe.png'
import Play from '/src/IMG/play.png'
import Poster from '/src/IMG/Poster.png'

const Hero = () => {
  return (
    <div>
      <div className="container">
          <div>
            <img className="banner" src={Poster} alt=""/>
          </div>
          <div className="nav">
                <div className="nav-link">
                    <img className="tv-icon" src={Tv} alt=""/>
                    <h2>MovieBox</h2>
                </div>

                <div className="nav-links">
                    <input type="search" placeholder="what do you want to watch"/>
                    <img className="icon" src={Icon} alt=""/>
                </div>

                <div className="nav-link">
                    <h3>Sign Up</h3>
                    <img className="menu" src={Menu} alt=""/>
                </div>
          </div>

            <div className="Parabellum">
                <h1 className="title" >John Wick 3 : <br/> Parabellum</h1>
                <div className="sub-rate">
                    <div className="rate">
                        <img src={IMD} alt=""/>
                        <p className="rate-title">86.0/100</p>
                    </div>

                    <div className="rate1">
                        <img src={Tomatoe} alt=""/>
                        <p className="rate-title">97%</p>
                    </div>
                </div>
                <div className="noted">
                    <p className="sub-note">John Wick is on the run after killing a member <br/> of the international assassins' guild, and with <br/> a $14 million price tag on his head, he is the <br/> target of hit men and women everywhere.</p>
                </div>
                <div className="watch">
                    <button className="btn"><img className="play" src={Play} alt=""/>watch trailer</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
