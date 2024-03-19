
import './App.css'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import IMD from '/src/IMG/IMD.png'
import Tomatoe from '/src/IMG/tomatoe.png'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movie from './Components/Movie/Movie'
import MovieDetails from './Components/Movie/MovieDetails'
import MovieCard from './Components/Movie/MovieCard'



function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Movie/>}/>
          <Route path='/details' element={<MovieDetails/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
