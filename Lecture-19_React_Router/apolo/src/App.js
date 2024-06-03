import './App.css';
import Home from './Pages/Home';
import Contect from './Pages/Contect';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Page from './Pages/Page';
import Error404 from './Pages/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<Contect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/page" element={<Page />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
