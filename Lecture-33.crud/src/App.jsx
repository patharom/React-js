import './App.css'
import Home from './Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import User from './Pages/User'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>   
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/User" element={<User/>}/>
    </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App
