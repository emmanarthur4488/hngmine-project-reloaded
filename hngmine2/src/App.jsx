
import './App.css'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Poster1 from '/src/IMG/Poster1.png'
import Poster2 from '/src/IMG/Poster2.png'
import Poster3 from '/src/IMG/Poster3.png'
import Poster4 from '/src/IMG/Poster4.png'
import Poster5 from '/src/IMG/Poster5.png'
import Poster6 from '/src/IMG/Poster6.png'
import Poster7 from '/src/IMG/Poster7.png'
import Poster8 from '/src/IMG/Poster8.png'
import IMD from '/src/IMG/IMD.png'
import Tomatoe from '/src/IMG/tomatoe.png'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movie from './Components/Movie/Movie'
import MovieDetails from './Components/Movie/MovieDetails'

function App() {

  const foods = [
    {id: 1, foodname: 'Stranger Things', image: Poster1, price: 'USA, 2016-current', image1: IMD, image2: Tomatoe, rate: '86.0/100', rate2: '97%', type: 'Action, Adventure, Horror'},
    {id: 2, foodname: 'Batman Begins', image: Poster2, price: 'USA, 2005', image1: IMD, image2: Tomatoe, rate: '82.0/100', rate2: '70%', type: 'Action, Adventure'},
    {id: 3, foodname: 'Spider-Man : Into The Spider Verse', image: Poster3, price: 'USA, 2018', image1: IMD, image2: Tomatoe, rate: '84.00/100', rate2: '87%', type: 'Anination, Action, Adventure'},
    {id: 4, foodname: 'Dunkirk', image: Poster4, price: 'USA, 2017', image1: IMD, image2: Tomatoe, rate: '78.0/100', rate2: '94%', type: 'Action, Drama, History'},
    {id: 5, foodname: 'Dune', image: Poster5, price: 'USA, 2016-current', image1: IMD, image2: Tomatoe, rate: '86.0/100', rate2: '97%', type: 'Action, Adventure, Horror'},
    {id: 6, foodname: 'No Time To Die', image: Poster6, price: 'USA, 2005', image1: IMD, image2: Tomatoe, rate: '82.0/100', rate2: '70%', type: 'Action, Adventure'},
    {id: 7, foodname: 'Shang-Chi and the Legend of the Ten Rings', image: Poster7, price: 'USA, 2018', image1: IMD, image2: Tomatoe, rate: '84.00/100', rate2: '87%', type: 'Anination, Action, Adventure'},
    {id: 8, foodname: 'Dont Breathe 2', image: Poster8, price: 'USA, 2017', image1: IMD, image2: Tomatoe, rate: '78.0/100', rate2: '94%', type: 'Action, Drama, History'},
    {id: 9, foodname: 'Dune', image: Poster5, price: 'USA, 2016-current', image1: IMD, image2: Tomatoe, rate: '86.0/100', rate2: '97%', type: 'Action, Adventure, Horror'},
    {id: 10, foodname: 'No Time To Die', image: Poster6, price: 'USA, 2005', image1: IMD, image2: Tomatoe, rate: '82.0/100', rate2: '70%', type: 'Action, Adventure'},
    {id: 11, foodname: 'Shang-Chi and the Legend of the Ten Rings', image: Poster7, price: 'USA, 2018', image1: IMD, image2: Tomatoe, rate: '84.00/100', rate2: '87%', type: 'Anination, Action, Adventure'},
    {id: 12, foodname: 'Dont Breathe 2', image: Poster8, price: 'USA, 2017', image1: IMD, image2: Tomatoe, rate: '78.0/100', rate2: '94%', type: 'Action, Drama, History'},
  ]
  

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Movie foods={foods}/>}/>
          <Route path='/:name' element={<MovieDetails foods={foods}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
