import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Catalog, Home, Item, NotFound } from "../pages";

const Index = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:{title}' element={<Item />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
