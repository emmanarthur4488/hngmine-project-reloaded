
// import { Link } from 'react-router-dom'
import React, { useEffect, useState,} from 'react'
import axios from 'axios'

const Test = () => {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b481a659203ddefe3ec399687c14e16b')
        .then(response =>{
            console.log(response.data)
        })
    },[])
    
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Test
