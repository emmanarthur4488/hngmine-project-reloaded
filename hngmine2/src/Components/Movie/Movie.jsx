import React from 'react'
import './moviedetails.css'
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'

const Movie = ({foods}) => {
  return (
    <div>
      <Hero/>
      <Features/>
      <div className="card-contianer">
          {
            foods && foods.map((food) =>

              <div>
                <div className="card">
                  <Link className="link" to={food.foodname}>
                    <div className="top-3">
                      <img className="image" src={food.image} alt=""/>
                    </div>
                    <p className="rate1">{food.price}</p>
                    <p className="title">{food.foodname}</p>

                    <div className="card-rate">
                      <div className="movie-rate">
                        <img src={food.image1} alt=""/>
                        <p className="rate">{food.rate}</p>
                      </div>
                      <div className="movie-rate">
                        <img src={food.image2} alt=""/>
                        <p className="rate">{food.rate2}</p>
                      </div>
                    </div>
                    <p className="rate1">{food.type}</p>
                  </Link>
                </div>
                <div></div>

                
              </div>
               
            )
          }
      </div>
      <Footer/>
    </div>
  )
}

export default Movie
