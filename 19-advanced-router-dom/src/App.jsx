import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}>
          <Route path="mens" element={<Men/>}/>
          <Route path="womens" element={<Women/>}/>
          <Route path="kids" element={<Kids/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cource" element={<Courses/>}/>
        <Route path="/cource/:id" element={<CourseDetail/>}/>
        
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>


      <Footer/>
    </div>
  )
};

export default App;
