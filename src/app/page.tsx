"use client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ConsignGeneral from "./pages/consign/general";
import ConsignTitle from "./pages/consign/title";
import ConsignPricing from "./pages/consign/pricing";
import ConsignPhotos from "./pages/consign/photos";
import ConsignReview from "./pages/consign/review";
import ManageDashboard from "./pages/manage/dashboard";
import ManageUnlisted from "./pages/manage/unlisted";
import ManageListed from "./pages/manage/listed";
import ManageClosed from "./pages/manage/closed";
import ManageDrafts from "./pages/manage/closed";
import About from "./pages/about";


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div>

    <BrowserRouter>
      <Header></Header>
      <main className="">
      <React.Fragment>
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<About />}/>
          <Route path="/consign/general" element={<ConsignGeneral/>}></Route>
          <Route path="/consign/title" element={<ConsignTitle/>}></Route>
          <Route path="/consign/pricing" element={<ConsignPricing/>}></Route>
          <Route path="/consign/photos" element={<ConsignPhotos/>}></Route>
          <Route path="/consign/review" element={<ConsignReview/>}></Route>
          <Route path="/manage/drafts" element={<ManageDrafts/>}></Route>
          <Route path="/manage/unlisted" element={<ManageUnlisted/>}></Route>
          <Route path="/manage/listed" element={<ManageListed/>}></Route>
          <Route path="/manage/closed" element={<ManageClosed/>}></Route>
          <Route path="/manage/dashboard"  element={<ManageDashboard/>}></Route>


          <Route path="/" element={<Home />} />
        </Routes>
        </React.Fragment>

        
      </main>
      <Footer></Footer>
    </BrowserRouter>
    </div>

  );
}

export default App;