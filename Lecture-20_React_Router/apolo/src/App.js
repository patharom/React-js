import './App.css';
import Home from './Pages/Home';
import Contect from './Pages/Contect';
import Blog from './Pages/Blog';
import Page from './Pages/Page';
import Shop from './Pages/Shop';
import Aboutus from './Pages/Aboutus';
import Error404 from './Pages/Error404';
import OrderSummary from './Pages/OrderSummary';
import Product from './Pages/Product';
import ProductFeatures from './Pages/ProductFeatures';
import NewProduct from './Pages/NewProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contect" element={<Contect />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="Page" element={<Page />} />
          <Route path="*" element={<Error404 />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path="product" element={<Product />}>
            <Route path="productFeatures" element={<ProductFeatures />}></Route>
            <Route path="newProduct" element={<NewProduct />}></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
