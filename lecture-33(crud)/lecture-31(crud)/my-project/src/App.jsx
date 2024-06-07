import './App.css'
// import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './Pages/Add'
import Error from './Pages/Error'
import EditUser from './Pages/EditUser'
import { Home1 } from './Pages/Home1'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="add" element={<Add />} />
          <Route path="/EditUser/:userId" element={<EditUser />} />
          <Route path="/*" element={<Error />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
