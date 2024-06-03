import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Contact from './Components/Contact';
import About from './Components/About';
import Error404 from "./Components/Error404";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/add' element={<Add/>}/>
              <Route path='/edit' element={<Edit/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<Error404/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
