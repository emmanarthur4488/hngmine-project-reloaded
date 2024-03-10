import React from 'react'
import './features.css'
import Icon2 from '/src/IMG/Icon2.png'

const Features = () => {
  return (
    <div>
      <div className="feature">
        <div><h1 className="feature-title">Featured Movies</h1></div>
        <div className="more">
            <div>
             <p className="see-more">see more</p>
            </div>
            <div>
             <img className="icon2" src={Icon2} alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
