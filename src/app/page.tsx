"use client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ConsignGeneral from "./pages/consign/general";
import ConsignTitle from "./pages/consign/title";
import ConsignPricing from "./pages/consign/pricing";
import ConsignPhotos from "./pages/consign/photos";
import ConsignReview from "./pages/consign/review";
import ListedOverview from "./pages/listed/overview";
import About from "./pages/about";
import Health from "./pages/health";
import { createContext, useContext } from 'react';


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export const ThemeContext = createContext(null);
import PropertyProfile from "@/components/PropertyProfile/PropertyProfile";

PropertyProfile.setPropertyId(null);

function App() {

  return (
    <div>
    <BrowserRouter>
      <ThemeContext.Provider value="dark">
      <Header></Header>
      <main className="">
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<About />}/>
          <Route path="/health" element={<About />}/>
          <Route path="/consign/general" element={<ConsignGeneral/>}></Route>
          <Route path="/consign/title" element={<ConsignTitle/>}></Route>
          <Route path="/consign/pricing" element={<ConsignPricing/>}></Route>
          <Route path="/consign/photos" element={<ConsignPhotos/>}></Route>
          <Route path="/consign/review" element={<ConsignReview/>}></Route>
          <Route path="/listed/overview" element={<ListedOverview/>}></Route>



          <Route path="/" element={<Home />} />
        </Routes>

        
      </main>
      <Footer></Footer>
      </ThemeContext.Provider>
    </BrowserRouter>
    </div>

  );
}

export default App;