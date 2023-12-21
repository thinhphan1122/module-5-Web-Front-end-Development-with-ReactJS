import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={`/products/:productId`} element={<ProductDetails />} />
        <Route path={"/products/add"} element={<ProductAdd />} />
        <Route path={`/products/edit/:productId`} element={<ProductEdit />} />
        <Route
          path={`/products/delete/:productId`}
          element={<ProductDelete />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
