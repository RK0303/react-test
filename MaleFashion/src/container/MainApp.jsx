import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Contacts from "./contacts/Contacts";
import { CssBaseline, Stack } from "@mui/material";
import NotFound from "./notFound/NotFound";
import Cart from "./cart/Cart";
export const Context = createContext();

const MainApp = () => {
  const [cart, setCart] = useState([])
  return (
    <Stack>
      <Context.Provider value={{cart, setCart}} >
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </Stack>
  );
};

export default MainApp;
