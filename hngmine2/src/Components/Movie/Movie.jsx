import './moviedetails.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState,} from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import axios from 'axios'

const Movie = () => {

  const [movie, setMovie] = useState([])

  useEffect(() =>{
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b481a659203ddefe3ec399687c14e16b')
    .then(response =>{
      setMovie(response.data.results)
    }).catch(err=>{console.log(err)})
    
  },[])

  
  
  return (
    <div>
      <Hero/>
      <Features/>
      <div className="card-contianer">
          {
            movie.map((movie)=> (
              <div className="movie-card">
                  <Link className="link" to='/details'>
                    <div className="movie-image">
                        <img className="card-image" src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} alt="icon"/>
                    </div>

                    <div className="details">
                        <h5 className="title">{movie.title}</h5>
                        <p className="date">{movie.release_date}</p>
                        <p className="genre">{movie.genre_ids}</p>
                    </div>
                  </Link>
              </div>
            ))
           
          }
      </div>
      <Footer/>
    </div>
  )
}

export default Movie
