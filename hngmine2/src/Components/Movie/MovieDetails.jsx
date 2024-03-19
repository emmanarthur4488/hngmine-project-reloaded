import React, { useEffect, useState } from 'react'
import './videodetails.css'
import Tv from '/src/IMG/tv.png'
import Home from '/src/IMG/Home.png'
import MovieProjector from '/src/IMG/Movie-Projector.png'
import Show from '/src/IMG/Show.png'
import Calendar from '/src/IMG/Calendar.png'
import Logout from '/src/IMG/Logout.png'
import Group from '/src/IMG/Group.png'
import Group1 from '/src/IMG/Group1.png'
import Star from '/src/IMG/Star.png'
import Heart from '/src/IMG/Heart.png'
import Share from '/src/IMG/Share.png'
import Bookmark from '/src/IMG/Bookmark.png'
import TwoTickets from '/src/IMG/Two-Tickets.png'
import List from '/src/IMG/List.png'
import ExpandArrow from '/src/IMG/Expand Arrow.png'
import Vector from '/src/IMG/Vector.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {

  const [isMobile, setIsMobile] = useState(false);

  const [movie, setMovie] = useState([])

  useEffect(() =>{
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b481a659203ddefe3ec399687c14e16b')
    .then(response =>{
      setMovie(response.data.results)
      
    }).catch(err=>{console.log(err)})
    
  },[0])

  return (


    <div>
      <div className="movie">
        <nav>
          <ul className={isMobile? "nav-link-mobile active" : "nav-link"}
          onClick={() => setIsMobile(false)}>
            <li className="tv">
              <img src={Tv} alt=""/><h2>MovieBox</h2>
            </li>
            <Link className="home-link" to='/'>
              <li className="tvv">
                <img src={Home} alt=""/><h2>Home</h2>
              </li>
            </Link>
            <li className="tvvv">
              <img src={MovieProjector} alt=""/><h2>Movies</h2>
            </li>
            <li className="tvv">
              <img src={Show} alt=""/><h2>TV Series</h2>
            </li>
            <li className="tvv">
              <img src={Calendar} alt=""/><h2>Upcoming</h2>
            </li>
            <div className="note">
              <p className="note1">
                Play movie quizes <br/>
                and earn <br/>
                free tickets
              </p>
              <p className="note2">
                50k people are playing <br/>
                now
              </p>
              <div className="playing">
                <p>Start Playing</p>
              </div>
            </div>
            <div className="logout">
              <img src={Logout} alt=""/><h2>Logout</h2>
            </div>
          </ul>

          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </nav>
        
        
        <div>
          <div className="video">
          {
            movie ? movie.map((movie, idx)=> (
            <div key={idx[0]} className="movie-card">
                  <Link className="link" to=''>
                    <img className="card-image" src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} alt="icon"/>
                    <div className="dics">
                    <div className="">
                      <div className="actions">
                      <h2 className="movie-tip">{movie.original_title}{movie.vote_average}</h2>

                        <div className="btn">
                          <div className="action-btn">
                            <button className="action">Action</button>
                          </div>
                          <div className="drama-btn">
                            <button className="action">Drama</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="description">
                      <p>{movie.overview}</p> 
                      </div>
                    </div>

                  <div className="links">
                    <div className="link">
                      <div className="link-icon">
                        <img className="icons" src={Heart} alt=""/>
                        <img className="icons" src={Share} alt=""/>
                        <img className="icons" src={Bookmark} alt=""/>
                        <img className="icons" src={Star} alt=""/>
                      </div>

                      <div className="likes">
                        <h2 className="like">8.5 <span>|350k</span></h2>
                      </div>
                    </div>
                    <div className="options">
                      <div className="option">
                        <img className="opt-image" src={TwoTickets} alt=""/>
                        <h2>See Showtimes</h2>
                      </div>

                      <div className="option2">
                        <img className="opt-image" src={List} alt=""/>
                        <h2>More watch options</h2>
                      </div>
                    </div>
                  </div>
          </div>

              
              </Link>
              </div>
            ))
            : null 
          }


            
            

            <div className="last">
              <div>
                <div>
                  <p className="text">Director: <span>Joseph Kosinski</span></p>
                  <p className="text">Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                  <p className="text">Star: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                </div>
                <div className="awards">
                  <div className="rated-awards">
                    <h2 className="rate-movie">Top rated moive #65</h2>
                    <h2 className="rate-award">Awards 9 nominations</h2>
                  </div>
                  <div>
                    <img className="dropdown" src={ExpandArrow} alt=""/>
                  </div>
                </div>
              </div>

              <div className="group1">
                <img className="group-image" src={Group1} alt=""/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
