import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductMain from "./Page/ProductMain";
import Cart from "./Page/Cart";



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductMain />}></Route>
          <Route path="/cart" element=<Cart />></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
