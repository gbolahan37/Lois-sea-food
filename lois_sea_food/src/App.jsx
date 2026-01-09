import './App.css'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import { BrowserRouter,Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
