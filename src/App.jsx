import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Rootlayout from "./layout/Rootlayout";
import Navbar from "./section/Navbar";
import Banner from "./section/Banner";
const App = () => {
  return (
    // <Routes>
    //   <Route element={<Rootlayout />}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/AboutMe" element={<AboutMe />} />
    //   </Route>
    // </Routes>
    <>
      <Navbar />
      <Banner/>
    </>
  );
};

export default App;
