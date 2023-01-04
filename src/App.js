import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ScrollTopArrow from "./components/ScrollToTop";

const Home = () => {
  return (
    <>
      <MainBody />
      <AboutMe />
      <Experience />
      <Project />
      <Skills />
      <Certifications />
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Footer />
      <ScrollTopArrow />
    </BrowserRouter>
  )
};

export default App;