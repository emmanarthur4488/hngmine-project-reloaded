import React from 'react'
import {useParams} from 'react-router-dom'

const MovieCard = () => {
    const {title, release_date, genre_ids} = useParams()
  return (
    <div>
      <div>
        <img className="card-image" src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} alt="icon"/>
      </div>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{genre_ids}</p>
    </div>
  )
}

export default MovieCard
