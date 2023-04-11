import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Catalog,
  Home,
  Item,
  Locations,
  NotFound,
} from "../pages";
import { Header } from "../ui-components";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:{title}' element={<Item />} />
          <Route path='/about' element={<About />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
