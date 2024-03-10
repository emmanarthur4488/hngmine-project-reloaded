import React, { useState } from 'react'
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

const MovieDetails = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (


    <div>
      <div className="movie">
        <nav>
          <ul className={isMobile? "nav-link-mobile active" : "nav-link"}
          onClick={() => setIsMobile(false)}>
            <li className="tv">
              <img src={Tv} alt=""/><h2>MovieBox</h2>
            </li>
            <li className="tvv">
              <img src={Home} alt=""/><h2>Home</h2>
            </li>
            <li className="tvvv">
              <img src={MovieProjector} alt=""/><h2>Movies</h2>
            </li>
            <li className="tvv">
              <img src={Show} alt=""/><h2>TV Series</h2>
            </li>
            <li className="tvv">
              <img src={Calendar} alt=""/><h2>upcoming</h2>
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
            <img className="group" src={Group} alt=""/>
            <div className="dics">
              <div className="">
                <div className="actions">
                  <h2 className="movie-tip">Top Gun: Maverick • 2022 • PG-13 • 2h 10m</h2>

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
                  <p>
                    After thirty years, Maverick is still pushing the envelope as a top naval aviator, <br/>
                    but must confront ghosts of his past when he leads TOP GUN's elite graduates <br/>
                    on a mission that demands the ultimate sacrifice from those chosen to fly it.
                  </p> 
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
