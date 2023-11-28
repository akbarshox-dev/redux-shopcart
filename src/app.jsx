import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layouts/layout";
import Carts from "./pages/cart";


export default function App () {
  return <>
    <Routes>
      <Route element={<Layout/>} path="/" >
        <Route index element={ <Home/> } ></Route>
        <Route path="/carts" element={ <Carts/> } ></Route>
      </Route>
    </Routes>
  </>
}