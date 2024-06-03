
import './App.css';
import Components from './Components';
import Navbar from './Navbar';
import {BrowserRouter , Router , Routes} from 'react-router-dom'

/* First React Component */

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
        <Routes ></Routes>
      <Navbar/>
      <h1>This is ReactApp</h1>
      <Components/>
      </Router>
    </BrowserRouter>
    </>
  );
}

export default App;




